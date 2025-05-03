'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PanoramaViewer from '@/components/PanoramaViewer';
import Viewer3D from '../../3dviewer/page';

const EventDetails = () => {
  const { id } = useParams(); // Extract the event ID from the URL
  const [event, setEvent] = useState(null); // State to store event details
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors
  const [selected360Image, setSelected360Image] = useState(null);

  const images = [
    '/1.webp', '/2.webp', '/3.webp', '/4.webp', '/5.webp',
    '/6.webp', '/7.webp', '/8.webp', '/9.webp', '/10.webp',
    '/11.webp', '/12.webp', '/13.webp', '/14.webp', '/15.webp',
    '/16.webp', '/17.webp', '/18.webp', '/19.webp', '/31.webp',
    '/32.webp', '/33.webp', '/34.webp', '/35.webp', '/36.webp',
    '/37.webp', '/38.webp', '/39.webp', '/40.webp'
  ];

  useEffect(() => {
    // Fetch event details by ID
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/venue/getbyid/${id}`)
      .then((response) => {
        setEvent(response.data); // Set the fetched event data
        // Set the first 360 image as default if available
        if (response.data.images360 && response.data.images360.length > 0) {
          setSelected360Image(response.data.images360[0]);
        }
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        console.error('Error fetching event details:', err);
        setError('Failed to load event details.');
        setLoading(false); // Stop loading
      });
  }, [id]);

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>{error}</div>; // Show error message

  return (
    <div className="container mx-auto px-6 py-16">
      {event && (
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 transition hover:shadow-3xl w-full">
          <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 animate-fade-in">
            {event.name}
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {event.description}
          </p>
          <div className="flex flex-wrap gap-4 text-gray-600 mb-8 text-sm">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
              Location: {event.location}
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
              Capacity: {event.capacity}
            </span>
            <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">
              Category: {event.category}
            </span>
          </div>

          {/* Grid for regular images */}
          <div className="grid gap-8 md:grid-cols-3 mb-10">
            {event.imgurl.map((url, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-3xl shadow-lg transform hover:scale-105 transition duration-300"
              >
                <img
                  src={url}
                  alt={`${event.name} Image ${idx + 1}`}
                  className="object-cover w-full h-60"
                />
              </div>
            ))}
          </div>

          {/* 360° Images Section */}
          {event.images360 && event.images360.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">360° Views</h2>

              {/* Thumbnails for 360° images */}
              <div className="flex gap-4 mb-6 overflow-x-auto pb-4">
                {event.images360.map((url, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelected360Image(url)}
                    className={`cursor-pointer transition-all ${selected360Image === url
                        ? 'ring-4 ring-indigo-500 scale-105'
                        : 'hover:scale-105'
                      }`}
                  >
                    <img
                      src={url}
                      alt={`360° View ${idx + 1}`}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Panorama Viewer */}
              {selected360Image && (
                <div className="w-full h-[500px] rounded-xl overflow-hidden">
                  <PanoramaViewer imageUrl={selected360Image} />
                </div>
              )}

              <ThreeDViewer images={images} frameCount={29} />
              {/* <Viewer3D /> */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EventDetails;
