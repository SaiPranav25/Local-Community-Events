import React from 'react';
import { useEvents } from '../context/EventContext';
import EventCard from './EventCard';
import { Calendar } from 'lucide-react';

const EventGrid: React.FC = () => {
  const { getFilteredEvents } = useEvents();
  const filteredEvents = getFilteredEvents();

  if (filteredEvents.length === 0) {
    return (
      <div className="text-center py-12">
        <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
        <p className="text-gray-500">
          Try adjusting your search terms or filters to find more events.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredEvents.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventGrid;