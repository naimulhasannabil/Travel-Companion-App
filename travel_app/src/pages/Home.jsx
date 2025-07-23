import React, { useState } from "react";
import { Play, MapPin, Calendar, Users, Search, Star, ArrowRight, Globe, Shield, DollarSign, Heart } from "lucide-react";

const Home = () => {
    const [searchData, setSearchData] = useState({
        accommodation: '',
        checkIn: '',
        checkOut: '',
        guests: '2 adults'
    });

    const stats = [
        { number: '24,000', label: 'Travel Experiences', icon: Globe },
        { number: '50+', label: 'Countries', icon: MapPin },
        { number: 'Best Price', label: 'Guaranteed', icon: Shield },
        { number: '84 Million+', label: 'User per year', icon: Users }
    ];

    const destinations = [
        {
          title: 'Aerial view and pool',
          image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400',
          rating: 4.9,
          overlay: 'Maldives Paradise'
        },
        {
          title: 'Aerial View and pool',
          image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400',
          rating: 4.8,
          overlay: 'Swiss Alps'
        },
        {
          title: 'Aerial view and pool',
          image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=400',
          rating: 4.9,
          overlay: 'Tropical Beach'
        },
        {
          title: 'Aerial view and pool',
          image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400',
          rating: 4.6,
          overlay: 'Mountain View'
        }
    ];

    const exploreDestinations = [
        {
          title: 'Cox\'s Bazar',
          image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=300',
          rating: 4.8
        },
        {
          title: 'Sundarbans',
          image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=300',
          rating: 4.7
        },
        {
          title: 'Sylhet Tea Gardens',
          image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=300',
          rating: 4.9
        },
        {
          title: 'Chittagong Hill Tracts',
          image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=300',
          rating: 4.6
        }
    ];

    return (
        <div className="min-h-screen">
      {/* Hero Section - Responsive Fixes */}
      <section className="relative h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Its Time For New
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Adventures
              </span>
              <span className="block text-xl sm:text-2xl md:text-3xl font-medium mt-2">
                Escapes thrills & experiences
              </span>
            </h1>
            
            <button className="flex items-center space-x-3 text-white hover:text-orange-300 transition-colors mb-8 sm:mb-12 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                <Play className="h-4 w-4 sm:h-5 sm:w-5 text-white ml-0.5" />
              </div>
              <span className="text-base sm:text-lg font-medium">Play Video</span>
            </button>

            {/* Search Form - Responsive Fix */}
            <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-600">Accommodation</label>
                  <input
                    type="text"
                    placeholder="5730 Luna Land North"
                    value={searchData.accommodation}
                    onChange={(e) => setSearchData({...searchData, accommodation: e.target.value})}
                    className="w-full p-2 sm:p-3 text-xs sm:text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-600">Check-in</label>
                  <input
                    type="date"
                    value={searchData.checkIn}
                    onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
                    className="w-full p-2 sm:p-3 text-xs sm:text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-600">Check-Out</label>
                  <input
                    type="date"
                    value={searchData.checkOut}
                    onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
                    className="w-full p-2 sm:p-3 text-xs sm:text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-600">Guests</label>
                  <select
                    value={searchData.guests}
                    onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                    className="w-full p-2 sm:p-3 text-xs sm:text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option>1 adult</option>
                    <option>2 adults</option>
                    <option>3 adults</option>
                    <option>4 adults</option>
                  </select>
                </div>
              </div>
              <button className="w-full mt-3 sm:mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-medium text-sm sm:text-base">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group p-4 sm:p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</h3>
                  <p className="text-gray-600 text-sm sm:text-base font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Find Perfect Place Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Find The Perfect Place
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                A list of the top 75 Best Tourist Places to See in world for a perfect holiday or a trip.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-medium text-sm sm:text-base">
                View More
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {destinations.map((dest, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg sm:rounded-xl">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-36 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-xs sm:text-sm font-medium">{dest.overlay}</span>
                      <div className="flex items-center space-x-0.5 sm:space-x-1">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                        <span className="text-xs sm:text-sm">{dest.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore Bangladesh Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Explore Bangladesh</h2>
            <p className="text-gray-600 text-base sm:text-lg">Discover the beauty and culture of Bangladesh</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {exploreDestinations.map((dest, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                      <span className="text-xs sm:text-sm font-medium">{dest.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{dest.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Explore the natural beauty and rich culture</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 sm:mt-12">
            <div className="flex items-center justify-center space-x-3 sm:space-x-4">
              <button className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 rotate-180" />
              </button>
              <span className="text-gray-600 text-sm sm:text-base">BACK</span>
              <span className="text-gray-600 text-sm sm:text-base">NEXT</span>
              <button className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
};

export default Home;