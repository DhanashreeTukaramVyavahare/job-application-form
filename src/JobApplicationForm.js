import React, { useState } from 'react';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    companyName: 'ABC Corp.',
    companyAddress: '1234 Business St., Cityville, ST 12345',
    name: '',
    email: '',
    phone: '',
    position: '',
    linkedIn: '',
    portfolio: '',
    coverLetter: '',
    resume: null,
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phone) tempErrors.phone = "Phone is required";
    if (!formData.position) tempErrors.position = "Position is required";
    if (!formData.resume) tempErrors.resume = "Resume is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Job Application Form</h2>
      {success && <p className="text-green-600 text-center mb-4">Application submitted successfully!</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Company Name (Read-Only) */}
        <div>
          <label className="block text-gray-700">Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Company Address (Read-Only) */}
        <div>
          <label className="block text-gray-700">Company Address:</label>
          <input
            type="text"
            name="companyAddress"
            value={formData.companyAddress}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Applicant Name */}
        <div>
          <label className="block text-gray-700">Full Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700">Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Position */}
        <div>
          <label className="block text-gray-700">Position Applied For:</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
          {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
        </div>

        {/* LinkedIn Profile */}
        <div>
          <label className="block text-gray-700">LinkedIn Profile:</label>
          <input
            type="url"
            name="linkedIn"
            value={formData.linkedIn}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Portfolio URL */}
        <div>
          <label className="block text-gray-700">Portfolio URL:</label>
          <input
            type="url"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block text-gray-700">Cover Letter:</label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          ></textarea>
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block text-gray-700">Resume (PDF):</label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
          {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
