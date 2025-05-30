'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Gallery360 = () => {
  const [activeMedia, setActiveMedia] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotationY, setRotationY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  
  // Sample media items with YouTube 360° videos and internet-hosted images
  const galleryItems = [
    {
      id: 1,
      type: 'photo',
      title: 'Wedding Venue 360°',
      thumbnail: '/images/WEDDINGSAMPLE.jpg',
      src: '/images/p1.jpg',
      frames: 36
    },
    {
      id: 2,
      type: 'photo',
      title: 'Engagement Hall 360°',
      thumbnail: '/images/ENGAGEMESAMPLE.jpg',
      src: '/images/p2.jpg',
      frames: 36
    },
    {
      id: 3,
      type: 'photo',
      title: 'Haldi Ceremony Space',
      thumbnail: '/images/HALDI SAMPLE.jpg',
      src: '/images/p3.jpg',
      frames: 36
    },
    {
      id: 4,
      type: 'photo',
      title: 'Get Together Venue',
      thumbnail: '/images/GETTOGETHERSAMPLE.jpg',
      src: 'hero.jpg',
      frames: 36
    },
    {
      id: 5,
      type: 'photo',
      title: 'Banquet Hall Panorama',
      thumbnail: '/images/pan1.jpg',
      src: '/3dimages/5.webp',
      frames: 36
    },
    {
      id: 6,
      type: 'photo',
      title: 'Garden View 360°',
      thumbnail: '/images/bg-9.jpg',
      src: '/3dimages/6.webp',
      frames: 36
    },
    {
      id: 7,
      type: 'youtube',
      title: '360° Wedding Experience',
      thumbnail: 'https://i.ytimg.com/vi/f2vpuTU7sio/hqdefault.jpg',
      videoId: 'f2vpuTU7sio',
      isMoving: true
    },
    {
      id: 8,
      type: 'photo',
      title: 'Reception Area 360°',
      thumbnail: '/images/bg-4.jpg',
      src: '/3dimages/7.webp',
      frames: 36
    }
  ];

  const viewerRef = useRef(null);
  const frameCount = activeMedia?.frames || 0;
  const currentFrame = Math.min(Math.floor((rotationY / 360) * frameCount), frameCount - 1);

  const handleThumbnailClick = (item) => {
    setActiveMedia(item);
    setRotationY(0);
    setIsPlaying(false);
  };

  const handleMouseDown = (e) => {
    if (activeMedia?.type !== 'photo') return;
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !activeMedia || activeMedia.type !== 'photo') return;
    
    const currentX = e.clientX || e.touches[0].clientX;
    const deltaX = currentX - startX;
    const newRotation = (rotationY + deltaX * 0.5) % 360;
    setRotationY(newRotation < 0 ? 360 + newRotation : newRotation);
    setStartX(currentX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      viewerRef.current.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // YouTube player parameters for 360° videos
  const getYouTubeUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}&controls=0&enablejsapi=1&rel=0&fs=0&modestbranding=1&iv_load_policy=3&vq=hd1080`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">Event 360° Gallery</h1>
        <p className="text-xl text-gray-300 mb-12 text-center">
          Explore our events in immersive 360° photos and videos
        </p>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => handleThumbnailClick(item)}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white bg-opacity-80 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {item.type === 'photo' ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                    )}
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <div className="flex items-center mt-1">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500 text-white">
                    {item.type === 'photo' ? '360° Photo' : '360° Video'}
                  </span>
                  {item.isMoving && (
                    <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-500 text-white">
                      Moving
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 360° Viewer */}
        {activeMedia && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-center">{activeMedia.title}</h2>
            
            <div
              ref={viewerRef}
              className={`relative mx-auto bg-black rounded-xl overflow-hidden ${
                isFullscreen 
                  ? 'fixed inset-0 z-50 flex items-center justify-center' 
                  : 'max-w-6xl h-[600px]'
              }`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchMove={handleMouseMove}
              onTouchEnd={handleMouseUp}
            >
              {activeMedia.type === 'photo' ? (
                <img
                  src={activeMedia.src}
                  alt={activeMedia.title}
                  className="w-full h-full object-contain"
                  style={{
                    transform: `rotateY(${rotationY}deg)`,
                    transition: isDragging ? 'none' : 'transform 0.3s ease',
                    maxHeight: '100vh',
                    objectFit: 'contain',
                    imageRendering: 'high-quality'
                  }}
                  loading="eager"
                  fetchPriority="high"
                />
              ) : activeMedia.type === 'youtube' ? (
                <div className="relative w-full h-full">
                  <iframe
                    src={getYouTubeUrl(activeMedia.videoId)}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  {/* Overlay controls for YouTube */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    {!isPlaying && (
                      <button
                        onClick={togglePlayPause}
                        className="pointer-events-auto bg-white bg-opacity-80 rounded-full p-4 hover:bg-opacity-100 transition-all"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-gray-900"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <video
                    src={activeMedia.src}
                    className="w-full h-full object-cover"
                    controls={false}
                    loop
                    playsInline
                  />
                  {!isPlaying && (
                    <button
                      onClick={togglePlayPause}
                      className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30"
                    >
                      <div className="bg-white bg-opacity-80 rounded-full p-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-gray-900"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                        </svg>
                      </div>
                    </button>
                  )}
                </div>
              )}

              {/* Controls */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                <button
                  onClick={toggleFullscreen}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 backdrop-blur-sm transition-all"
                  aria-label="Toggle fullscreen"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isFullscreen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    )}
                  </svg>
                </button>

                {(activeMedia.type === 'video' || activeMedia.type === 'youtube') && (
                  <button
                    onClick={togglePlayPause}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 backdrop-blur-sm transition-all"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {isPlaying ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                      )}
                    </svg>
                  </button>
                )}

                <button
                  onClick={() => setActiveMedia(null)}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 backdrop-blur-sm transition-all"
                  aria-label="Close viewer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

            </div>

            {/* Instructions */}
            {/* <div className="mt-4 text-center text-gray-300">
              {activeMedia.type === 'photo' ? (
                <p>Click and drag horizontally to rotate the 360° view</p>
              ) : (
                <p>{isPlaying ? 'Drag to rotate the 360° view' : 'Click play to start the 360° video'}</p>
              )}
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery360;