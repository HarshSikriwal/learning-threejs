"use client";
import * as THREE from "three";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const canvasValue = useRef<HTMLCanvasElement>(null);
  const [scene, setScene] = useState<THREE.Scene | null>(null);
  useEffect(() => {
    const newScene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry(3, 64, 64);
    console.log(geometry);
    const material = new THREE.MeshStandardMaterial({
      color: "#00ff83",
    });
    const mesh = new THREE.Mesh(geometry, material);
    newScene.add(mesh);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 10, 10);
    newScene.add(light);

    const camera = new THREE.PerspectiveCamera(45, 800 / 600);
    camera.position.z = 40;
    newScene.add(camera);

    let canvas = canvasValue.current;
    if (!canvas) return;

    setScene(newScene);
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(800, 600);
    renderer.render(newScene, camera);
  }, []);
  return (
    <main className="h-screen w-screen">
      <canvas ref={canvasValue} />
    </main>
  );
}
