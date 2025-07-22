import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  const [currentPage, setCurrentPage] = useState('login'); // Start with login
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('home'); // Go to home page after login
  };

  const handleRegister = () => {
    setIsAuthenticated(true);
    setCurrentPage('home'); // Go to home page after registration
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('login'); // Go back to login after logout
  };

  const renderPage = () => {
    // If not authenticated, only show login/register
    if (!isAuthenticated) {
      switch (currentPage) {
        case 'login':
          return <Login setCurrentPage={setCurrentPage} onLogin={handleLogin} />;
        case 'register':
          return <Register setCurrentPage={setCurrentPage} onRegister={handleRegister} />;
        default:
          return <Login setCurrentPage={setCurrentPage} onLogin={handleLogin} />;
      }
    }

    // If authenticated, show all pages including dashboard
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'adventures':
        return <Adventures />;
      case 'contact':
        return <Contact />;
      case 'dashboard':
        return <TravelDashboard onLogout={handleLogout} setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  // Show only login/register without navbar/footer when not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen">
        {renderPage()}
      </div>
    );
  }

  // Show dashboard without navbar/footer if on dashboard page
  if (currentPage === 'dashboard') {
    return <TravelDashboard onLogout={handleLogout} setCurrentPage={setCurrentPage} />;
  }

  // Show complete website with navbar and footer for other authenticated pages
  return (
    <div className='min-h-screen'>
      <Navbar currentPage={currentPage} 
      setCurrentPage={setCurrentPage} onLogout={handleLogout} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
