import React, { useState, Fragment, useEffect } from "react";
import { addDays, set, addBusinessDays } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  isWeekdays,
  nonWorkingHours,
  dateToInputFormat,
} from "../../utils/helper";
import "./styles.css";
import { Modal } from "./Modal";

export const EventForm = ({
  setShowingEventForm,
  addEvent,
  editEvent,
  withEvent,
  setViewingEvent,
  preselectedDate,
}) => {
  const newEvent = withEvent || {};
  console.log("preselectedDate", preselectedDate);
  if (!withEvent && !!preselectedDate) {
    newEvent.eventDate = dateToInputFormat(preselectedDate);
    console.log("inside !withEvent && !!preselectedDate");
    console.log(dateToInputFormat(preselectedDate));
  }
  const [event, setEvent] = useState(newEvent);
  const [eventDate, setEventDate] = useState(
    withEvent
      ? new Date(event.eventDate)
      : !!preselectedDate
      ? set(new Date(newEvent.eventDate), { hours: 9, minutes: 0 })
      : set(addBusinessDays(new Date(), 3), { hours: 9, minutes: 0 })
  );

  const changeDate = (e) => {
    setEventDate(new Date(e));
    setEvent({ ...event, eventDate: new Date(e) });
  };

  const validation = () => {
    if(event.title && event.createdBy && event.description) {
      return true
    }
    return false
  }

  return (
    <Modal
      onClose={() => setShowingEventForm({ visible: false })}
      title={`${withEvent ? "Edit Appointment" : "New Appointment"}`}
    >
      <div className="form">
        <label>
          Subject / Title
          <input
            type="text"
            placeholder="ie. Meeting title"
            defaultValue={event.title}
            onChange={(e) => setEvent({ ...event, title: e.target.value })}
          />
        </label>

        <label>
          Organizer
          <input
            type="text"
            placeholder="Organizer name"
            defaultValue={event.createdBy}
            onChange={(e) => setEvent({ ...event, createdBy: e.target.value })}
          />
        </label>

        <label>
          Date
          <DatePicker
            onChange={changeDate}
            selected={eventDate}
            excludeTimes={nonWorkingHours}
            filterDate={isWeekdays}
            minDate={addDays(new Date(), 2)}
            maxDate={addDays(new Date(), 21)}
            timeIntervals={60}
            showTimeSelect
            dateFormat={"d MMMM, yyyy h:mm aa"}
            calendarStartDay={1}
          />
        </label>

        <label>
          Priority
          <select
            value={event.type ? event.type.toLowerCase() : "low"}
            onChange={(e) => setEvent({ ...event, type: e.target.value })}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="critical">Critical</option>
          </select>
        </label>

        <label>
          Description
          <input
            type="text"
            placeholder="Details for this meeting"
            defaultValue={event.description}
            onChange={(e) =>
              setEvent({ ...event, description: e.target.value })
            }
          />
        </label>

        {withEvent ? (
          <Fragment>
            <button onClick={() => editEvent(event)}>Edit appointment</button>
            <a
              className="close"
              href="javascript:;"
              onClick={() => {
                setShowingEventForm({ visible: false });
                setViewingEvent(event);
              }}
            >
              Cancel (go back to appointment view)
            </a>
          </Fragment>
        ) : (
          <Fragment>
            <button onClick={() => addEvent(event)}>
              Add event to calendar
            </button>
            <a
              className="close"
              href="javascript:;"
              onClick={() => setShowingEventForm({ visible: false })}
            >
              Cancel (Back to calendar)
            </a>
          </Fragment>
        )}
      </div>
    </Modal>
  );
};
