import * as React from 'react';
import { EventsContext } from '../../event-context';
import './event-results.scss';

export const EventResults = () => {
  const { events } = React.useContext(EventsContext);

  return (
    <div className="event-results">
      {`Events Today: ${events.length}`}
    </div>
  );
};
