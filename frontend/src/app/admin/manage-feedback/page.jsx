'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FiTrash2, FiEdit, FiLoader, FiMessageSquare } from 'react-icons/fi';

const ManageFeedback = () => {
    const [feedbackList, setFeedbackList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleteLoading, setDeleteLoading] = useState(null);


    const fetchFeedbacks = async () => {
        try {
            setLoading(true);
            // Get token from localStorage
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('Please login first');
                window.location.href = '/login';
                return;
            }

            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/feed/all-feedbacks`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (res.data.success === false) {
                throw new Error(res.data.message || 'Failed to fetch feedbacks');
            }

            setFeedbackList(res.data.feedbacks || []);
        } catch (err) {
            console.error('Failed to fetch feedbacks:', err);
            setError('Failed to load feedbacks. Please try again.');
            toast.error(err.response?.data?.message || 'Failed to load feedbacks');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFeedbacks();
    }, []); const deleteFeedback = async (id) => {
        setDeleteLoading(id);
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('Please login first');
                return;
            }

            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/feed/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            toast.success('Feedback deleted successfully');
            fetchFeedbacks();
        } catch (err) {
            console.error('Failed to delete feedback:', err);
            toast.error('Failed to delete feedback');
        } finally {
            setDeleteLoading(null);
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const truncateText = (text, length = 50) => {
        return text.length > length ? `${text.substring(0, length)}...` : text;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                        <FiMessageSquare className="text-blue-600" /> Manage Feedbacks
                    </h1>
                </div>

                {error && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
                        <p>{error}</p>
                        <button
                            onClick={fetchFeedbacks}
                            className="mt-2 text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                        >
                            Retry
                        </button>
                    </div>
                )}

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <FiLoader className="animate-spin text-4xl text-blue-600" />
                    </div>
                ) : (
                    <div className="bg-white rounded-xl shadow overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feedback</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {feedbackList.length > 0 ? (
                                        feedbackList.map((feedback) => (
                                            <tr key={feedback._id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="font-medium text-gray-900">{feedback.event}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg
                                                                key={i}
                                                                className={`h-5 w-5 ${i < feedback.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        ))}
                                                        <span className="ml-1 text-gray-600">({feedback.rating}/5)</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500" title={feedback.liked}>
                                                        {truncateText(feedback.liked)}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-500">
                                                        {formatDate(feedback.createdAt)}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex justify-end gap-2">
                                                        <button
                                                            onClick={() => deleteFeedback(feedback._id)}
                                                            disabled={deleteLoading === feedback._id}
                                                            className="text-red-600 hover:text-red-900 p-2 rounded hover:bg-red-50 disabled:opacity-50"
                                                        >
                                                            {deleteLoading === feedback._id ? (
                                                                <FiLoader className="h-5 w-5 animate-spin" />
                                                            ) : (
                                                                <FiTrash2 className="h-5 w-5" />
                                                            )}
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                                                No feedbacks found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageFeedback;