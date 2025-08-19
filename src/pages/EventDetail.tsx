import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, User, Clock, ArrowLeft, CheckCircle } from 'lucide-react';
import { useEvents } from '../context/EventContext';

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { events, addRSVP, isRegistered } = useEvents();
  const [showRSVPForm, setShowRSVPForm] = useState(false);
  const [formData, setFormData] = useState({ userName: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const event = events.find(e => e.id === Number(id));
  const isEventRegistered = event ? isRegistered(event.id) : false;

  if (!event) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

  const handleRSVP = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const rsvp = {
      eventId: event.id,
      userName: formData.userName,
      email: formData.email,
      registeredAt: new Date().toISOString()
    };

    addRSVP(rsvp);
    setIsSubmitting(false);
    navigate(`/rsvp-confirmation/${event.id}`, { 
      state: { userName: formData.userName } 
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to events</span>
      </button>

      {/* Event Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* Type Badge */}
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
              {event.type}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {event.title}
          </h1>

          {/* Event Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">Date</p>
                <p className="text-gray-600">{formatDate(event.date)}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">Location</p>
                <p className="text-gray-600">{event.location}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">Host</p>
                <p className="text-gray-600">{event.host}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">About this event</h2>
            <p className="text-gray-700 leading-relaxed">{event.description}</p>
          </div>

          {/* RSVP Section */}
          <div className="border-t pt-6">
            {isEventRegistered ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-800">You're registered for this event!</span>
                </div>
                <p className="text-green-700 text-sm mt-1">
                  We'll send you updates and reminders via email.
                </p>
              </div>
            ) : (
              <div>
                {!showRSVPForm ? (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Interested in joining?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Register now to secure your spot at this event.
                    </p>
                    <button
                      onClick={() => setShowRSVPForm(true)}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      RSVP Now
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleRSVP} className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Complete your registration
                    </h3>
                    
                    <div>
                      <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="userName"
                        required
                        value={formData.userName}
                        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className="flex space-x-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Registering...' : 'Confirm Registration'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowRSVPForm(false)}
                        className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md font-medium hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;