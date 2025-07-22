import React from "react";
import { Calendar, MapPin, Clock, DollarSign, CheckCircle, AlertTriangle } from "lucide-react";

const Dashboard = ({ setActiveTab }) => {
    const quickStats = [
        { label: 'Next Trip', value: 'Paris, France', sublabel: 'in 12 days', icon: MapPin, color: 'ocean' },
        { label: 'Budget Used', value: '$2,450', sublabel: 'of $3,500', icon: DollarSign, color: 'forest' },
        { label: 'Packing Progress', value: '75%', sublabel: '15 of 20 items', icon: CheckCircle, color: 'sunset' },
        { label: 'Documents', value: '3 Alerts', sublabel: 'expiring soon', icon: AlertTriangle, color: 'red' },
    ];

    const recentActivities = [
        { action: 'Added', item: 'Flight booking confirmation', time: '2 hours ago', type: 'document' },
        { action: 'Checked off', item: 'Passport copy', time: '4 hours ago', type: 'packing' },
        { action: 'Updated', item: 'Hotel reservation', time: '1 day ago', type: 'itinerary' },
        { action: 'Added expense', item: 'Travel insurance', time: '2 days ago', type: 'budget' },
    ];

    const upcomingTasks = [
        { task: 'Check-in for flight', due: 'Tomorrow', priority: 'high' },
        { task: 'Pack electronics chargers', due: '2 days', priority: 'medium' },
        { task: 'Download offline maps', due: '3 days', priority: 'low' },
        { task: 'Confirm hotel pickup', due: '1 week', priority: 'medium' },
    ];

    const getColorClasses = (color) => {
      const colors = {
        ocean: 'from-ocean-500 to-ocean-600 bg-ocean-100 text-ocean-700',
        forest: 'from-forest-500 to-forest-600 bg-forest-100 text-forest-700',
        sunset: 'from-sunset-500 to-sunset-600 bg-sunset-100 text-sunset-700',
        red: 'from-red-500 to-red-600 bg-red-100 text-red-700',
      };
      return colors[color] || colors.ocean;
    };

    const getPriorityColor = (priority) => {
      const colors = {
        high: 'bg-red-100 text-red-700 border-red-200',
        medium: 'bg-sunset-100 text-sunset-700 border-sunset-200',
        low: 'bg-forest-100 text-forest-700 border-forest-200',
      };
      return colors[priority];
    };

    return (
        <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-ocean-500 via-ocean-600 to-forest-600 rounded-2xl p-8 mb-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-3xl font-bold mb-2">Welcome back, Traveler! ✈️</h2>
            <p className="text-ocean-100 text-lg">Your next adventure to Paris starts in 12 days</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button 
              onClick={() => setActiveTab('itinerary')}
              className="bg-white text-ocean-600 px-6 py-3 rounded-lg font-medium hover:bg-ocean-50 transition-colors transform hover:scale-105"
            >
              View Itinerary
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = getColorClasses(stat.color);
          return (
            <div key={index} className="card p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.label}</h3>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.sublabel}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <div className="card p-6">
          <h3 className="section-title">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-2 h-2 bg-ocean-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-gray-900">
                    <span className="font-medium">{activity.action}</span> {activity.item}
                  </p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  activity.type === 'document' ? 'bg-blue-100 text-blue-700' :
                  activity.type === 'packing' ? 'bg-green-100 text-green-700' :
                  activity.type === 'itinerary' ? 'bg-purple-100 text-purple-700' :
                  'bg-orange-100 text-orange-700'
                }`}>
                  {activity.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="card p-6">
          <h3 className="section-title">Upcoming Tasks</h3>
          <div className="space-y-3">
            {upcomingTasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{task.task}</p>
                  <p className="text-sm text-gray-500">Due {task.due}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 card p-6">
        <h3 className="section-title">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Add Expense', icon: '💰', tab: 'budget' },
            { label: 'Update Itinerary', icon: '📅', tab: 'itinerary' },
            { label: 'Check Packing', icon: '🎒', tab: 'packing' },
            { label: 'Weather Update', icon: '🌤️', tab: 'weather' },
          ].map((action, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(action.tab)}
              className="p-4 rounded-lg border border-gray-200 hover:border-ocean-300 hover:bg-ocean-50 transition-all duration-200 text-center group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{action.icon}</div>
              <p className="text-sm font-medium text-gray-700 group-hover:text-ocean-700">{action.label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Dashboard;