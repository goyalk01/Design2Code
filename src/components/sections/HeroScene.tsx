'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

// Pre-calculate positions to keep the component pure
const particleCount = 1500;
const initialPositions = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount; i++) {
  const r = 10 * Math.cbrt(Math.random());
  const theta = Math.random() * 2 * Math.PI;
  const phi = Math.acos(2 * Math.random() - 1);
  
  initialPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
  initialPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
  initialPositions[i * 3 + 2] = r * Math.cos(phi);
}

function ParticleSwarm() {
  const ref = useRef<THREE.Points>(null);
  const { resolvedTheme } = useTheme();

  const positions = initialPositions;

  // Animation
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
    }
  });

  const color = resolvedTheme === 'dark' ? '#d4af37' : '#050505';
  const size = resolvedTheme === 'dark' ? 0.04 : 0.06;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 8] }} dpr={[1, 2]}>
        <ParticleSwarm />
      </Canvas>
    </div>
  );
}
