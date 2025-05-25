'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ContactSubmissionsAdmin = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(false);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        setError(null);
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Authentication token not found. Please log in again.');
        }

        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/contact/getall`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        setSubmissions(response.data.data.map(submission => ({
          id: submission._id,
          name: submission.name,
          email: submission.email,
          message: submission.message,
          date: submission.date,
          status: submission.status
        })));
      } catch (error) {
        console.error('Error fetching submissions:', error);
        setError(error.response?.data?.message || error.message || 'Failed to fetch submissions');
        setSubmissions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const filteredSubmissions = submissions.filter(submission => {
    return (
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.message.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      setUpdateLoading(true);
      const token = localStorage.getItem('token');
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact/${id}`,
        { status: newStatus },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      // Update local state
      setSubmissions(submissions.map(sub => 
        sub.id === id ? { ...sub, status: newStatus } : sub
      ));
    } catch (error) {
      console.error('Error updating status:', error);
      // You might want to show an error message to the user here
      alert(error.response?.data?.message || 'Failed to update status');
    } finally {
      setUpdateLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Contact Form Submissions</h1>
        
        {/* Search bar - only show if there are submissions */}
        {!loading && !error && submissions.length > 0 && (
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name, email or message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto text-red-500 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Submissions</h3>
              <p className="text-gray-500">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : filteredSubmissions.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <p className="text-gray-500">No submissions found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Submission list */}
            <div className="lg:col-span-1 bg-white rounded-lg shadow overflow-hidden">
              <div className="max-h-[600px] overflow-y-auto">
                {filteredSubmissions.map((submission) => (
                  <div
                    key={submission.id}
                    onClick={() => setSelectedSubmission(submission)}
                    className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-blue-50 transition ${
                      selectedSubmission?.id === submission.id ? 'bg-blue-100' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{submission.name}</h3>
                        <p className="text-sm text-gray-500 truncate">{submission.email}</p>
                      </div>
                      <span className="text-xs text-gray-400">
                        {formatDate(submission.date)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {submission.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Submission detail */}
            <div className="lg:col-span-2">
              {selectedSubmission ? (
                <div className="bg-white rounded-lg shadow p-6 h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">{selectedSubmission.name}</h2>
                      <p className="text-blue-600">{selectedSubmission.email}</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {formatDate(selectedSubmission.date)}
                    </span>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Message</h3>
                    <p className="text-gray-800 whitespace-pre-line">
                      {selectedSubmission.message}
                    </p>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Status</h3>
                    <select
                      value={selectedSubmission.status}
                      onChange={(e) => handleStatusUpdate(selectedSubmission.id, e.target.value)}
                      disabled={updateLoading}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="new">New</option>
                      <option value="in-progress">In Progress</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </div>

                  <div className="mt-6 flex space-x-3">
                    <a
                      href={`mailto:${selectedSubmission.email}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Reply
                    </a>
                    <button
                      onClick={() => setSelectedSubmission(null)}
                      className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                      Select a submission
                    </h3>
                    <p className="mt-1 text-gray-500">
                      Click on a contact message from the list to view details
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSubmissionsAdmin;