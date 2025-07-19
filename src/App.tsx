import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Research from './pages/Research';
import Experience from './pages/Experience';
import Loading from './components/Loading';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="App min-h-screen">
      {/* Global 3D Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ParticleBackground />
          </Suspense>
        </Canvas>
      </div>

      <Router>
        <Navigation />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;