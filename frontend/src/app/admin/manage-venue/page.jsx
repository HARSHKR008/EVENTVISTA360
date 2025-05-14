'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FiTrash2, FiEdit, FiPlus, FiLoader } from 'react-icons/fi';
import Link from 'next/link';

const ManageVenue = () => {
    const [venueList, setVenueList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleteLoading, setDeleteLoading] = useState(null);

    const fetchVenues = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/venue/getall`);
            setVenueList(res.data);
        } catch (err) {
            console.error('Failed to fetch venues:', err);
            setError('Failed to load venues. Please try again.');
            toast.error('Failed to load venues');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVenues();
    }, []);

    const deleteVenue = async (id) => {
        setDeleteLoading(id);
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/venue/delete/${id}`);
            toast.success('Venue deleted successfully');
            fetchVenues();
        } catch (err) {
            console.error('Failed to delete venue:', err);
            toast.error('Failed to delete venue');
        } finally {
            setDeleteLoading(null);
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Manage Venues</h1>
                    <Link 
                        href="/user/form" 
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        <FiPlus /> Add New Venue
                    </Link>
                </div>

                {error && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
                        <p>{error}</p>
                        <button 
                            onClick={fetchVenues} 
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
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Added On</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {venueList.length > 0 ? (
                                        venueList.map((venue) => (
                                            <tr key={venue._id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="font-medium text-gray-900">{venue.name}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-gray-600">
                                                        {venue.address?.city}, {venue.address?.state}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        {venue.capacity} people
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {formatDate(venue.createdAt)}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex justify-end gap-2">
                                                        <Link
                                                            href={`/admin/venues/edit/${venue._id}`}
                                                            className="text-blue-600 hover:text-blue-900 p-2 rounded hover:bg-blue-50"
                                                        >
                                                            <FiEdit className="h-5 w-5" />
                                                        </Link>
                                                        <button
                                                            onClick={() => deleteVenue(venue._id)}
                                                            disabled={deleteLoading === venue._id}
                                                            className="text-red-600 hover:text-red-900 p-2 rounded hover:bg-red-50 disabled:opacity-50"
                                                        >
                                                            {deleteLoading === venue._id ? (
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
                                                No venues found. Add your first venue to get started.
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

export default ManageVenue;