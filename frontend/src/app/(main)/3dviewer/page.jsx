import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ThreeDViewer from '@/components/ThreeDViewer';

const Viewer3D = () => {

  const images = [
    '/1.webp', '/2.webp', '/3.webp', '/4.webp', '/5.webp',
    '/6.webp', '/7.webp', '/8.webp', '/9.webp', '/10.webp',
    '/11.webp', '/12.webp', '/13.webp', '/14.webp', '/15.webp',
    '/16.webp', '/17.webp', '/18.webp', '/19.webp'
  ]

  return (
    <div>
        <ThreeDViewer images={images} />
    </div>
  );
};

export default Viewer3D;