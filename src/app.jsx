import * as React from 'react';
import { EventForm } from './components/event-form';
import { EventList } from './components/event-list';
import { EventResults } from './components/event-results';
import { EventsContext } from './event-context';
import './index.scss';

const eventsTemplate = [
  {
    time: '09:00',
    label: 'Fix an ability to display all events',
    checked: false,
  },
  {
    time: '10:00',
    label: 'Fix a layout, checkboxes should be listed vertically',
    checked: false,
  },
  {
    time: '11:00',
    label: 'Fix an ability to add a new event',
    checked: false,
  },
  {
    time: '12:00',
    label: 'Fix an ability to toggle a event',
    checked: false,
  },
  {
    time: '06:00',
    label: 'Events are not shown in chronological order',
    checked: false,
  },
  {
    time: '13:00',
    label: 'Fix an ability to delete a event',
    checked: false,
  },
  {
    time: '14:00',
    label: 'Fix an ability to show total amount of events',
    checked: false,
  },
];

export const App = () => {
  const [events, setEvents] = React.useState([]);

  return (
    <div className="root">
      <EventsContext.Provider value={{ events }}>
        <EventList />
        <EventResults />
        <EventForm />
      </EventsContext.Provider>
    </div>
  );
};
