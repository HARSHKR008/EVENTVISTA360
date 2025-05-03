// components/PanoramaViewer.jsx
'use client';

import React, { useEffect, useRef, useState } from 'react';

const PanoramaViewer = ({ imageUrl }) => {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const sceneRef = useRef(null);
  
  // Add state for POV controls
  const [pov, setPov] = useState({
    yaw: 0,
    pitch: 0,
    fov: 50
  });

  useEffect(() => {
    const loadMarzipano = async () => {
      const Marzipano = (await import('marzipano')).default;

      viewerRef.current = new Marzipano.Viewer(containerRef.current);
      
      const source = Marzipano.ImageUrlSource.fromString(imageUrl);
      const geometry = new Marzipano.EquirectGeometry([{ width: 30000, height: 15000 }]);
      
      const limiter = Marzipano.RectilinearView.limit.traditional(
        4096,
        120 * Math.PI / 180
      );
      
      const view = new Marzipano.RectilinearView(
        {
          yaw: pov.yaw * (Math.PI / 180),
          pitch: pov.pitch * (Math.PI / 180),
          fov: pov.fov * (Math.PI / 180)
        },
        limiter
      );

      sceneRef.current = viewerRef.current.createScene({
        source,
        geometry,
        view
      });

      sceneRef.current.switchTo();

      // Add view change listener
      view.addEventListener('change', () => {
        const currentPov = view.parameters();
        setPov({
          yaw: Math.round(currentPov.yaw * (180 / Math.PI)),
          pitch: Math.round(currentPov.pitch * (180 / Math.PI)),
          fov: Math.round(currentPov.fov * (180 / Math.PI))
        });
      });
    };

    loadMarzipano();
  }, [imageUrl]);

  // Handle POV updates
  const handlePovChange = (e, type) => {
    const value = parseFloat(e.target.value);
    const newPov = { ...pov, [type]: value };
    setPov(newPov);

    if (sceneRef.current) {
      const view = sceneRef.current.view();
      view.setParameters({
        yaw: newPov.yaw * (Math.PI / 180),
        pitch: newPov.pitch * (Math.PI / 180),
        fov: newPov.fov * (Math.PI / 180)
      });
    }
  };

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="w-full h-[700px]"
        style={{ position: 'relative' }}
      />
      
      {/* POV Controls */}
      <div className="bg-white p-4 rounded-lg shadow space-y-3">
        <div className="flex items-center space-x-4">
          <label className="w-20 text-sm font-medium">Yaw:</label>
          <input
            type="range"
            min="-180"
            max="180"
            value={pov.yaw}
            onChange={(e) => handlePovChange(e, 'yaw')}
            className="flex-1"
          />
          <span className="w-12 text-right">{pov.yaw}°</span>
        </div>

        <div className="flex items-center space-x-4">
          <label className="w-20 text-sm font-medium">Pitch:</label>
          <input
            type="range"
            min="-90"
            max="90"
            value={pov.pitch}
            onChange={(e) => handlePovChange(e, 'pitch')}
            className="flex-1"
          />
          <span className="w-12 text-right">{pov.pitch}°</span>
        </div>

        <div className="flex items-center space-x-4">
          <label className="w-20 text-sm font-medium">FOV:</label>
          <input
            type="range"
            min="30"
            max="120"
            value={pov.fov}
            onChange={(e) => handlePovChange(e, 'fov')}
            className="flex-1"
          />
          <span className="w-12 text-right">{pov.fov}°</span>
        </div>
      </div>
    </div>
  );
};

export default PanoramaViewer;