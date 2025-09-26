import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

function ComputerModel() {
  const { scene } = useGLTF('/models/SimpleComputer.glb');
  const ref = useRef();

  // 🔹 Breakpoints para responsive
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  // 🔹 Ajustamos escala y posición según el dispositivo
  const scale = isMobile ? 4.5 : isTablet ? 5.5 : 4;
  const baseY = isMobile ? -1 : isTablet ? -1.1 : -1.2;
  const position = isMobile
    ? [-1, baseY, 0]
    : isTablet
    ? [-1.2, baseY, 0]
    : [-1.5, baseY, 0];

  // Animación de "flotar"
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = baseY + Math.sin(clock.getElapsedTime() * 1.5) * 0.2;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={scale}
      position={position}
      rotation={[0.1, Math.PI, 0]}
    />
  );
}

export default function Computer3D() {
  return (
    <Canvas
      camera={{
        position: [0, 1.5, 8],
        fov: 35,
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <ComputerModel />
      </Suspense>
      <OrbitControls enabled={false} />
    </Canvas>
  );
}
