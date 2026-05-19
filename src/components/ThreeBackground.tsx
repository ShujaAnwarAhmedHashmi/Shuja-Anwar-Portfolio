import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as THREE from 'three';

function StarField(props: any) {
  const ref = useRef<any>(null);
  
  // Generate points using Float32Array for better performance
  const sphere = useMemo(() => {
    const pts = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const radius = 1.2;
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      
      pts[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pts[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pts[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pts;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#22d3ee"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#030303]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
    </div>
  );
}
