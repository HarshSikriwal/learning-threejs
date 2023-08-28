"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Box,
  OrbitControls,
  PerspectiveCamera,
  Plane,
} from "@react-three/drei";

export default function App() {
  return (
    <div className="h-screen w-screen bg-[#9b80c3]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0.6, 8]} fov={45} />
        {/* <OrbitControls /> */}
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {/* Floor */}
        <Plane
          args={[10, 6]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.5, 0]}
        >
          <meshStandardMaterial color="#d4cbc8" />
        </Plane>
        {/* facing wall */}
        <Plane args={[10, 8]} position={[0, 3, -3]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#9b80c3" />
        </Plane>
        {/* side wall tiles*/}
        <Box
          args={[6, 0.5, 0.1]}
          position={[-5, -1.25, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <meshStandardMaterial color="white" />
        </Box>
        <Box
          args={[6, 0.5, 0.1]}
          position={[5.01, -1.25, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <meshStandardMaterial color="white" />
        </Box>
        {/* facing wall tiles */}
        <Box args={[10, 0.5, 0.1]} position={[0, -1.25, -3]}>
          <meshStandardMaterial color="white" />
        </Box>
      </Canvas>
    </div>
  );
}
