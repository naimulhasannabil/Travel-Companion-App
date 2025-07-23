import React, { useState } from 'react';
import { Cloud, Sun, CloudRain, Wind, Thermometer, Droplets, Eye } from 'lucide-react';

const Weather = () => {
    const [selectedCity, setSelectedCity] = useState('Paris');

    // Mock weather data - in a real app, this would come from a weather API
    const weatherData = {
      Paris: {
        current: {
          temp: 12,
          condition: 'Partly Cloudy',
          humidity: 65,
          windSpeed: 15,
          visibility: 10,
          uvIndex: 3,
          icon: 'partly-cloudy'
        },
        forecast: [
          { date: '2024-02-15', high: 14, low: 8, condition: 'Cloudy', icon: 'cloudy', precipitation: 20 },
          { date: '2024-02-16', high: 16, low: 10, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 10 },
          { date: '2024-02-17', high: 13, low: 7, condition: 'Rainy', icon: 'rainy', precipitation: 80 },
          { date: '2024-02-18', high: 15, low: 9, condition: 'Sunny', icon: 'sunny', precipitation: 0 },
          { date: '2024-02-19', high: 17, low: 11, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 15 },
          { date: '2024-02-20', high: 18, low: 12, condition: 'Sunny', icon: 'sunny', precipitation: 5 }
        ]
      },
      London: {
        current: {
          temp: 9,
          condition: 'Rainy',
          humidity: 78,
          windSpeed: 22,
          visibility: 8,
          uvIndex: 2,
          icon: 'rainy'
        },
        forecast: [
          { date: '2024-02-15', high: 11, low: 6, condition: 'Rainy', icon: 'rainy', precipitation: 75 },
          { date: '2024-02-16', high: 10, low: 5, condition: 'Cloudy', icon: 'cloudy', precipitation: 30 },
          { date: '2024-02-17', high: 12, low: 7, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 20 },
          { date: '2024-02-18', high: 14, low: 8, condition: 'Sunny', icon: 'sunny', precipitation: 10 },
          { date: '2024-02-19', high: 13, low: 7, condition: 'Cloudy', icon: 'cloudy', precipitation: 40 },
          { date: '2024-02-20', high: 15, low: 9, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 25 }
        ]
      },
      Tokyo: {
        current: {
          temp: 8,
          condition: 'Sunny',
          humidity: 45,
          windSpeed: 12,
          visibility: 15,
          uvIndex: 5,
          icon: 'sunny'
        },
        forecast: [
          { date: '2024-02-15', high: 12, low: 4, condition: 'Sunny', icon: 'sunny', precipitation: 0 },
          { date: '2024-02-16', high: 14, low: 6, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 5 },
          { date: '2024-02-17', high: 16, low: 8, condition: 'Sunny', icon: 'sunny', precipitation: 0 },
          { date: '2024-02-18', high: 15, low: 7, condition: 'Cloudy', icon: 'cloudy', precipitation: 20 },
          { date: '2024-02-19', high: 13, low: 5, condition: 'Partly Cloudy', icon: 'partly-cloudy', precipitation: 10 },
          { date: '2024-02-20', high: 17, low: 9, condition: 'Sunny', icon: 'sunny', precipitation: 0 }
        ]
      }
    };

    const cities = ['Paris', 'London', 'Tokyo', 'New York', 'Barcelona'];
    const currentWeather = weatherData[selectedCity] || weatherData.Paris;

    const getWeatherIcon = (iconType, size = 'h-8 w-8') => {
      const iconProps = { className: `${size} text-white` };
      switch (iconType) {
        case 'sunny':
          return <Sun {...iconProps} />;
        case 'partly-cloudy':
          return <Cloud {...iconProps} />;
        case 'cloudy':
          return <Cloud {...iconProps} />;
        case 'rainy':
          return <CloudRain {...iconProps} />;
        default:
          return <Sun {...iconProps} />;
      }
    };

    const getWeatherGradient = (iconType) => {
      switch (iconType) {
        case 'sunny':
          return 'from-yellow-400 to-orange-500';
        case 'partly-cloudy':
          return 'from-blue-400 to-blue-600';
        case 'cloudy':
          return 'from-gray-400 to-gray-600';
        case 'rainy':
          return 'from-gray-500 to-blue-700';
        default:
          return 'from-blue-400 to-blue-600';
      }
    };

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      });
    };

    const getTravelTips = (weather) => {
      const tips = [];
    
      if (weather.current.temp < 10) {
        tips.push({ icon: '🧥', text: 'Pack warm clothing - temperatures are quite cool' });
      }
    
      if (weather.forecast.some(day => day.precipitation > 60)) {
        tips.push({ icon: '☂️', text: 'Bring an umbrella - rain is expected' });
      }
    
      if (weather.current.uvIndex > 6) {
        tips.push({ icon: '🧴', text: 'Don\'t forget sunscreen - high UV index' });
      }
    
      if (weather.current.windSpeed > 20) {
        tips.push({ icon: '💨', text: 'Windy conditions - secure loose items' });
      }
    
      if (weather.current.visibility < 10) {
        tips.push({ icon: '👁️', text: 'Limited visibility - plan indoor activities' });
      }

      return tips;
    };

    const travelTips = getTravelTips(currentWeather);

    return (
        <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Weather Forecast</h2>
        <p className="text-gray-600">Check the weather for your travel destinations</p>
      </div>

      {/* City Selector */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">Select Destination</label>
        <div className="flex flex-wrap gap-2">
          {cities.map(city => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCity === city
                  ? 'bg-ocean-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-ocean-300 hover:text-ocean-600'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Current Weather */}
      <div className={`bg-gradient-to-r ${getWeatherGradient(currentWeather.current.icon)} rounded-2xl p-8 text-white mb-8`}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-2">{selectedCity}</h3>
            <p className="text-xl opacity-90">{currentWeather.current.condition}</p>
            <p className="text-sm opacity-75">Today, {new Date().toLocaleDateString()}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-4">
              {getWeatherIcon(currentWeather.current.icon, 'h-16 w-16')}
              <span className="text-6xl font-bold">{currentWeather.current.temp}°</span>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="card p-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Droplets className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Humidity</p>
              <p className="font-semibold">{currentWeather.current.humidity}%</p>
            </div>
          </div>
        </div>
        
        <div className="card p-4">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Wind className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Wind Speed</p>
              <p className="font-semibold">{currentWeather.current.windSpeed} km/h</p>
            </div>
          </div>
        </div>
        
        <div className="card p-4">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Eye className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Visibility</p>
              <p className="font-semibold">{currentWeather.current.visibility} km</p>
            </div>
          </div>
        </div>
        
        <div className="card p-4">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Sun className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">UV Index</p>
              <p className="font-semibold">{currentWeather.current.uvIndex}/10</p>
            </div>
          </div>
        </div>
      </div>

      {/* 6-Day Forecast */}
      <div className="card p-6 mb-8">
        <h3 className="text-xl font-semibold mb-6">6-Day Forecast</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {currentWeather.forecast.map((day, index) => (
            <div key={index} className="text-center p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
              <p className="text-sm font-medium text-gray-600 mb-2">{formatDate(day.date)}</p>
              <div className={`bg-gradient-to-r ${getWeatherGradient(day.icon)} p-3 rounded-lg mb-3 flex justify-center`}>
                {getWeatherIcon(day.icon, 'h-6 w-6')}
              </div>
              <p className="text-xs text-gray-500 mb-2">{day.condition}</p>
              <div className="space-y-1">
                <p className="text-sm font-semibold">{day.high}°/{day.low}°</p>
                <p className="text-xs text-blue-600">{day.precipitation}% rain</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Tips */}
      {travelTips.length > 0 && (
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-4">Travel Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {travelTips.map((tip, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <span className="text-2xl">{tip.icon}</span>
                <p className="text-sm text-gray-700">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    );
};

export default Weather;