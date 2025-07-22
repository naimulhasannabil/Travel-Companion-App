import React, { useState } from "react";
import { Menu, X, User, LogIn } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage, onLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'adventures', label: 'Adventures' },
        { id: 'contact', label: 'Contact' },
        { id: 'dashboard', label: 'Dashboard' }
    ];

    return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-white font-bold text-xl">Travel</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-white hover:text-orange-300 transition-colors font-medium ${
                  currentPage === item.id ? 'text-orange-300' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="text-white hover:text-orange-300 transition-colors font-medium"
            >
              My Dashboard
            </button>
            <button
              onClick={onLogout}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-medium"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left text-gray-800 hover:text-orange-600 transition-colors font-medium ${
                  currentPage === item.id ? 'text-orange-600' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="border-t pt-4 space-y-2">
              <button
                onClick={() => {
                  setCurrentPage('dashboard');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-800 hover:text-orange-600 transition-colors font-medium"
              >
                My Dashboard
              </button>
              <button
                onClick={() => {
                  onLogout();
                  setIsMenuOpen(false);
                }}
                className="block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-medium text-center"
              >
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