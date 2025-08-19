import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { useEvents } from '../context/EventContext';

const SearchAndFilter: React.FC = () => {
  const {
    searchTerm,
    selectedType,
    selectedLocation,
    selectedDate,
    setSearchTerm,
    setSelectedType,
    setSelectedLocation,
    setSelectedDate,
    events
  } = useEvents();

  const eventTypes = [...new Set(events.map(event => event.type))].sort();
  const locations = [...new Set(events.map(event => event.location))].sort();
  const dates = [...new Set(events.map(event => event.date))].sort();

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedType('');
    setSelectedLocation('');
    setSelectedDate('');
  };

  const hasActiveFilters = searchTerm || selectedType || selectedLocation || selectedDate;

  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-4 mb-6">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search events, hosts, or descriptions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-4 w-4 text-gray-500 flex-shrink-0" />
        <span className="text-sm font-medium text-gray-700 flex-shrink-0">Filters:</span>
        
        <div className="flex flex-wrap gap-2 flex-1">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="text-sm border border-gray-300 rounded-md px-3 py-1.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Types</option>
            {eventTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="text-sm border border-gray-300 rounded-md px-3 py-1.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Locations</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>

          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="text-sm border border-gray-300 rounded-md px-3 py-1.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Dates</option>
            {dates.map(date => (
              <option key={date} value={date}>
                {new Date(date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="flex items-center space-x-1 text-sm text-gray-600 hover:text-red-600 transition-colors"
        >
          <X className="h-4 w-4" />
          <span>Clear all filters</span>
        </button>
      )}
    </div>
  );
};

export default SearchAndFilter;