import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const OtpValidation = ({ onValidationSuccess }) => {
  const [phoneOtp, setPhoneOtp] = useState('');
  const [emailOtp, setEmailOtp] = useState('');
  const [phoneValidated, setPhoneValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);

  const handlePhoneOtpChange = (e) => {
    const value = e.target.value;
    setPhoneOtp(value);
    // Validate phone OTP
    if (value === '1234') {
      setPhoneValidated(true);
    } else {
      setPhoneValidated(false);
    }
  };

  const handleEmailOtpChange = (e) => {
    const value = e.target.value;
    setEmailOtp(value);
    // Validate email OTP
    if (value === '1234') {
      setEmailValidated(true);
    } else {
      setEmailValidated(false);
    }
  };

  const handleSubmit = () => {
    if (phoneValidated && emailValidated) {
      onValidationSuccess();
    } else {
      alert('Please enter correct OTPs for both phone and email.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Verify OTP</h2>
      
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Enter Phone OTP"
          value={phoneOtp}
          onChange={handlePhoneOtpChange}
          className={`w-full px-4 py-2 border ${
            phoneValidated ? 'border-green-500' : 'border-gray-300'
          } rounded-md focus:ring-blue-500 focus:border-blue-500`}
        />
        {phoneValidated && (
          <CheckIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
        )}
        {!phoneValidated && phoneOtp.length > 0 && (
          <span className="text-red-500 text-xs">Invalid Phone OTP</span>
        )}
      </div>

      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Enter Email OTP"
          value={emailOtp}
          onChange={handleEmailOtpChange}
          className={`w-full px-4 py-2 border ${
            emailValidated ? 'border-green-500' : 'border-gray-300'
          } rounded-md focus:ring-blue-500 focus:border-blue-500`}
        />
        {emailValidated && (
          <CheckIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
        )}
        {!emailValidated && emailOtp.length > 0 && (
          <span className="text-red-500 text-xs">Invalid Email OTP</span>
        )}
      </div>

      <button
        type="button"
        className={`w-full py-2 px-4 rounded-md transition-colors duration-200 ${
          phoneValidated && emailValidated ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
        } text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
        onClick={handleSubmit}
        disabled={!phoneValidated || !emailValidated}
      >
        Validate OTPs
      </button>
    </div>
  );
};

export default OtpValidation;
