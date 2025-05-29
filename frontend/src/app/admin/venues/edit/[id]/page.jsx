'use client';
import { useState, useEffect } from 'react';
import { use } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { FiLoader } from 'react-icons/fi';

export default function EditVenue({ params: paramsPromise }){
    const router = useRouter();
    const [venue, setVenue] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        capacity: '',
        address: {
            street: '',
            city: '',
            state: '',
            zipCode: '',
        },
        imgurl: []
    });    const params = use(paramsPromise);
    
    useEffect(() => {
        const fetchVenue = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/venue/getbyid/${params.id}`);
                setVenue(response.data);
                setFormData({
                    name: response.data.name || '',
                    description: response.data.description || '',
                    capacity: response.data.capacity || '',
                    address: {
                        street: response.data.address?.street || '',
                        city: response.data.address?.city || '',
                        state: response.data.address?.state || '',
                        zipCode: response.data.address?.zipCode || '',
                    },
                    imgurl: response.data.imgurl || []
                });
                setLoading(false);
            } catch (error) {
                console.error('Error fetching venue:', error);
                toast.error('Failed to load venue details');
                setLoading(false);
            }
        };

        fetchVenue();
    }, [params.id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            // Remove empty or undefined values from address
            const cleanedFormData = {
                ...formData,
                address: Object.fromEntries(
                    Object.entries(formData.address).filter(([_, value]) => value !== '')
                )
            };

            // Convert capacity to number
            if (cleanedFormData.capacity) {
                cleanedFormData.capacity = Number(cleanedFormData.capacity);
            }

            const response = await axios.put(
                `${process.env.NEXT_PUBLIC_API_URL}/venue/update/${params.id}`,
                cleanedFormData,
                config
            );

            if (response.data) {
                toast.success('Venue updated successfully');
                router.push('/admin/manage-venue');
            }
        } catch (error) {
            console.error('Error updating venue:', error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                const errorMessage = error.response.data?.message || 'Failed to update venue';
                toast.error(errorMessage);
                
                if (error.response.data?.errors) {
                    Object.values(error.response.data.errors).forEach(err => {
                        toast.error(err.message || err);
                    });
                }
            } else if (error.request) {
                // The request was made but no response was received
                toast.error('No response from server. Please check your connection.');
            } else {
                // Something happened in setting up the request that triggered an Error
                toast.error('Error occurred while updating venue. Please try again.');
            }
        } finally {
            setSubmitting(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <FiLoader className="animate-spin text-4xl text-blue-600" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Venue</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Venue Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows="4"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Capacity</label>
                            <input
                                type="number"
                                name="capacity"
                                value={formData.capacity}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Street Address</label>
                                <input
                                    type="text"
                                    name="address.street"
                                    value={formData.address.street}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">City</label>
                                <input
                                    type="text"
                                    name="address.city"
                                    value={formData.address.city}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">State</label>
                                <input
                                    type="text"
                                    name="address.state"
                                    value={formData.address.state}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Zip Code</label>
                                <input
                                    type="text"
                                    name="address.zipCode"
                                    value={formData.address.zipCode}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={() => router.push('/admin/manage-venue')}
                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={submitting}
                                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                            >
                                {submitting ? (
                                    <span className="flex items-center">
                                        <FiLoader className="animate-spin -ml-1 mr-2 h-5 w-5" />
                                        Updating...
                                    </span>
                                ) : (
                                    'Update Venue'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
