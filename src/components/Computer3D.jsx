import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

function ComputerModel() {
  const { scene } = useGLTF('/models/SimpleComputer.glb');

  // 🔹 Breakpoints para responsive
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  // 🔹 Ajustamos escala y posición según el dispositivo
  const scale = isMobile ? 4.5 : isTablet ? 5.5 : 6;
  const position = isMobile
    ? [-1, -1, 0]   // móvil: un poco más bajo y menos a la izquierda
    : isTablet
    ? [-1.2, -1.1, 0] // tablet
    : [-1.5, -1.2, 0]; // desktop

  return (
    <primitive
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
