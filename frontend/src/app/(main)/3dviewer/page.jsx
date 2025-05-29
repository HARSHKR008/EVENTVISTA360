import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ThreeDViewer from '@/components/ThreeDViewer';

const Viewer3D = () => {

  const images = [
    // '/1.webp', '/2.webp', '/3.webp', '/4.webp', '/5.webp',
    // '/6.webp', '/7.webp', '/8.webp', '/9.webp', '/10.webp',
    // '/11.webp', '/12.webp', '/13.webp', '/14.webp', '/15.webp',
    // '/16.webp', '/17.webp', '/18.webp', '/19.webp', '/31.webp',
    // '/32.webp', '/33.webp', '/34.webp', '/35.webp', '/36.webp',
    // '/37.webp', '/38.webp', '/39.webp', '/40.webp'
    '/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg',
    '/6.jpg', '/7.jpg', '/8.jpg', '/9.jpg', '/10.jpg',
    '/11.jpg', '/12.jpg', '/13.jpg', '/14.jpg', '/15.jpg',
    '/16.jpg', '/17.jpg', '/18.jpg', '/19.jpg', '/20.jpg',
    '/21.jpg', '/22.jpg', '/23.jpg', '/24.jpg', '/25.jpg',
    '/26.jpg', '/27.jpg', '/28.jpg', '/29.jpg', '/30.jpg',
    '/31.jpg', '/32.jpg', '/33.jpg', '/34.jpg', '/35.jpg',
    '/36.jpg', '/37.jpg', '/38.jpg', '/39.jpg', '/40.jpg',
    '41.jpg', '/42.jpg', '/43.jpg', '/44.jpg', '/45.jpg',
    '/46.jpg', '/47.jpg', '/48.jpg', '/49.jpg', '/50.jpg',
    '51.jpg', '/52.jpg', '/53.jpg', '/54.jpg', '/55.jpg',
    '/56.jpg', '/57.jpg', '/58.jpg', '/59.jpg', '/60.jpg',
    '61.jpg', '/62.jpg', '/63.jpg', '/64.jpg', '/65.jpg',
    '/66.jpg', '/67.jpg', '/68.jpg', '/69.jpg', '/70.jpg',
    '71.jpg', '/72.jpg',
  ]

  return (
    <div>
        <ThreeDViewer images={images} frameCount={72} />
    </div>
  );
};

export default Viewer3D;