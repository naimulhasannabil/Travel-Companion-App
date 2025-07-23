import React, { useState } from "react";
import { Plus, Edit3, Trash2, Calendar, MapPin, Image, Heart } from "lucide-react";

const Journal = () => {
    const [entries, setEntries] = useState([
        {
          id: 1,
          title: 'Planning the Paris Adventure',
          date: '2024-01-05',
          location: 'Home',
          content: 'Today I booked my trip to Paris! I\'m so excited to visit the City of Light. I\'ve always dreamed of seeing the Eiffel Tower and walking along the Seine. The research phase begins now - I need to find the best cafés, museums, and hidden gems.',
          mood: '😊',
          photos: [],
          favorite: false
        },
        {
          id: 2,
          title: 'Hotel Booking Complete',
          date: '2024-01-10',
          location: 'Home',
          content: 'Booked the Hotel de Crillon! It\'s a bit of a splurge, but this is a once-in-a-lifetime trip. The reviews are amazing and the location is perfect - right in the heart of the city. Can\'t wait to experience the luxury.',
          mood: '🤩',
          photos: [],
          favorite: true
        },
        {
          id: 3,
          title: 'Packing Day Excitement',
          date: '2024-02-10',
          location: 'Home',
          content: 'Started packing today! Trying to pack light but also want to be prepared for Paris weather. Definitely bringing my best outfits for photos at all the iconic spots. The countdown begins - just 5 more days!',
          mood: '😃',
          photos: [],
          favorite: false
        }
    ]);

    const [showAddForm, setShowAddForm] = useState(false);
    const [editingEntry, setEditingEntry] = useState(null);
    const [newEntry, setNewEntry] = useState({
       title: '',
       date: new Date().toISOString().split('T')[0],
       location: '',
       content: '',
       mood: '😊',
       photos: [],
       favorite: false
    });

    const moods = ['😊', '😃', '🤩', '😍', '🥰', '😎', '🤔', '😴', '😋', '🤗', '😌', '🙃'];

    const addEntry = (e) => {
        e.preventDefault();
        const entry = {
          ...newEntry,
          id: Date.now()
        };
        setEntries([entry, ...entries]);
        setNewEntry({
          title: '',
          date: new Date().toISOString().split('T')[0],
          location: '',
          content: '',
          mood: '😊',
          photos: [],
          favorite: false
        });
        setShowAddForm(false);
    };

    const updateEntry = (e) => {
       e.preventDefault();
       setEntries(entries.map(entry => 
         entry.id === editingEntry.id ?    editingEntry : entry
       ));
       setEditingEntry(null);
    };

    const deleteEntry = (id) => {
      setEntries(entries.filter(entry => entry.id !== id));
    };

    const toggleFavorite = (id) => {
      setEntries(entries.map(entry =>
        entry.id === id ? { ...entry, favorite:   !entry.favorite } : entry
      ));
    };

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    };

    const getEntryStats = () => {
      const totalEntries = entries.length;
      const favoriteEntries = entries.filter  (entry => entry.favorite).length;
      const uniqueLocations = [...new Set  (entries.map(entry => entry.location))].length;
      return { totalEntries, favoriteEntries, uniqueLocations };
    };

    const stats = getEntryStats();

    return(
        <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Travel Journal</h2>
        <p className="text-gray-600">Document your travel memories and experiences</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Entries</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalEntries}</p>
            </div>
            <div className="bg-ocean-100 p-3 rounded-lg">
              <Edit3 className="h-6 w-6 text-ocean-600" />
            </div>
          </div>
        </div>
        
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Favorite Entries</p>
              <p className="text-2xl font-bold text-gray-900">{stats.favoriteEntries}</p>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <Heart className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>
        
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Locations</p>
              <p className="text-2xl font-bold text-gray-900">{stats.uniqueLocations}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <MapPin className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Add Entry Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowAddForm(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>New Entry</span>
        </button>
      </div>

      {/* Add/Edit Entry Form */}
      {(showAddForm || editingEntry) && (
        <div className="card p-6 mb-8 border-2 border-ocean-200">
          <h3 className="text-xl font-semibold mb-4">
            {editingEntry ? 'Edit Entry' : 'New Journal Entry'}
          </h3>
          <form onSubmit={editingEntry ? updateEntry : addEntry} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={editingEntry ? editingEntry.title : newEntry.title}
                  onChange={(e) => editingEntry 
                    ? setEditingEntry({...editingEntry, title: e.target.value})
                    : setNewEntry({...newEntry, title: e.target.value})
                  }
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  value={editingEntry ? editingEntry.date : newEntry.date}
                  onChange={(e) => editingEntry
                    ? setEditingEntry({...editingEntry, date: e.target.value})
                    : setNewEntry({...newEntry, date: e.target.value})
                  }
                  className="input-field"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  value={editingEntry ? editingEntry.location : newEntry.location}
                  onChange={(e) => editingEntry
                    ? setEditingEntry({...editingEntry, location: e.target.value})
                    : setNewEntry({...newEntry, location: e.target.value})
                  }
                  className="input-field"
                  placeholder="Where are you?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mood</label>
                <div className="flex flex-wrap gap-2">
                  {moods.map(mood => (
                    <button
                      key={mood}
                      type="button"
                      onClick={() => editingEntry
                        ? setEditingEntry({...editingEntry, mood})
                        : setNewEntry({...newEntry, mood})
                      }
                      className={`text-2xl p-2 rounded-lg border-2 transition-all ${
                        (editingEntry ? editingEntry.mood : newEntry.mood) === mood
                          ? 'border-ocean-400 bg-ocean-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <textarea
                value={editingEntry ? editingEntry.content : newEntry.content}
                onChange={(e) => editingEntry
                  ? setEditingEntry({...editingEntry, content: e.target.value})
                  : setNewEntry({...newEntry, content: e.target.value})
                }
                className="input-field"
                rows="6"
                placeholder="What happened today? How are you feeling?"
                required
              ></textarea>
            </div>
            
            <div className="flex space-x-4">
              <button type="submit" className="btn-primary">
                {editingEntry ? 'Update Entry' : 'Save Entry'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false);
                  setEditingEntry(null);
                }}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Journal Entries */}
      <div className="space-y-6">
        {entries.length === 0 ? (
          <div className="text-center py-12 card">
            <Edit3 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-500 mb-2">No journal entries yet</h3>
            <p className="text-gray-400 mb-6">Start documenting your travel journey!</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="btn-primary"
            >
              Write First Entry
            </button>
          </div>
        ) : (
          entries.map(entry => (
            <div key={entry.id} className="card p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{entry.title}</h3>
                    <span className="text-2xl">{entry.mood}</span>
                    {entry.favorite && (
                      <Heart className="h-5 w-5 text-red-500 fill-current" />
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(entry.date)}</span>
                    </div>
                    {entry.location && (
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{entry.location}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => toggleFavorite(entry.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      entry.favorite 
                        ? 'text-red-600 bg-red-50 hover:bg-red-100' 
                        : 'text-gray-400 hover:text-red-600 hover:bg-red-50'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${entry.favorite ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={() => setEditingEntry(entry)}
                    className="p-2 text-gray-400 hover:text-ocean-600 hover:bg-ocean-50 rounded-lg transition-colors"
                  >
                    <Edit3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => deleteEntry(entry.id)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{entry.content}</p>
              </div>
              
              {entry.photos && entry.photos.length > 0 && (
                <div className="mt-4 flex items-center space-x-2 text-gray-500">
                  <Image className="h-4 w-4" />
                  <span className="text-sm">{entry.photos.length} photo(s)</span>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
    );
};

export default Journal;