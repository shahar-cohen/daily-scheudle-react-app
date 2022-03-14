import * as React from 'react';
import { Checkbox } from '../checkbox';
import { EventsContext } from '../../event-context';
import './event-list.scss';

export const EventList = () => {
  const { events, setEvents } = React.useContext(EventsContext);

  const handleDelete = (time) => {
    // add function to delete an event
  };

  const toggleCheck = (time) => {
    // add function to toggle checked state
  };

  const handleKeyUp = (e, time) => {
    if (e.keyCode === 13) {
      toggleCheck(time);
    }
  };

  return (
    <div className="event-list">
      <span className="event-list-title">Schedule:</span>
      {events.length ? (
        <div className="event-list-content">
          {events.map((eventItem) => (
              <Checkbox
                key={eventItem.time}
                label={eventItem.label}
                time={eventItem.time}
                checked={eventItem.checked}
                onClick={() => toggleCheck(eventItem.time)}
                onKeyUp={(e) => handleKeyUp(e, eventItem.time)}
                onDelete={() => handleDelete(eventItem.time)}
              />
          ))}
        </div>
      ) : (
        <div className="no-events">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  );
};
