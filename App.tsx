import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import Scene from './components/Scene';
import Loader from './components/Loader';
import UI from './components/UI';
import ProjectModal from './components/ProjectModal';
import ExperienceModal from './components/ExperienceModal';

const App: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Suspense fallback={<Loader />}>
          <ScrollControls pages={8.5} damping={0.1}>
            <Scene />
            <Scroll html>
              <UI />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
      <ProjectModal />
      <ExperienceModal />
    </div>
  );
};

export default App;