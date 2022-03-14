import * as React from 'react';
import { Checkbox } from '../checkbox';
import { EventsContext } from '../../event-context';
import './event-list.scss';

export const EventList = () => {
  const { events, setEvents } = React.useContext(EventsContext);

  const handleDelete = (time) => {
    setEvents(events.filter((el) => el.time !== time));
  };

  const toggleCheck = (time) => {
    setEvents(events.map((el) => {
      if (el.time === time) {
        return {
          ...el,
          checked: !el.checked,
        };
      }
      return el;
    }));
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
          {events.sort((a, b) => ((a.time > b.time) ? 1 : -1))
            .map((eventItem) => (
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
