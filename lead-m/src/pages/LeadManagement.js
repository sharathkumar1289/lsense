import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import axios from 'axios';
import '../input.css';

const LeadManagement = () => {
  const [lead, setLead] = useState({
    name: '',
    email: '',
    phone: '',
    source: '',
    status: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editLeadId, setEditLeadId] = useState(null);
  const [leads, setLeads] = useState([]);
  const [showForm, setShowForm] = useState(false); // Track whether to show the form

  // Fetch leads from the backend when the component mounts
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/leads');
        setLeads(response.data);
      } catch (error) {
        console.error('Error fetching leads:', error);
        alert('There was an issue fetching the leads.');
      }
    };

    fetchLeads();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLead((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:8080/api/leads/${editLeadId}`, lead);
        alert('Lead updated successfully!');
      } else {
        await axios.post('http://localhost:8080/api/leads', lead);
        alert('Lead added successfully!');
      }
      setLead({ name: '', email: '', phone: '', source: '', status: '' });
      setIsEditing(false);
      setShowForm(false); // Hide form after submission
    } catch (error) {
      console.error('Error submitting lead:', error);
      alert('There was an issue submitting the lead. Please try again.');
    }
  };

  const toggleEditMode = (lead) => {
    setIsEditing(true);
    setLead({ ...lead });
    setEditLeadId(lead.id);
    setShowForm(true); // Show form when editing
  };

  const handleCancel = () => {
    setIsEditing(false);
    setLead({ name: '', email: '', phone: '', source: '', status: '' });
    setShowForm(false); // Hide form on cancel
  };

  const toggleAddLeadForm = () => {
    setIsEditing(false);
    setLead({ name: '', email: '', phone: '', source: '', status: '' });
    setShowForm(true); // Show form when adding a new lead
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-8 text-center">Lead Management</h1>

        {/* Button to show the form */}
        <div className="flex justify-center mb-8">
          <button
            onClick={toggleAddLeadForm}
            className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-8 py-3 rounded-lg text-lg shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            Add Lead
          </button>
        </div>

        {/* Conditional rendering of the form */}
        {showForm && (
          <div className="bg-white p-8 shadow-lg rounded-lg max-w-3xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={lead.name}
                    onChange={handleChange}
                    className="mt-1 px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={lead.email}
                    onChange={handleChange}
                    className="mt-1 px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={lead.phone}
                    onChange={handleChange}
                    className="mt-1 px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Source</label>
                  <input
                    type="text"
                    name="source"
                    value={lead.source}
                    onChange={handleChange}
                    className="mt-1 px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    name="status"
                    value={lead.status}
                    onChange={handleChange}
                    className="mt-1 px-4 py-3 w-full border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Not Interested">Not Interested</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-8">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-teal-400 text-white px-8 py-3 rounded-lg text-lg shadow-md hover:bg-green-600 transition duration-300"
                >
                  {isEditing ? 'Save Changes' : 'Add Lead'}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 text-white px-8 py-3 rounded-lg text-lg shadow-md hover:bg-gray-600 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="mt-10 bg-white p-8 shadow-lg rounded-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">Lead List</h2>
          <table className="min-w-full table-auto">
            <thead className="bg-indigo-100 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Source</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b hover:bg-indigo-50 transition duration-300">
                  <td className="py-3 px-4">{lead.name}</td>
                  <td className="py-3 px-4">{lead.email}</td>
                  <td className="py-3 px-4">{lead.phone}</td>
                  <td className="py-3 px-4">{lead.source}</td>
                  <td className="py-3 px-4">{lead.status}</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => toggleEditMode(lead)}
                      className="text-indigo-600 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeadManagement;
