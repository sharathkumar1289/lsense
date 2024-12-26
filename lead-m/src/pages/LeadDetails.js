import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/NavBar';
import '../input.css';

const LeadDetails = () => {
  const [leadIdInput, setLeadIdInput] = useState('');
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(false);
  const [updatedLead, setUpdatedLead] = useState({});

  // Function to fetch lead details based on leadId
  const fetchLeadDetails = async (leadId) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/api/leads/${leadId}`);
      setLead(response.data);
      setUpdatedLead(response.data);  // Initial state for updates
      setLoading(false);
    } catch (error) {
      console.error('Error fetching lead details:', error);
      setLoading(false);
    }
  };

  const handleLeadIdSubmit = () => {
    if (leadIdInput) {
      fetchLeadDetails(leadIdInput);
    }
  };

  // Function to update lead details via PUT request
  const handleUpdateLead = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/leads/${updatedLead.id}`, updatedLead);
      setLead(response.data);  // Update the displayed lead details after successful update
      alert("Lead updated successfully!");
    } catch (error) {
      console.error('Error updating lead:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedLead(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Helper function to format dates nicely
  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.toLocaleDateString()} at ${d.toLocaleTimeString()}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <div className="container mx-auto p-8 md:px-16 lg:px-24 max-w-7xl">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8">Lead Details</h1>

        {/* Lead ID Input Section */}
        <div className="mb-8 flex items-center justify-center space-x-4">
          <input
            type="number"
            value={leadIdInput}
            onChange={(e) => setLeadIdInput(e.target.value)}
            placeholder="Enter Lead ID"
            className="w-1/3 p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 transition duration-300"
          />
          <button
            onClick={handleLeadIdSubmit}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none transition duration-300"
          >
            Fetch Lead
          </button>
        </div>

        {/* Displaying the Lead Details if available */}
        {loading ? (
          <div className="text-center py-6">
            <p className="text-xl font-semibold text-gray-500">Loading...</p>
          </div>
        ) : lead ? (
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Lead Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input Fields with Tailwind Styling */}
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-600 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={updatedLead.name || lead.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 transition duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={updatedLead.email || lead.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 transition duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={updatedLead.phone || lead.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 transition duration-300"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-600 font-medium">Status</label>
                  <select
                    name="status"
                    value={updatedLead.status || lead.status}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 transition duration-300"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 font-medium">Source</label>
                  <input
                    type="text"
                    name="source"
                    value={updatedLead.source || lead.source}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 transition duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium">Notes</label>
                  <textarea
                    name="notes"
                    value={updatedLead.notes || lead.notes}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 transition duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Created and Updated At Sections */}
            <div className="mt-8 space-y-4">
              <div>
                <p className="font-medium text-gray-600">Created At:</p>
                <p className="text-gray-500">{formatDate(lead.createdAt)}</p>
              </div>
              <div>
                <p className="font-medium text-gray-600">Updated At:</p>
                <p className="text-gray-500">{formatDate(lead.updatedAt)}</p>
              </div>
            </div>

            {/* Update Lead Button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={handleUpdateLead}
                className="px-8 py-4 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none transition duration-300"
              >
                Update Lead
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-lg font-semibold text-gray-500">No lead found. Please try again.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadDetails;
