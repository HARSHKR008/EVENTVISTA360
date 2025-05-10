'use client';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Dashboard = () => {

    // Sample data
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
                <Link href="/admin/manage-user" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Manage Users
                </Link>
                <Link href="/admin/manage-venue" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                    Manage Venues
                </Link>
                <Link href="/admin/manage-feedback" className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-700 transition-colors">
                    <button className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-700 transition-colors">
                        View Reports
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;