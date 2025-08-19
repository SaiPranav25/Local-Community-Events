import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, Mail, ArrowLeft } from 'lucide-react';
import { useEvents } from '../context/EventContext';

const RSVPConfirmation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const { events } = useEvents();

  const event = events.find(e => e.id === Number(id));
  const userName = location.state?.userName || 'there';

  if (!event) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Event not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to events
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to events</span>
      </button>

      {/* Confirmation Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 sm:p-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Registration Confirmed!
          </h1>
          <p className="text-gray-600 mb-6">
            Hi {userName}! You're all set for this amazing event.
          </p>

          {/* Event Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <h2 className="font-semibold text-gray-900 mb-3">Event Details</h2>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Event:</span> {event.title}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Date:</span> {formatDate(event.date)}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Location:</span> {event.location}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Host:</span> {event.host}
              </p>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-2 flex items-center justify-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>What's Next?</span>
            </h3>
            <div className="text-sm text-blue-800 space-y-1">
              <p>✓ A confirmation email has been sent to you</p>
              <p>✓ You'll receive event reminders and updates</p>
              <p>✓ Event details and any last-minute changes will be communicated via email</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate(`/event/${event.id}`)}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Event Details
            </button>
            <button
              onClick={() => navigate('/')}
              className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Discover More Events
            </button>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Having trouble? Contact the event host directly or reach out to our support team.</p>
      </div>
    </div>
  );
};

export default RSVPConfirmation;