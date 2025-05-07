import Link from 'next/link';
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Dashboard = () => {

    // Sample data
    const stats = [
        { title: "Total Events", value: 42, icon: <FaCalendarAlt className="text-blue-500" />, trend: "↑ 12%", trendColor: "text-green-500" },
        { title: "Active Users", value: 856, icon: <FaUsers className="text-purple-500" />, trend: "↑ 5%", trendColor: "text-green-500" },
        { title: "Venues", value: 18, icon: <FaMapMarkerAlt className="text-orange-500" />, trend: "→", trendColor: "text-gray-500" },
        { title: "Pending Approvals", value: 7, icon: <FaClock className="text-yellow-500" />, trend: "↓ 2", trendColor: "text-red-500" }
    ];

    const recentEvents = [
        { id: 1, name: "Tech Conference 2023", date: "2023-11-15", venue: "Convention Center" },
        { id: 2, name: "Music Festival", date: "2023-12-05", venue: "Riverside Park" },
        { id: 3, name: "Food Expo", date: "2023-11-22", venue: "Downtown Hall" }
    ];

    const recentUsers = [
        { id: 1, name: "Alex Johnson", email: "alex@example.com", role: "Organizer", roleColor: "bg-green-100 text-green-800" },
        { id: 2, name: "Sam Wilson", email: "sam@example.com", role: "Attendee", roleColor: "bg-blue-100 text-blue-800" },
        { id: 3, name: "Taylor Smith", email: "taylor@example.com", role: "Admin", roleColor: "bg-red-100 text-red-800" }
    ];

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
                        <div className={`font-medium ${stat.trendColor}`}>{stat.trend}</div>
                    </div>
                ))}
            </div>

            {/* Recent Activity Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Recent Events */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-xl font-semibold text-gray-800 pb-3 border-b border-gray-200 mb-4">Upcoming Events</h3>
                    <ul className="divide-y divide-gray-100">
                        {recentEvents.map(event => (
                            <li key={event.id} className="py-3">
                                <p className="font-medium text-gray-900">{event.name}</p>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>{event.date}</span>
                                    <span>{event.venue}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Recent Users */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-xl font-semibold text-gray-800 pb-3 border-b border-gray-200 mb-4">Recent Users</h3>
                    <ul className="divide-y divide-gray-100">
                        {recentUsers.map(user => (
                            <li key={user.id} className="py-3">
                                <p className="font-medium text-gray-900">{user.name}</p>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500">{user.email}</span>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.roleColor}`}>
                                        {user.role}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">

                <Link href="/admin/manage-user" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        Manage Users
                    </button>
                </Link>
                <Link href="/admin/manage-venue" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                        Manage Venues
                    </button>
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