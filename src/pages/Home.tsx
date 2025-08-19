import React from 'react';
import SearchAndFilter from '../components/SearchAndFilter';
import EventGrid from '../components/EventGrid';
import { useEvents } from '../context/EventContext';

const Home: React.FC = () => {
  const { getFilteredEvents } = useEvents();
  const filteredEvents = getFilteredEvents();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Discover Local Community Events
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find workshops, meetups, sports activities, and social gatherings happening in your area. 
          Connect with your community and explore new interests.
        </p>
      </div>

      {/* Search and Filters */}
      <SearchAndFilter />

      {/* Results Summary */}
      <div className="mb-6">
        <p className="text-sm text-gray-600">
          Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Event Grid */}
      <EventGrid />
    </div>
  );
};

export default Home;