// import React, { useState } from 'react';
// import { PhoneIcon, CheckIcon, EnvelopeIcon } from '@heroicons/react/24/outline';


// const SignUpComponent = () => {
//   const [step, setStep] = useState(1); // Track which step we're on
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [isVerified, setIsVerified] = useState(false);
//   const [otpPhone, setOtpPhone] = useState('');
//   const [otpEmail, setOtpEmail] = useState('');
//   const [isPhoneOtpValid, setIsPhoneOtpValid] = useState(false);
//   const [isEmailOtpValid, setIsEmailOtpValid] = useState(false);

//   // Handle phone and email verification OTP
//   const handlePhoneVerify = () => {
//     if (otpPhone === '1234') { // Assuming '1234' as a valid OTP for demo purposes
//       setIsPhoneOtpValid(true);
//     } else {
//       alert('Invalid Phone OTP');
//     }
//   };

//   const handleEmailVerify = () => {
//     if (otpEmail === '1234') { // Assuming '1234' as valid OTP for demo purposes
//       setIsEmailOtpValid(true);
//     } else {
//       alert('Invalid Email OTP');
//     }
//   };

//   // Handle form submit and move to OTP verification step
//   const handleSignUpSubmit = () => {
//     if (phone.length === 10 && email.includes('@')) {
//       setStep(2); // Move to OTP verification step
//     } else {
//       alert('Please enter valid phone number and email');
//     }
//   };

//   // Handle proceed to dashboard after OTP validation
//   const handleProceedToDashboard = () => {
//     if (isPhoneOtpValid && isEmailOtpValid) {
//       setStep(3); // Move to dashboard
//     } else {
//       alert('Please validate both phone and email OTPs');
//     }
//   };

//   // Render based on step
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       {step === 1 && (
//         <div className="w-1/2 max-w-md">
//           <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
//             <h2 className="text-3xl font-semibold mb-6 text-center">Sign Up</h2>
//             <form>
//               <div className="space-y-4">
//                 {/* Phone number field */}
//                 <div className="relative">
//                   <PhoneIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                   <input
//                     type="tel"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     required
//                     className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                     placeholder="Phone No."
//                   />
//                 </div>

//                 {/* Email field */}
//                 <div className="relative">
//                   <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                     placeholder="Email"
//                   />
//                 </div>

//                 {/* Proceed Button */}
//                 <button
//                   type="button"
//                   onClick={handleSignUpSubmit}
//                   className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                 >
//                   Proceed to OTP Verification
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {step === 2 && (
//         <div className="w-1/2 max-w-md">
//           <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
//             <h2 className="text-3xl font-semibold mb-6 text-center">OTP Verification</h2>

//             {/* Phone OTP */}
//             <div className="relative mb-4">
//               <input
//                 type="text"
//                 value={otpPhone}
//                 onChange={(e) => setOtpPhone(e.target.value)}
//                 placeholder="Enter Phone OTP"
//                 className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//               <button
//                 onClick={handlePhoneVerify}
//                 className="mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
//               >
//                 Verify Phone OTP
//               </button>
//             </div>

//             {/* Email OTP */}
//             <div className="relative mb-4">
//               <input
//                 type="text"
//                 value={otpEmail}
//                 onChange={(e) => setOtpEmail(e.target.value)}
//                 placeholder="Enter Email OTP"
//                 className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//               <button
//                 onClick={handleEmailVerify}
//                 className="mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
//               >
//                 Verify Email OTP
//               </button>
//             </div>

//             {/* Proceed Button */}
//             <button
//               type="button"
//               onClick={handleProceedToDashboard}
//               className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
//             >
//               Proceed to Dashboard
//             </button>
//           </div>
//         </div>
//       )}

//       {step === 3 && (
//         <div className="w-1/2 max-w-md">
//           <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
//             <h2 className="text-3xl font-semibold mb-6 text-center">Dashboard</h2>
//             <button
//               onClick={() => setStep(4)}
//               className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
//             >
//               Create Interview
//             </button>
//           </div>
//         </div>
//       )}

//       {step === 4 && (
//         <div className="w-1/2 max-w-md">
//           <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
//             <h2 className="text-3xl font-semibold mb-6 text-center">Create Interview</h2>
//             <form>
//               {/* Job Title */}
//               <input
//                 type="text"
//                 placeholder="Enter Job Title"
//                 className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-4"
//               />

//               {/* Job Description */}
//               <textarea
//                 placeholder="Enter Job Description"
//                 className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-4"
//                 rows="4"
//               ></textarea>

//               {/* Experience Level */}
//               <select
//                 className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-4"
//               >
//                 <option>Select Experience Level</option>
//                 <option>Junior</option>
//                 <option>Mid-Level</option>
//                 <option>Senior</option>
//               </select>

//               {/* Add Candidate */}
//               <input
//                 type="email"
//                 placeholder="Add Candidate (email)"
//                 className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-4"
//               />

//               {/* End Date */}
//               <input
//                 type="date"
//                 className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-4"
//               />

//               {/* Send Button */}
//               <button
//                 type="submit"
//                 className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
//               >
//                 Send Interview Invitation
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignUpComponent;





import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, CheckIcon } from '@heroicons/react/24/outline';

const Signup = ({ onProceed }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    companyName: '',
    companyEmail: '',
    employeeSize: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex">
      {/* Text Component Left */}
      <div className="w-1/2 pr-8">
        <h2 className="text-2xl font-semibold">Join Us Today</h2>
        <p className="mt-4">Sign up to create interviews and manage candidates easily. Fill in the details to proceed.</p>
      </div>
      
      {/* Signup Form */}
      <div className="w-1/2 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold text-center mb-4">Sign Up</h2>
        <form>
          <div className="relative mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          <div className="relative mb-4">
            <PhoneIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="phone"
              placeholder="Phone no."
              className="w-full px-10 py-2 border border-gray-300 rounded"
              onChange={handleChange}
              value={formData.phone}
            />
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              onChange={handleChange}
              value={formData.companyName}
            />
          </div>

          <div className="relative mb-4">
            <EnvelopeIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="companyEmail"
              placeholder="Company Email"
              className="w-full px-10 py-2 border border-gray-300 rounded"
              onChange={handleChange}
              value={formData.companyEmail}
            />
          </div>

          <div className="relative mb-4">
            <input
              type="number"
              name="employeeSize"
              placeholder="Employee Size"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              onChange={handleChange}
              value={formData.employeeSize}
            />
          </div>

          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded mt-4"
            onClick={onProceed}
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
