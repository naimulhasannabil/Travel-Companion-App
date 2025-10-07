import React, { useState, useEffect } from "react";
import { Menu, X, User, LogIn, Home, Info, Compass, Mail, LayoutDashboard, LogOut } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'about', label: 'About', icon: <Info size={18} /> },
    { id: 'adventures', label: 'Adventures', icon: <Compass size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with improved styling */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-9 h-9 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Travel
            </span>
          </div>

          {/* Desktop Navigation - Improved with icons and better active state */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 border-b-2 border-orange-500'
                    : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>

          {/* Auth Buttons - More consistent styling */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-orange-100 to-red-100">
              <User className="text-orange-600" size={20} />
            </div>
            <button
              onClick={onLogout}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              <LogOut className="mr-2" size={18} />
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {isMenuOpen 
              ? <X className="h-6 w-6 text-gray-700" /> 
              : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu - Improved with better spacing and styling */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-xl mt-2 py-3 shadow-lg border border-gray-200">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center w-full px-4 py-3 text-left transition-colors ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 font-semibold border-l-4 border-orange-500'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="border-t border-gray-100 mt-2 pt-2">
              <button
                onClick={() => {
                  onLogout();
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-center w-full px-4 py-3 mt-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-medium"
              >
                <LogOut className="mr-2" size={18} />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;