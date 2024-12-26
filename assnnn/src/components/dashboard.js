import React, { useState } from 'react';
import CreateInterview from './createinrerview';

const Dashboard = () => {
  const [showCreateInterview, setShowCreateInterview] = useState(false);

  const handleCreateInterviewClick = () => {
    setShowCreateInterview(true);
  };

  return (
    <div className="w-full p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">Dashboard</h2>
      {!showCreateInterview ? (
        <button
          type="button"
          className="w-full bg-blue-500 text-white py-2 rounded"
          onClick={handleCreateInterviewClick}
        >
          Create Interview
        </button>
      ) : (
        <CreateInterview />
      )}
    </div>
  );
};

export default Dashboard;
