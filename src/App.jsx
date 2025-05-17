import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Calendar from './components/Calendar';
import eventsData from '../public/events.json';

function App() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  return (
    <div className="p-4 font-sans min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePrevMonth} className="px-4 py-2 bg-blue-500 text-white rounded">Prev</button>
          <h1 className="text-2xl font-bold">
            {currentDate.format('MMMM YYYY')}
          </h1>
          <button onClick={handleNextMonth} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
        </div>
        <Calendar date={currentDate} events={events} />
      </div>
    </div>
  );
}

export default App; 