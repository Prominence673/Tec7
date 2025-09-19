import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function ComputerModel() {
  const { scene } = useGLTF('/models/SimpleComputer.glb');
  return <primitive object={scene} scale={6.5} />;
}

export default function Computer3D() {
  return (
    <Canvas style={{ height: 300 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <ComputerModel />
      </Suspense>
      <OrbitControls enablePan={false} />
    </Canvas>
  );
}