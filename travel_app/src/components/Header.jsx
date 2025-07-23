// Header.jsx
import React, { useState, useEffect } from "react";
import { Plane, Menu, X, LogOut, Home, ChevronDown, ChevronUp, Globe, Settings } from "lucide-react";

const Header = ({ activeTab, setActiveTab, onLogout, setCurrentPage }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    
    const tabs = [
        { id: 'dashboard', label: 'Dashboard', icon: '📊' },
        { id: 'itinerary', label: 'Itinerary', icon: '📅' },
        { id: 'packing', label: 'Packing', icon: '🎒' },
        { id: 'documents', label: 'Documents', icon: '📄' },
        { id: 'budget', label: 'Budget', icon: '💰' },
        { id: 'weather', label: 'Weather', icon: '🌤️' },
        { id: 'journal', label: 'Journal', icon: '📝' },
    ];
    
    // Handle scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
            scrolled ? 'shadow-md py-2' : 'shadow-sm py-3'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo and App Name */}
                    <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-xl shadow-lg">
                            <Plane className="h-6 w-6 text-white transform -rotate-45" />
                        </div>
                        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                            Travel Companion
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1 bg-gray-50 rounded-full p-1 shadow-inner">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 ${
                                    activeTab === tab.id
                                        ? 'bg-white text-blue-600 shadow-sm ring-1 ring-blue-100'
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                            >
                                <span className="text-lg">{tab.icon}</span>
                                <span className="text-sm">{tab.label}</span>
                            </button>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button
                            onClick={() => setCurrentPage('home')}
                            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full"
                        >
                            <Globe className="h-5 w-5" />
                            <span className="text-sm font-medium">Website</span>
                        </button>
                        
                        <div className="relative">
                            <button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-full"
                            >
                                <div className="bg-gradient-to-r from-blue-400 to-teal-400 w-8 h-8 rounded-full flex items-center justify-center text-white font-medium">
                                    JL
                                </div>
                                {showUserMenu ? (
                                    <ChevronUp className="h-4 w-4" />
                                ) : (
                                    <ChevronDown className="h-4 w-4" />
                                )}
                            </button>
                            
                            {showUserMenu && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-50">
                                    <button 
                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                                        onClick={() => console.log("Settings clicked")}
                                    >
                                        <Settings className="h-4 w-4" />
                                        <span>Settings</span>
                                    </button>
                                    <button 
                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                                        onClick={onLogout}
                                    >
                                        <LogOut className="h-4 w-4" />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 mt-2 animate-slide-down">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                        <div className="grid grid-cols-4 gap-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => {
                                        setActiveTab(tab.id);
                                        setMobileMenuOpen(false);
                                    }}
                                    className={`flex flex-col items-center justify-center p-3 rounded-xl font-medium transition-all duration-200 ${
                                        activeTab === tab.id
                                            ? 'bg-blue-50 text-blue-600 shadow-inner'
                                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                    }`}
                                >
                                    <span className="text-xl">{tab.icon}</span>
                                    <span className="text-xs mt-1">{tab.label}</span>
                                </button>
                            ))}
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-3">
                            <button
                                onClick={() => {
                                    setCurrentPage('home');
                                    setMobileMenuOpen(false);
                                }}
                                className="flex items-center justify-center space-x-2 p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                            >
                                <Globe className="h-5 w-5" />
                                <span>Website</span>
                            </button>
                            <button
                                onClick={() => {
                                    onLogout();
                                    setMobileMenuOpen(false);
                                }}
                                className="flex items-center justify-center space-x-2 p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                            >
                                <LogOut className="h-5 w-5" />
                                <span>Logout</span>
                            </button>
                        </div>
                        
                        <div className="mt-4 flex items-center justify-center space-x-3">
                            <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
                                <Settings className="h-5 w-5 text-gray-600" />
                            </button>
                            <div className="bg-gradient-to-r from-blue-400 to-teal-400 w-10 h-10 rounded-full flex items-center justify-center text-white font-medium">
                                JL
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;