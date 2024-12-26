import React, { useState } from 'react';

const CreateInterview = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    experienceLevel: '',
    candidates: [],
    endDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">Create Interview</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Enter Job Title"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            onChange={handleChange}
            value={formData.jobTitle}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Job Description</label>
          <textarea
            name="jobDescription"
            placeholder="Enter Job Description"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            onChange={handleChange}
            value={formData.jobDescription}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Experience Level</label>
          <input
            type="text"
            name="experienceLevel"
            placeholder="Enter Experience Level"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            onChange={handleChange}
            value={formData.experienceLevel}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">End Date</label>
          <input
            type="date"
            name="endDate"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            onChange={handleChange}
            value={formData.endDate}
          />
        </div>

        <button
          type="button"
          className="w-full bg-green-500 text-white py-2 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateInterview;
