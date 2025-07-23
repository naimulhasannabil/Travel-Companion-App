import React, { useState } from "react";
import Header from './Header';
import Dashboard from './Dashboard';
import Itinerary from './Itinerary';
import PackingList from './PackingList';
import Documents from './Documents';
import Budget from './Budget';
import Weather from './Weather';
import Journal from './Journal';

const TravelDashboard = ({ onLogout, setCurrentPage }) => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return <Dashboard setActiveTab={setActiveTab} />;
            case 'itinerary':
                return <Itinerary />;
            case 'packing':
                return <PackingList />;
            case 'documents':
                return <Documents />;
            case 'budget':
                return <Budget />;
            case 'weather':
                return <Weather />;
            case 'journal':
                return <Journal />;
            default:
                return <Dashboard setActiveTab={setActiveTab} />;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-ocean-50 to-forest-50">
            <Header 
               activeTab={activeTab}
               setActiveTab={setActiveTab}
               mobileMenuOpen={mobileMenuOpen}
               setMobileMenuOpen={setMobileMenuOpen}
               onLogout={onLogout}
               setCurrentPage={setCurrentPage}
            />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {renderContent()}
            </main>
        </div>
    )
};

export default TravelDashboard;