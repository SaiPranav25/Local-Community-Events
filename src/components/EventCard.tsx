import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, User, Clock } from 'lucide-react';
import { Event } from '../context/EventContext';

interface EventCardProps {
  event: Event;
}

const getTypeColor = (type: string): string => {
  const colors: { [key: string]: string } = {
    'Fitness': 'bg-green-100 text-green-800',
    'Music': 'bg-purple-100 text-purple-800',
    'Sports': 'bg-blue-100 text-blue-800',
    'Meetup': 'bg-yellow-100 text-yellow-800',
    'Workshop': 'bg-indigo-100 text-indigo-800',
    'Entertainment': 'bg-pink-100 text-pink-800',
    'Social': 'bg-emerald-100 text-emerald-800'
  };
  return colors[type] || 'bg-gray-100 text-gray-800';
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      weekday: date.toLocaleDateString('en-US', { weekday: 'short' })
    };
  };

  const { day, month, weekday } = formatDate(event.date);

  return (
    <Link
      to={`/event/${event.id}`}
      className="block bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 group"
    >
      <div className="p-6">
        {/* Header with Date and Type */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-50 rounded-lg p-2 text-center min-w-[3rem]">
              <div className="text-xs font-medium text-blue-600 uppercase">{month}</div>
              <div className="text-lg font-bold text-blue-900">{day}</div>
              <div className="text-xs text-blue-600">{weekday}</div>
            </div>
            <div>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}>
                {event.type}
              </span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {event.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>

        {/* Details */}
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <User className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>Hosted by {event.host}</span>
          </div>
        </div>

        {/* Action Hint */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Click to view details</span>
            <div className="text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
              Learn more →
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;