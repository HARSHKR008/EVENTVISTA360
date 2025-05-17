'use client';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState({
        isLoading: true,
        venues: [],
        totalVenues: 0,
        totalUsers: 0,
        recentVenues: []
    });

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const [venuesResponse, usersResponse] = await Promise.all([
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/venue/getall`),
                    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getall`)
                ]);

                const venues = venuesResponse.data;
                const users = usersResponse.data;

                setDashboardData({
                    isLoading: false,
                    venues: venues,
                    totalVenues: venues.length,
                    totalUsers: users.length,
                    recentVenues: venues.slice(-5).reverse() // Get last 5 venues
                });
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
                setDashboardData(prev => ({ ...prev, isLoading: false }));
            }
        };

        fetchDashboardData();
    }, []);

    const stats = [
        {
            title: "Total Venues",
            value: dashboardData.totalVenues,
            icon: <FaMapMarkerAlt className="text-orange-500" />
        },
        {
            title: "Active Users",
            value: dashboardData.totalUsers,
            icon: <FaUsers className="text-purple-500" />
        },
        {
            title: "Categories",
            value: [...new Set(dashboardData.venues.map(venue => venue.category))].length,
            icon: <FaCalendarAlt className="text-blue-500" />
        },
        {
            title: "Total Capacity",
            value: dashboardData.venues.reduce((sum, venue) => sum + venue.capacity, 0),
            icon: <FaClock className="text-yellow-500" />
        }
    ];

    if (dashboardData.isLoading) {
        return <div className="p-6 text-center">Loading dashboard data...</div>;
    }

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg shadow p-6 flex items-center">
                        <div className="text-2xl mr-4">{stat.icon}</div>
                        <div className="flex-1">
                            <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                            <p className="text-gray-600">{stat.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Recent Venues */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-xl font-semibold text-gray-800 pb-3 border-b border-gray-200 mb-4">
                        Recent Venues
                    </h3>
                    <ul className="divide-y divide-gray-100">
                        {dashboardData.recentVenues.map(venue => (
                            <li key={venue._id} className="py-3">
                                <p className="font-medium text-gray-900">{venue.name}</p>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>{venue.category}</span>
                                    <span>Capacity: {venue.capacity}</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">{venue.location}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Venue Categories */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-xl font-semibold text-gray-800 pb-3 border-b border-gray-200 mb-4">
                        Venue Categories
                    </h3>
                    <ul className="divide-y divide-gray-100">
                        {[...new Set(dashboardData.venues.map(venue => venue.category))].map(category => {
                            const count = dashboardData.venues.filter(venue => venue.category === category).length;
                            return (
                                <li key={category} className="py-3">
                                    <p className="font-medium text-gray-900">{category}</p>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-500">Total Venues: {count}</span>
                                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            {((count / dashboardData.totalVenues) * 100).toFixed(1)}%
                                        </span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
  <Link 
    href="/admin/manage-user" 
    className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-600 group overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>
      Manage Users
    </span>
    <span className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  </Link>

  <Link 
    href="/admin/manage-venue" 
    className="relative px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:from-green-700 hover:to-green-600 group overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm4 0h2v2h-2V5z" clipRule="evenodd" />
      </svg>
      Manage Venues
    </span>
    <span className="absolute inset-0 bg-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  </Link>

  <Link 
    href="/admin/manage-feedback" 
    className="relative px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:from-purple-700 hover:to-purple-600 group overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
      </svg>
      View Feedback
    </span>
    <span className="absolute inset-0 bg-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  </Link>

  <Link 
    href="/admin/cu" 
    className="relative px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:from-red-700 hover:to-red-600 group overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
      </svg>
      Queries
    </span>
    <span className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  </Link>
</div>
        </div>
    );
};

export default Dashboard;