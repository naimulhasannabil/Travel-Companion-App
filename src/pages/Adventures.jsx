import React, { useState } from 'react';
import { MapPin, Star, Clock, Users, Filter, Search, Heart, Calendar } from 'lucide-react';

const Adventures = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState('all');

    const categories = [
        { id: 'all', label: 'All Adventures' },
        { id: 'beach', label: 'Beach & Islands' },
        { id: 'mountain', label: 'Mountains' },
        { id: 'city', label: 'City Tours' },
        { id: 'adventure', label: 'Adventure Sports' },
        { id: 'cultural', label: 'Cultural' },
        { id: 'wildlife', label: 'Wildlife' }
    ];

    const adventures = [
        {
          id: 1,
          title: 'Maldives Paradise Escape',
          location: 'Maldives',
          category: 'beach',
          price: 2499,
          duration: '7 days',
          rating: 4.9,
          reviews: 234,
          image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600',
          description: 'Experience luxury overwater bungalows and pristine beaches',
          highlights: ['Overwater Villa', 'Snorkeling', 'Spa Treatment', 'Private Beach']
        },
        {
          id: 2,
          title: 'Swiss Alps Adventure',
          location: 'Switzerland',
          category: 'mountain',
          price: 1899,
          duration: '5 days',
          rating: 4.8,
          reviews: 189,
          image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=600',
          description: 'Breathtaking mountain views and alpine adventures',
          highlights: ['Cable Car Rides', 'Hiking Trails', 'Mountain Lodge', 'Scenic Views']
        },
        {
          id: 3,
          title: 'Tropical Beach Getaway',
          location: 'Thailand',
          category: 'beach',
          price: 1299,
          duration: '6 days',
          rating: 4.7,
          reviews: 156,
          image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600',
          description: 'Relax on pristine beaches with crystal clear waters',
          highlights: ['Beach Resort', 'Island Hopping', 'Water Sports', 'Thai Cuisine']
        },
        {
          id: 4,
          title: 'Mountain Peak Expedition',
          location: 'Nepal',
          category: 'adventure',
          price: 2199,
          duration: '12 days',
          rating: 4.9,
          reviews: 98,
          image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
          description: 'Challenge yourself with high-altitude trekking',
          highlights: ['Base Camp Trek', 'Mountain Views', 'Local Culture', 'Expert Guides']
        },
        {
          id: 5,
          title: 'Paris City Explorer',
          location: 'France',
          category: 'city',
          price: 1599,
          duration: '4 days',
          rating: 4.6,
          reviews: 267,
          image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=600',
          description: 'Discover the romance and culture of Paris',
          highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine Cruise', 'French Cuisine']
        },
        {
          id: 6,
          title: 'African Safari Experience',
          location: 'Kenya',
          category: 'wildlife',
          price: 2899,
          duration: '8 days',
          rating: 4.8,
          reviews: 145,
          image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=600',
          description: 'Witness the Big Five in their natural habitat',
          highlights: ['Game Drives', 'Luxury Lodge', 'Wildlife Photography', 'Maasai Culture']
        },
        {
          id: 7,
          title: 'Japanese Cultural Journey',
          location: 'Japan',
          category: 'cultural',
          price: 2299,
          duration: '10 days',
          rating: 4.9,
          reviews: 178,
          image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600',
          description: 'Immerse yourself in traditional Japanese culture',
          highlights: ['Temple Visits', 'Tea Ceremony', 'Cherry Blossoms', 'Traditional Ryokan']
        },
        {
          id: 8,
          title: 'Bungee Jumping Thrill',
          location: 'New Zealand',
          category: 'adventure',
          price: 899,
          duration: '3 days',
          rating: 4.7,
          reviews: 89,
          image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600',
          description: 'Experience the ultimate adrenaline rush',
          highlights: ['Bungee Jump', 'Skydiving', 'Jet Boat', 'Adventure Sports']
        }
    ];

    const filteredAdventures = adventures.filter(adventure => {
    const matchesCategory = selectedCategory === 'all' || adventure.category === selectedCategory;
    const matchesSearch = adventure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         adventure.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceRange === 'all' ||
                        (priceRange === 'budget' && adventure.price < 1500) ||
                        (priceRange === 'mid' && adventure.price >= 1500 && adventure.price < 2500) ||
                        (priceRange === 'luxury' && adventure.price >= 2500);
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return(
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Epic
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Adventures
            </span>
            Await You
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover extraordinary experiences and create memories that will last a lifetime
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search adventures..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Price Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="all">All Prices</option>
              <option value="budget">Under $1,500</option>
              <option value="mid">$1,500 - $2,500</option>
              <option value="luxury">$2,500+</option>
            </select>
          </div>
        </div>
      </section>

      {/* Adventures Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredAdventures.length} Adventures Found
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAdventures.map((adventure) => (
              <div key={adventure.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={adventure.image}
                    alt={adventure.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {adventure.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{adventure.rating}</span>
                      <span className="text-sm text-gray-500">({adventure.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{adventure.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {adventure.title}
                  </h3>

                  <div className="flex items-center space-x-1 text-gray-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{adventure.location}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {adventure.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {adventure.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">${adventure.price}</span>
                      <span className="text-gray-500 text-sm">/person</span>
                    </div>
                    <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-medium">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAdventures.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No adventures found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Join thousands of travelers who have discovered their perfect adventure with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Plan My Trip
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors font-medium">
              Contact Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Adventures;