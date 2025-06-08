import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react';

export default function CalendarView() {
  const [events, setEvents] = useState([
    { title: 'Initial Event', date: new Date().toISOString().slice(0,10) },
  ]);
  const handleDateClick = (arg) => {
    const title = prompt('New event title:');
    if (title) {
      setEvents([...events, { title, date: arg.dateStr }]);
    }
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      dateClick={handleDateClick}
    />
  );
}
