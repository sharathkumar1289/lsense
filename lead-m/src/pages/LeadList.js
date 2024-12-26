import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import '../input.css';

const LeadList = () => {
  const [leads, setLeads] = useState([]); // Initialize as an empty array
  const [filteredLeads, setFilteredLeads] = useState([]); // To store filtered leads
  const [filters, setFilters] = useState({ status: '', search: '' });
  const [pagination, setPagination] = useState({ page: 1, pageSize: 10 });

  useEffect(() => {
    fetchLeads();
  }, [filters, pagination]);

  useEffect(() => {
    // Filter leads when the search or status filter changes
    if (filters.search || filters.status) {
      const filtered = leads.filter((lead) => {
        const matchesSearch =
          lead.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          lead.id.toString().includes(filters.search);
        const matchesStatus =
          filters.status ? lead.status.toLowerCase() === filters.status.toLowerCase() : true;
        return matchesSearch && matchesStatus;
      });
      setFilteredLeads(filtered);
    } else {
      setFilteredLeads(leads); // No filters applied, show all leads
    }
  }, [filters, leads]);

  const fetchLeads = async () => {
    try {
      const { status, search } = filters;
      const { page, pageSize } = pagination;
      const response = await axios.get('http://localhost:8080/api/leads', {
        params: { status, search, page, pageSize }
      });
      setLeads(response.data); // Update leads state with fetched data
    } catch (error) {
      console.error('Error fetching leads:', error);
      setLeads([]); // Set leads to an empty array if there's an error
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaginationChange = (page) => {
    setPagination((prev) => ({ ...prev, page }));
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Lead Management</h1>

        {/* Filters */}
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleFilterChange}
            className="px-4 py-2 border rounded"
            placeholder="Search by Name or ID"
          />
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="px-4 py-2 border rounded"
          >
            <option value="">All Status</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Not Interested">Not Interested</option>
            {/* Add more statuses */}
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                {/* Add other columns */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLeads.length > 0 ? (
                filteredLeads.map((lead) => (
                  <tr key={lead.id}>
                    <td className="px-6 py-4 text-sm text-gray-500">{lead.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{lead.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          lead.status === 'New' ? 'bg-green-200 text-green-800' :
                          lead.status === 'Contacted' ? 'bg-orange-200 text-orange-800' :
                          'bg-gray-200 text-gray-800'
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-6 py-4 text-sm text-center text-gray-500">
                    No leads found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => handlePaginationChange(pagination.page - 1)}
            disabled={pagination.page === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Prev
          </button>
          <button
            onClick={() => handlePaginationChange(pagination.page + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadList;
