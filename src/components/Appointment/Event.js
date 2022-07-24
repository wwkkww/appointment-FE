import React from "react";
import { format } from "date-fns";
import "./styles.css";
import { Modal } from "./Modal";

export const Event = ({
  event,
  setViewingEvent,
  setShowingEventForm,
  deleteEvent,
}) => {
  return (
    <Modal
      onClose={() => setViewingEvent(null)}
      title={`${event.title} (${event.type})`}
      className="eventModal"
    >
      <p>
        Organizer:{" "}<b>({event.createdBy})</b>
      </p>
      <p>
        Appointment date:{" "}<b>{format(new Date(event.eventDate), "dd-MMM-yyyy h:mm aa")}</b>
      </p>
      
      <p>{event.description}</p>

      <button
        href="javascript:;"
        onClick={() => {
          setViewingEvent(null);
          setShowingEventForm({ visible: true, withEvent: event });
        }}
      >
        Change this event
      </button>

      <button
        className="red"
        href="javascript:;"
        onClick={() => deleteEvent(event)}
      >
        Delete this event
      </button>

      <a
        className="close"
        href="javascript:;"
        onClick={() => setViewingEvent(null)}
      >
        Back to calendar
      </a>
    </Modal>
  );
};
