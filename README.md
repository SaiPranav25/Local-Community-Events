# EventHub - Local Community Events Discovery Platform

A modern React-based web application for discovering and joining local community events. Built as part of a Frontend Developer Intern assignment, this platform enables users to explore workshops, meetups, sports activities, and social gatherings in their area.

## 🌟 Features

### Core Functionality
- **Event Discovery**: Browse a curated list of local community events
- **Advanced Filtering**: Filter events by type, date, location, and search terms
- **Event Details**: View comprehensive event information including host details, timing, and descriptions
- **RSVP System**: Register for events with confirmation flow
- **Event Creation**: Create and host new events (bonus feature)
- **Responsive Design**: Mobile-first design that works seamlessly across all devices

### User Experience
- **Intuitive Navigation**: Clean header with easy access to all features
- **Real-time Search**: Instant search results as you type
- **Visual Feedback**: Loading states, hover effects, and smooth transitions
- **Accessibility**: Proper semantic HTML and keyboard navigation support

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM v7
- **State Management**: React Context API
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Development**: ESLint for code quality

## 📦 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── SearchAndFilter.tsx  # Search and filtering controls
│   ├── EventCard.tsx   # Individual event card component
│   └── EventGrid.tsx   # Grid layout for events
├── pages/              # Page components
│   ├── Home.tsx        # Main events listing page
│   ├── EventDetail.tsx # Individual event details
│   ├── RSVPConfirmation.tsx  # RSVP success page
│   └── CreateEvent.tsx # Event creation form
├── context/            # State management
│   └── EventContext.tsx # Global event state and actions
├── App.tsx             # Main app component with routing
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd eventhub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📱 Features Overview

### Home Page
- **Hero Section**: Welcome message and platform description
- **Search & Filter Bar**: Real-time search with multiple filter options
- **Event Grid**: Responsive grid layout displaying event cards
- **Results Counter**: Shows number of filtered events

### Event Cards
- **Visual Date Display**: Prominent date with month, day, and weekday
- **Event Type Badges**: Color-coded badges for different event categories
- **Key Information**: Title, description preview, location, and host
- **Hover Effects**: Smooth animations and visual feedback

### Event Detail Page
- **Comprehensive Information**: Full event details with formatted date
- **Host Information**: Details about the event organizer
- **RSVP System**: Registration form with validation
- **Registration Status**: Visual indication if already registered

### RSVP Confirmation
- **Success Feedback**: Clear confirmation of successful registration
- **Event Summary**: Recap of registered event details
- **Next Steps**: Information about what to expect after registration

### Create Event (Bonus Feature)
- **Form Validation**: Real-time validation with error messages
- **Event Types**: Dropdown selection for event categories
- **Date Validation**: Prevents selection of past dates
- **Character Limits**: Description length requirements and counters

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6) - Main actions and links
- **Secondary**: Emerald (#10B981) - Success states
- **Accent**: Orange (#F97316) - Highlights and warnings
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Bold weights for hierarchy
- **Body Text**: Regular weight with proper line spacing
- **Interactive Elements**: Medium weight for buttons and links

### Spacing
- **8px Grid System**: Consistent spacing throughout the application
- **Responsive Breakpoints**: Mobile-first with tablet and desktop variants

## 📊 Data Structure

### Event Object
```typescript
interface Event {
  id: number;
  title: string;
  type: string;
  date: string;
  location: string;
  host: string;
  description: string;
}
```

### RSVP Object
```typescript
interface RSVP {
  eventId: number;
  userName: string;
  email: string;
  registeredAt: string;
}
```

## 🔍 Event Categories

The platform supports the following event types:
- **Fitness**: Yoga, meditation, sports activities
- **Music**: Concerts, workshops, open mic nights
- **Sports**: Tournaments, group activities, outdoor adventures
- **Meetup**: Networking, social gatherings, community meetings
- **Workshop**: Educational sessions, skill-building activities
- **Entertainment**: Comedy shows, film screenings, performances
- **Social**: Community service, cultural events, celebrations

## 📍 Supported Locations

Events are available in major Indian cities:
- Bangalore
- Mumbai
- Delhi
- Chennai
- Pune
- Hyderabad
- Kolkata
- Goa
- Jaipur
- Kochi
- And more...

## 🔧 State Management

The application uses React Context API for state management:

- **EventContext**: Manages events, RSVPs, and filter states
- **Local State**: Component-specific state for forms and UI interactions
- **Persistent Data**: RSVPs and created events persist during the session

## 📱 Responsive Design

### Mobile First Approach
- **Base Design**: Optimized for mobile devices (320px+)
- **Tablet**: Enhanced layout for medium screens (768px+)
- **Desktop**: Full-featured experience for large screens (1024px+)

### Key Responsive Features
- **Flexible Grid**: Adapts from 1 column on mobile to 3 columns on desktop
- **Navigation**: Collapsible menu on mobile devices
- **Touch-Friendly**: Appropriate touch targets and spacing
- **Performance**: Optimized images and efficient rendering

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project
2. Upload the `dist` folder to Netlify
3. Configure redirects for React Router

### Deploy to Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

## 🧪 Testing Considerations

While not implemented in this version, the application is structured to support:
- **Unit Tests**: Component testing with React Testing Library
- **Integration Tests**: User flow testing
- **E2E Tests**: Full application testing with Cypress or Playwright

## 🔮 Future Enhancements

Potential improvements for future versions:
- **User Authentication**: Personal profiles and event history
- **Real-time Updates**: WebSocket integration for live updates
- **Payment Integration**: Paid event support
- **Social Features**: Event sharing and user reviews
- **Mobile App**: React Native version
- **Advanced Filtering**: Distance-based filtering with geolocation
- **Calendar Integration**: Export events to personal calendars



