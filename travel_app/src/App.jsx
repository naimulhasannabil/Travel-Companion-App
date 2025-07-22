import React, { useState } from 'react'
import Navbar from './components/Navbar';

import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className='min-h-screen'>
      <Navbar currentPage={currentPage} 
      setCurrentPage={setCurrentPage} onLogout={handleLogout} />
    </div>
  );
}

export default App
