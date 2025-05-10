'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Browse = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/venue/getall`)
      .then((response) => {
        setEvents(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <title>Browse Events | EventMaster</title>
      
      {/* Hero Section with Background Image */}
      <section className="relative py-32 overflow-hidden bg-gray-900">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-[url('/images/bg-4.jpg')] bg-cover bg-center opacity-70"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/bg-4.jpg')"
          }}
        ></div>
        
        <div className="container relative mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-white animate-fade-in-down">
            Discover <span className="text-teal-300">Unforgettable</span> Events
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up">
            Immerse yourself in our curated collection of extraordinary experiences
          </p>
          <div className="mt-10">
            
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section id="events" className="container mx-auto px-6 py-16">
        <div className="mb-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">Featured Events</h3>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div 
              key={event._id}
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
            >
              <Link href={`/view-event/${event._id}`}>
                {/* Event Image */}
                <div className="relative h-60 overflow-hidden">
                  {event.imgurl[0] ? (
                    <img
                      src={event.imgurl[0]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      alt={event.name}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-white font-medium">View Details →</span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors">
                      {event.name}
                    </h3>
                    <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">
                      {event.category || 'Event'}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                  
                  {/* Event Meta */}
                  <div className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="mr-4">{event.date || 'TBD'}</span>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location || 'Various Locations'}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {events.length === 0 && !isLoading && (
          <div className="text-center py-20">
            <div className="mx-auto w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium text-gray-700 mb-2">No events available</h3>
            <p className="text-gray-500 max-w-md mx-auto">Check back soon for upcoming events in your area</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Browse;