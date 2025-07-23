import React, { useState } from "react";
import { Plus, Clock, MapPin, Edit3, Trash2, Calendar } from "lucide-react";

const Itinerary = () => {
    const [events, setEvents] = useState([
        {
          id: 1,
          title: 'Flight to Paris',
          time: '08:00',
          date: '2024-02-15',
          location: 'JFK Airport',
          type: 'flight',
          description: 'Air France AF007 - Seat 12A',
          duration: '7h 30m'
        },
        {
          id: 2,
          title: 'Hotel Check-in',
          time: '15:00',
          date: '2024-02-15',
          location: 'Hotel de Crillon',
          type: 'accommodation',
          description: 'Confirmation #: ABC123',
          duration: '30m'
        },
        {
          id: 3,
          title: 'Eiffel Tower Visit',
          time: '10:00',
          date: '2024-02-16',
          location: 'Champ de Mars',
          type: 'activity',
          description: 'Pre-booked tickets for elevator access',
          duration: '3h'
        },
        {
          id: 4,
          title: 'Louvre Museum',
          time: '14:00',
          date: '2024-02-16',
          location: 'Rue de Rivoli',
          type: 'activity',
          description: 'Mona Lisa exhibition',
          duration: '4h'
        }
    ]);

    const [showAddForm, setShowAddForm] = useState(false);
    const [newEvent, setNewEvent] = useState({
        title: '',
        time: '',
        date: '',
        location: '',
        type: 'activity',
        description: '',
        duration: ''
    });

    const eventTypes = {
        flight: { icon: '✈️', color: 'bg-blue-100 text-blue-700 border-blue-200' },
        accommodation: { icon: '🏨', color: 'bg-purple-100 text-purple-700 border-purple-200' },
        activity: { icon: '🎯', color: 'bg-green-100 text-green-700 border-green-200' },
        transport: { icon: '🚗', color: 'bg-orange-100 text-orange-700 border-orange-200' },
        dining: { icon: '🍽️', color: 'bg-red-100 text-red-700 border-red-200' }
    };

    const handleAddEvent = (e) => {
        e.preventDefault();
        const event = {
          ...newEvent,
          id: Date.now()
        };
        setEvents([...events, event].sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time)));
        setNewEvent({
          title: '',
          time: '',
          date: '',
          location: '',
          type: 'activity',
          description: '',
          duration: ''
        });
        setShowAddForm(false);
    };

    const deleteEvent = (id) => {
        setEvents(events.filter(event => event.id !== id));
    };

    const groupEventsByDate = (events) => {
        return events.reduce((groups, event) => {
            const date = event.date;
            if (!groups[date]) {
              groups[date] = [];
            }
            groups[date].push(event);
            return groups;
        }, {});
    };

    const groupedEvents = groupEventsByDate(events);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
    };

    return (
        <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Travel Itinerary</h2>
          <p className="text-gray-600">Paris, France • Feb 15-20, 2024</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add Event</span>
        </button>
      </div>

      {/* Add Event Form */}
      {showAddForm && (
        <div className="card p-6 mb-8 border-2 border-ocean-200">
          <h3 className="text-xl font-semibold mb-4">Add New Event</h3>
          <form onSubmit={handleAddEvent} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={newEvent.title}
                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={newEvent.type}
                onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
                className="input-field"
              >
                <option value="activity">Activity</option>
                <option value="flight">Flight</option>
                <option value="accommodation">Accommodation</option>
                <option value="transport">Transport</option>
                <option value="dining">Dining</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
              <input
                type="time"
                value={newEvent.time}
                onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={newEvent.location}
                onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <input
                type="text"
                value={newEvent.duration}
                onChange={(e) => setNewEvent({...newEvent, duration: e.target.value})}
                className="input-field"
                placeholder="e.g., 2h 30m"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={newEvent.description}
                onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                className="input-field"
                rows="3"
                placeholder="Additional details..."
              ></textarea>
            </div>
            <div className="md:col-span-2 flex space-x-4">
              <button type="submit" className="btn-primary">
                Add Event
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Events Timeline */}
      <div className="space-y-8">
        {Object.entries(groupedEvents).map(([date, dayEvents]) => (
          <div key={date} className="relative">
            <div className="sticky top-20 bg-gradient-to-r from-ocean-500 to-forest-500 text-white p-4 rounded-lg mb-6 z-10">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5" />
                <h3 className="text-lg font-semibold">{formatDate(date)}</h3>
                <span className="text-sm opacity-90">({dayEvents.length} events)</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {dayEvents.map((event, index) => (
                <div key={event.id} className="card p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${eventTypes[event.type].color}`}>
                          {eventTypes[event.type].icon} {event.type}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {event.time}
                          {event.duration && <span className="ml-2">({event.duration})</span>}
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h4>
                      
                      {event.location && (
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                      )}
                      
                      {event.description && (
                        <p className="text-gray-600">{event.description}</p>
                      )}
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      <button className="p-2 text-gray-400 hover:text-ocean-600 hover:bg-ocean-50 rounded-lg transition-colors">
                        <Edit3 className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => deleteEvent(event.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {events.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-500 mb-2">No events scheduled</h3>
          <p className="text-gray-400 mb-6">Start planning your trip by adding your first event!</p>
          <button
            onClick={() => setShowAddForm(true)}
            className="btn-primary"
          >
            Add First Event
          </button>
        </div>
      )}
    </div>
    );
};

export default Itinerary;