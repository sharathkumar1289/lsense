import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import OtpValidation from './components/otp';
import Dashboard from './components/dashboard';


const App = () => {
  const [currentView, setCurrentView] = useState('signup');

  const handleProceed = () => {
    setCurrentView('otpValidation');
  };

  const handleValidationSuccess = () => {
    setCurrentView('dashboard');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto mt-8 px-4">
        {currentView === 'signup' && (
          <Signup onProceed={handleProceed} />
        )}
        {currentView === 'otpValidation' && (
          <OtpValidation onValidationSuccess={handleValidationSuccess} />
        )}
        {currentView === 'dashboard' && (
          <Dashboard />
        )}
      </main>
    </div>
  );
};

export default App;