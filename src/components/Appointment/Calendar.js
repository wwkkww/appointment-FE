import React, { useState, useEffect, Fragment } from "react";
import { MOCK_LOADING_TIME } from "../../utils/helper";
import "./styles.css";
import { Navigation } from "./Navigation";
import { Grid } from "./Grid";
import { DayLabels } from "./DaysLabel";
import { Loader } from "./Loader";
import { Event } from "./Event";
import { Feedback } from "./Feedback";
import { EventForm } from "./EventForm";

const parseEvents = (events) => {
  // data massage here
  return events.map((event) => event);
  // return events.map((event) => {
  // const from = new Date(event.dateFrom)
  // const to = new Date(event.dateTo)

  // return {
  //   ...event,
  //   from,
  //   to
  // }
  // });
};

const Calendar = ({ preloadedEvents = [] }) => {
  const selectedDate = new Date();
  const [date, setDate] = useState(selectedDate);
  const [viewingEvent, setViewingEvent] = useState(false);
  const [showingEventForm, setShowingEventForm] = useState({ visible: false });
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState();

  // const parsedEvents = parseEvents(preloadedEvents);
  const [events, setEvents] = useState(preloadedEvents);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    setIsLoading(true);

    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://localhost:5000/appointments", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (data?.length > 0) {
          setEvents(data);
        }
      })
      .catch((error) => alert(JSON.stringify(error)))
      .finally(() => setIsLoading(false));
  };

  const validation = (event) => {
    if (event.title && event.createdBy && event.description) {
      return true;
    }
    alert("Please fill in all the field");
    return false;
  };

  const addEvent = (event) => {
    console.log("event", event);
    if (!validation(event)) {
      return;
    }

    setIsLoading(true);
    setShowingEventForm({ visible: false });

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    };
    fetch("http://localhost:5000/appointments", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const updatedEvents = [...events, data];
        setEvents(updatedEvents);
        setIsLoading(false);
        showFeedback({
          message: "Event created successfully",
          type: "success",
        });
      })
      .catch((error) => alert(JSON.stringify(error)))
      .finally(() => setIsLoading(false));
  };

  const editEvent = (event) => {
    if (!validation(event)) {
      return;
    }

    setIsLoading(true);
    setShowingEventForm({ visible: false });

    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    };
    fetch(`http://localhost:5000/appointments/${event.id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const updatedEvents = events.map((e) =>
          e.id === event.id ? event : e
        );
        setEvents(updatedEvents);
        setIsLoading(false);
        showFeedback({ message: "Event edited successfully", type: "success" });
      })
      .catch((error) => alert(JSON.stringify(error)))
      .finally(() => setIsLoading(false));
  };

  const deleteEvent = (event) => {
    setIsLoading(true);
    setViewingEvent(null);

    fetch(`http://localhost:5000/appointments/${event.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log('delete response', response);
        if(response.status === 200) {
          const updatedEvents = events.filter((e) => e.id !== event.id);
          setEvents(updatedEvents);
          showFeedback({ message: "Event deleted successfully", type: "success" });
        } else {
          showFeedback({ message: "Failed to delete", type: "error" });
        }
        setIsLoading(false);
      })
      .catch((error) => alert(JSON.stringify(error)))
      .finally(() => setIsLoading(false));

  };

  const showFeedback = ({ message, type, timeout = 2500 }) => {
    setFeedback({ message, type });
    setTimeout(() => {
      setFeedback(null);
    }, timeout);
  };

  return (
    <div className="calendar">
      {isLoading && <Loader />}
      {feedback && <Feedback message={feedback.message} type={feedback.type} />}
      <Navigation
        date={date}
        setDate={setDate}
        setShowingEventForm={setShowingEventForm}
      />
      <DayLabels />

      <Grid
        date={date}
        events={events}
        setShowingEventForm={setShowingEventForm}
        setViewingEvent={setViewingEvent}
        actualDate={date}
      />

      {viewingEvent && (
        <Event
          event={viewingEvent}
          setShowingEventForm={setShowingEventForm}
          setViewingEvent={setViewingEvent}
          deleteEvent={deleteEvent}
        />
      )}

      {showingEventForm && showingEventForm.visible && (
        <EventForm
          withEvent={showingEventForm.withEvent}
          preselectedDate={showingEventForm.preselectedDate}
          setShowingEventForm={setShowingEventForm}
          addEvent={addEvent}
          editEvent={editEvent}
          setViewingEvent={setViewingEvent}
        />
      )}
    </div>
  );
};

export default Calendar;
