import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

function CameraModel() {
  const { scene } = useGLTF('/models/VideoCamera.glb');
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      // Movimiento de flotar en Y
      ref.current.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.2 - 1;
    }
  });

  // Breakpoints para responsive
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  // Escala y posición más pequeñas y centradas
  const scale = isMobile ? 1.2 : isTablet ? 1.5 : 0.5;
  const position = [0, -1, 0];
  const rotation = [-0.2, Math.PI * 0.8, 0];


  return (
    <primitive
      ref={ref}
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

export default function VideoCamera3D() {
  return (
    <Canvas
      camera={{
        position: [0, 1.5, 8],
        fov: 35,
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[2, 2, 2]} intensity={1.1} />
      <directionalLight position={[-2, 4, 5]} intensity={0.7} />
      <Suspense fallback={null}>
        <CameraModel />
      </Suspense>
      <OrbitControls enabled={false} />
    </Canvas>
  );
}