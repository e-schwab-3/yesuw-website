import React, { useState, useEffect } from 'react';
import './Home.css';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const calendarId = encodeURIComponent(process.env.REACT_APP_CALENDAR_ID);
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?` +
          new URLSearchParams({
            key: process.env.REACT_APP_GOOGLE_API_KEY,
            timeMin: new Date().toISOString(),
            timeMax: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
            singleEvents: true,
            orderBy: 'startTime',
            maxResults: 3
          })
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error('API Error:', errorData);
          throw new Error(errorData.error?.message || 'Failed to fetch events');
        }

        const data = await response.json();
        const formattedEvents = data.items.map(event => ({
          id: event.id,
          title: event.summary || 'Untitled Event',
          description: event.description || 'No description available',
          start: new Date(event.start.dateTime || event.start.date),
          end: new Date(event.end.dateTime || event.end.date)
        }));

        setEvents(formattedEvents);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError(`Failed to fetch events: ${error.message}`);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatEventDate = (date) => {
    return {
      day: date.getDate(),
      month: date.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
      fullDate: date.toLocaleString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
  };

  const renderCalendarPreview = () => {
    const today = new Date();
    const currentMonth = today.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    
    // Generate calendar grid (simplified version)
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    const days = Array.from({ length: 35 }, (_, i) => {
      const dayNumber = i - firstDay + 1;
      if (dayNumber < 1 || dayNumber > daysInMonth) return null;
      return dayNumber;
    });

    return (
      <div className="calendar-preview">
        <h3>Calendar</h3>
        <div className="month-display">{currentMonth}</div>
        <div className="calendar-grid">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={`header-${i}`} className="calendar-day">{day}</div>
          ))}
          {days.map((day, i) => (
            <div
              key={`day-${i}`}
              className={`calendar-day ${day === today.getDate() ? 'today' : ''} ${
                events.some(event => new Date(event.start).getDate() === day) ? 'has-event' : ''
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderEvents = () => {
    if (loading) {
      return (
        <div className="event-item loading">
          <p>Loading events...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="event-item error">
          <p>{error}</p>
        </div>
      );
    }

    if (events.length === 0) {
      return (
        <div className="event-item">
          <p>No upcoming events in the next 30 days.</p>
        </div>
      );
    }

    return events.map(event => {
      const { day, month, fullDate } = formatEventDate(event.start);
      return (
        <div key={event.id} className="event-item">
          <div className="event-date">
            <span className="day">{day}</span>
            <span className="month">{month}</span>
          </div>
          <div className="event-details">
            <h3>{event.title}</h3>
            <p className="event-description">{event.description}</p>
            <span className="event-time">{fullDate}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="events-layout">
      {renderCalendarPreview()}
      <div className="events-container">
        {renderEvents()}
      </div>
    </div>
  );
};

export default UpcomingEvents; 