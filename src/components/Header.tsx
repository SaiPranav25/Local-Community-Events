import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Plus } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">EventHub</h1>
              <p className="text-xs text-gray-500 -mt-1">Local Community Events</p>
            </div>
          </Link>

          <nav className="hidden sm:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Explore Events
            </Link>
            <Link 
              to="/create" 
              className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                location.pathname === '/create' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <Plus className="h-4 w-4" />
              <span>Create Event</span>
            </Link>
          </nav>

          <Link 
            to="/create"
            className="sm:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Plus className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;