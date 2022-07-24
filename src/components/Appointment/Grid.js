import React, { Fragment } from 'react'
import "./styles.css";
import {
  differenceInDays,
  startOfToday,
  startOfDay,
  isSameDay
} from "date-fns";
import { toStartOfDay} from "../../utils/helper";


const MiniEvent = ({ event, setViewingEvent }) => {
  return (
    <div
      className={`miniEvent ${
        event.type ? event.type.toLowerCase() : "critical"
      }`}
      onClick={() => setViewingEvent(event)}
    >
      {event.title}
    </div>
  );
};

export const Grid = ({
  date,
  events,
  setViewingEvent,
  setShowingEventForm,
  actualDate,
}) => {
  const ROWS_COUNT = 6;
  const currentDate = toStartOfDay(new Date());

  const startingDate = new Date(date.getFullYear(), date.getMonth(), 1);
  startingDate.setDate(startingDate.getDate() - (startingDate.getDay() - 1));

  const findEventsForDate = (events, date) => events.filter((event) => isSameDay(new Date(event.eventDate), new Date(date)));

  const dates = [];
  for (let i = 0; i < ROWS_COUNT * 7; i++) {
    const date = new Date(startingDate);
    dates.push({ date, events: findEventsForDate(events, date) });
    startingDate.setDate(startingDate.getDate() + 1);
  }

  const validForBooking = (_date) => {
    // Close on Saturday and Sunday ✅
    const isWeekend = _date.getDay() === 6 || _date.getDay() === 0;
  
    // Booking made 2 business day in advance (exclude weekend) ✅
    let daysAdvance = 2;
    switch (new Date().getDay()) {
      case 4:
        daysAdvance += 3;
        break;
      case 5:
        daysAdvance += 2;
        break;
      case 6:
        daysAdvance += 1;
        break;
      default:
        break;
    }

    const twoBusinessDayAdvance = differenceInDays(startOfDay(_date), startOfToday()) > daysAdvance;
  
    // Booking within 3 weeks in advance  ✅
    const withinThreeWeeks = differenceInDays(startOfDay(_date), startOfToday()) < 21;
  
    return !isWeekend && withinThreeWeeks && twoBusinessDayAdvance;
  };

  return (
    <Fragment>
      {dates.map((date, index) => {
        return (
          <div
            key={index}
            className={`cell ${
              date.date.getTime() === currentDate.getTime() ? "current" : ""
            } ${
              date.date.getMonth() !== actualDate.getMonth() ? "otherMonth" : ""
            }`}
          >
            <div className="date">
              {date.date.getDate()}
              {validForBooking(date.date) ? (
                <a
                  href="javascript:;"
                  className="addEventOnDay"
                  onClick={() => {
                    console.log(date.date)
                    setShowingEventForm({visible: true, preselectedDate: date.date})

                  }
                  }
                >
                  +
                </a>
              ) : null}
            </div>
            {date.events.map((event, index) => (
              <MiniEvent
                key={index}
                event={event}
                setViewingEvent={setViewingEvent}
              />
            ))}
          </div>
        );
      })}
    </Fragment>
  );
};
