import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import Navbar from '../components/NavBar'; // Ensure you import Navbar
import '../input.css'; // Include your custom styles if any
import { CSVLink } from 'react-csv'; // Import CSVLink for exporting data
import axios from 'axios'; // Import axios

const Dashboard = () => {
  const [stats, setStats] = useState({
    created: 0,
    closed: 0,
    inProgress: 0,
    new: 0,
    total: 0,
    newThisMonth: 0,
    email: 0,
    direct: 0,
    socialMedia: 0,
    other: 0,
    leads: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data using axios
    axios.get("http://localhost:8080/api/dashboard")
      .then((response) => {
        setStats(response.data); // Set the response data to state
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((err) => {
        console.error("Error fetching dashboard stats:", err);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  // Prepare the data for the BarChart
  const chartData = [
    { name: "Leads Created", value: stats.created },
    { name: "Leads Closed", value: stats.closed },
    { name: "Leads In Progress", value: stats.inProgress },
  ];

  // Pie chart data for Lead Status Distribution
  const pieChartData = [
    { name: "New", value: stats.new },
    { name: "Closed", value: stats.closed },
    { name: "In Progress", value: stats.inProgress },
  ];

  // Bar chart data for Leads by Source
  const barChartSourceData = [
    { name: "Email", value: stats.email },
    { name: "Direct", value: stats.direct },
    { name: "Social Media", value: stats.socialMedia },
    { name: "Other", value: stats.other },
  ];

  // Calculate Conversion Rate (Assume stats.closed and stats.created are available)
  const conversionRate = stats.created ? ((stats.closed / stats.created) * 100).toFixed(2) : 0;

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

        {/* Loading State */}
        {loading && <div className="text-center text-xl text-gray-700">Loading...</div>}

        {!loading && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* KPI Cards */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-700">Total Leads</h3>
                <p className="text-2xl font-bold text-blue-600">{stats.total}</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-700">New Leads (This Month)</h3>
                <p className="text-2xl font-bold text-blue-600">{stats.newThisMonth}</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-700">Conversion Rate (%)</h3>
                <p className="text-2xl font-bold text-blue-600">{conversionRate}%</p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
              {/* Pie Chart for Lead Status Distribution */}
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Lead Status Distribution</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} label>
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={['#3b82f6', '#34d399', '#f97316'][index % 3]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
              {/* Bar Chart for Leads by Source */}
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Leads by Source</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barChartSourceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Download Reports Button */}
            <div className="flex justify-center mt-8">
              <CSVLink
                data={stats.leads || []} // Assuming you have leads data in stats
                filename={"lead_report.csv"}
                className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-8 py-3 rounded-lg text-lg shadow-md hover:bg-indigo-700 transition duration-300"
              >
                Download CSV Report
              </CSVLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
