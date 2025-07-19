import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Ring, Torus } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedAvatar: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
    
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
    
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = -state.clock.elapsedTime * 0.7;
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central sphere */}
      <Sphere ref={sphereRef} args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#64ffda" 
          transparent 
          opacity={0.3}
          emissive="#64ffda"
          emissiveIntensity={0.2}
        />
      </Sphere>
      
      {/* Rotating ring */}
      <Ring ref={ringRef} args={[1.5, 1.7, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#3b82f6" 
          transparent 
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </Ring>
      
      {/* Orbiting torus */}
      <Torus ref={torusRef} args={[2, 0.1, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#8b5cf6" 
          transparent 
          opacity={0.4}
        />
      </Torus>
      
      {/* Ambient light */}
      <ambientLight intensity={0.6} />
      
      {/* Point light */}
      <pointLight position={[10, 10, 10]} intensity={1} color="#64ffda" />
    </group>
  );
};

export default AnimatedAvatar;