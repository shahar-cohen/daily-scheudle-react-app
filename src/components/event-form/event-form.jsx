import * as React from 'react';
import { EventsContext } from '../../event-context';
import './event-form.scss';

export const EventForm = () => {
  const { events, setEvents } = React.useContext(EventsContext);
  const [title, setTitle] = React.useState('');
  const [time, setTime] = React.useState('');

  const handleAddEvent = () => {
    if (title && time) {
      if (events.some((el) => el.time === time)) {
        // eslint-disable-next-line no-alert
        window.alert(`Event already set to ${time}`);
      } else {
        // add ability to add event

        // clear event after it has been added
      }
      setTime('');
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddEvent();
    }
  };

  return (
    <div className="event-form">
      <input
        id="event-time"
        type="time"
        name="event-time"
        onChange={(e) => setTime(e.target.value)}
        onKeyUp={handleKeyUp}
        required
      />
      <input
        placeholder="Enter new event"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddEvent}>
        Add event
      </button>
    </div>
  );
};
