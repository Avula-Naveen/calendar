import React from 'react';
import dayjs from 'dayjs';

function Calendar({ date, events }) {
  const startOfMonth = date.startOf('month');
  const endOfMonth = date.endOf('month');
  const startDate = startOfMonth.startOf('week');
  const endDate = endOfMonth.endOf('week');

  const today = dayjs();
  const days = [];

  let day = startDate;
  while (day.isBefore(endDate, 'day')) {
    days.push(day);
    day = day.add(1, 'day');
  }

  const getEventsForDay = (day) => {
    return events.filter(event => dayjs(event.date).isSame(day, 'day'));
  };

  return (
    <div className="grid grid-cols-7 gap-2">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
        <div key={d} className="text-center font-semibold">{d}</div>
      ))}
      {days.map((d, idx) => {
        const dayEvents = getEventsForDay(d);
        const isToday = d.isSame(today, 'day');
        return (
          <div
            key={idx}
            className={`border p-2 rounded h-28 overflow-y-auto ${isToday ? 'bg-yellow-100 border-yellow-500' : 'bg-gray-50'}`}
          >
            <div className="text-sm font-bold">{d.date()}</div>
            {dayEvents.map((event, index) => (
              <div
                key={index}
                className="text-xs mt-1 p-1 rounded bg-blue-200 text-blue-800"
                title={`${event.title} (${event.time})`}
              >
                {event.title}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Calendar;