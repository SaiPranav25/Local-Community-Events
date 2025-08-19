import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EventProvider } from './context/EventContext';
import Header from './components/Header';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';
import RSVPConfirmation from './pages/RSVPConfirmation';
import CreateEvent from './pages/CreateEvent';

function App() {
  return (
    <EventProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/event/:id" element={<EventDetail />} />
              <Route path="/rsvp-confirmation/:id" element={<RSVPConfirmation />} />
              <Route path="/create" element={<CreateEvent />} />
            </Routes>
          </main>
        </div>
      </Router>
    </EventProvider>
  );
}

export default App;