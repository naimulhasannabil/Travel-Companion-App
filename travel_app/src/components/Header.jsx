import React from "react";
import { Plane, Menu, X, LogOut } from "lucide-react";

const Header = ({ activeTab, setActiveTab, mobileMenuOpen, setMobileMenuOpen, onLogout, setCurrentPage }) => {
    const tabs = [
        { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
        { id: 'itinerary', label: 'Itinerary', icon: '📅' },
        { id: 'packing', label: 'Packing', icon: '🎒' },
        { id: 'documents', label: 'Documents', icon: '📄' },
        { id: 'budget', label: 'Budget', icon: '💰' },
        { id: 'weather', label: 'Weather', icon: '🌤️' },
        { id: 'journal', label: 'Journal', icon: '📝' },
    ];

    return (
        <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-ocean-500 to-forest-500 p-2 rounded-lg">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-ocean-600 to-forest-600 bg-clip-text text-transparent">
              Travel Companion
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-ocean-100 text-ocean-700 shadow-sm'
                    : 'text-gray-600 hover:text-ocean-600 hover:bg-ocean-50'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center space-x-2 text-gray-600 hover:text-ocean-600 transition-colors"
            >
              <span>Back to Website</span>
            </button>
            <button
              onClick={() => {
                onLogout();
              }}
              className="flex items-center space-x-2 text-gray-600 hover:text-ocean-600 transition-colors"
            >
              <span>Logout</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-ocean-600 hover:bg-ocean-50 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-slide-up">
            <div className="grid grid-cols-2 gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`p-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'bg-ocean-100 text-ocean-700 shadow-sm'
                      : 'text-gray-600 hover:text-ocean-600 hover:bg-ocean-50'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  setCurrentPage('home');
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 p-3 text-gray-600 hover:text-ocean-600 hover:bg-ocean-50 rounded-lg transition-colors mb-2"
              >
                <span>Back to Website</span>
              </button>
              <button
                onClick={() => {
                  onLogout();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 p-3 text-gray-600 hover:text-ocean-600 hover:bg-ocean-50 rounded-lg transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
    );
};

export default Header; 