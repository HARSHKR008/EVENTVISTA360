'use client';
import React, { useState, useRef, useEffect } from 'react';

const ThreeDViewer = ({ images, frameCount = 19 }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [startX, setStartX] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setDirection(0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const delta = e.pageX - startX;
    const frameWidth = containerRef.current.offsetWidth;
    const sensitivity = 2; // Adjust this value to control rotation speed
    
    // Determine direction of movement
    const currentDirection = Math.sign(delta);
    
    if (currentDirection !== direction && direction !== 0) {
      setStartX(e.pageX);
    } else {
      let frameChange = Math.floor(delta / (frameWidth / frameCount / sensitivity));
      let newFrame = currentFrame - frameChange; // Reverse direction for more intuitive control
      
      // Ensure frame stays within bounds
      if (newFrame >= frameCount) {
        newFrame = newFrame % frameCount;
      }
      while (newFrame < 0) {
        newFrame += frameCount;
      }
      
      setCurrentFrame(newFrame);
      setDirection(currentDirection);
    }
  };

  const handlePrevFrame = () => {
    setCurrentFrame((prev) => (prev === 0 ? frameCount - 1 : prev - 1));
  };

  const handleNextFrame = () => {
    setCurrentFrame((prev) => (prev === frameCount - 1 ? 0 : prev + 1));
  };

  const handleAutoRotate = () => {
    const timer = setInterval(() => {
      handleNextFrame();
    }, 100);

    setTimeout(() => {
      clearInterval(timer);
    }, 3000); // Stop after 3 seconds
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging, startX, currentFrame, direction]);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        className="relative w-full max-w-3xl aspect-square bg-gray-100 rounded-lg shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-hidden"
      >
        {images && images[currentFrame] && (
          <img 
            src={`/3dimages/${images[currentFrame]}`} 
            alt={`Product view ${currentFrame}`}
            className="max-w-full max-h-full object-contain"
            draggable={false}
          />
        )}
        
        {/* Navigation Buttons */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
          <button
            onClick={handlePrevFrame}
            className="bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
            aria-label="Previous frame"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNextFrame}
            className="bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
            aria-label="Next frame"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="w-full max-w-3xl flex justify-between items-center text-gray-600 bg-gray-50 p-3 rounded-lg">
        <span className="text-sm">
          Drag to rotate
        </span>
        <div className="flex items-center gap-4">
          <button
            onClick={handleAutoRotate}
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 rounded transition-colors"
          >
            Auto-Rotate
          </button>
          <span className="text-sm">
            Frame: {currentFrame + 1} / {frameCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThreeDViewer;