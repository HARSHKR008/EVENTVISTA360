'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import PanoramaViewer from '@/components/PanoramaViewer';

const Browse = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch event data from the backend API
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/venue/getall`)
      .then((response) => {
        console.log(response.data);
        
        setEvents(response.data); // Set the fetched data to state
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <div>
      <>
        <title>Browse Events | EventMaster</title>
        {/* Hero Section */}
        <section className="bg-indigo-600 text-white text-center py-20">
          <h2 className="text-4xl font-bold mb-4">Browse Our Events</h2>
          <p className="text-lg">
            Experience moments from our different types of events! gello
          </p>
        </section>
        {/* Events Gallery */}
        <section className="container mx-auto px-6 py-16 space-y-20">
          {events.map((event, index) => (
            <Link href={`/view-event/${event._id}`} key={event._id}>
              <h3 className="text-3xl font-bold text-indigo-600 mb-6">
                {event.name}
              </h3>
              <p className="mb-4">{event.description}</p>
              <div className="grid gap-6 md:grid-cols-3">
                {event.imgurl.map((url, idx) => (
                  <img
                    key={idx}
                    src={url}
                    className="rounded-2xl shadow-md hover:scale-105 transition"
                    alt={event.name}
                  />
                ))}
                {event.videoUrl && (
                  <video
                    controls
                    className="rounded-2xl shadow-md hover:scale-105 transition"
                  >
                    <source src={event.videoUrl} type="video/mp4" />
                  </video>
                )}
              </div>
              
            </Link>
          ))}

        </section>
      </>
    </div>
  );
};

export default Browse;