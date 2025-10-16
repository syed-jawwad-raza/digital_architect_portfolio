
import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader: React.FC = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-center">
        <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin border-[#FFA500]"></div>
        <p className="mt-4 text-lg font-poppins">{progress.toFixed(2)} % loaded</p>
      </div>
    </Html>
  );
};

export default Loader;
