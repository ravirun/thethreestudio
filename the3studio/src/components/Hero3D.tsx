"use client";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { SoftShadows } from "@react-three/drei";
import * as THREE from "three";

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);

interface SphereProps {
  position?: [number, number, number];
  [key: string]: unknown;
}

function Sphere({ position = [0, 0, 0], ...props }: SphereProps) {
  const ref = useRef<THREE.Mesh>(null);
  const factor = useMemo(() => 0.5 + Math.random(), []);
  
  useFrame((state) => {
    if (ref.current) {
      const t = easeInOutCubic((1 + Math.sin(state.clock.getElapsedTime() * factor)) / 2);
      ref.current.position.y = position[1] + t * 4;
      ref.current.scale.y = 1 + t * 3;
    }
  });
  
  return (
    <mesh ref={ref} position={position} {...props} castShadow receiveShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshLambertMaterial color="white" />
    </mesh>
  );
}

interface SpheresProps {
  number?: number;
}

function Spheres({ number = 20 }: SpheresProps) {
  const ref = useRef<THREE.Group>(null);
  const positions = useMemo(() => 
    [...new Array(number)].map(() => [
      3 - Math.random() * 6, 
      Math.random() * 4, 
      3 - Math.random() * 6
    ]), 
    [number]
  );
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() / 2) * Math.PI;
    }
  });
  
  return (
    <group ref={ref}>
      {positions.map((pos, index) => (
        <Sphere key={index} position={pos as [number, number, number]} />
      ))}
    </group>
  );
}

export default function Hero3D() {
  const [currentColor, setCurrentColor] = useState(0);
  
  // Color changing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % 360);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const getGradientColors = () => {
    const hue1 = currentColor;
    const hue2 = (currentColor + 120) % 360;
    const hue3 = (currentColor + 240) % 360;
    
    return {
      from: `hsl(${hue1}, 70%, 60%)`,
      via: `hsl(${hue2}, 70%, 60%)`,
      to: `hsl(${hue3}, 70%, 60%)`
    };
  };

  const colors = getGradientColors();

  return (
    <div className="w-full h-[600px] relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-3000 ease-in-out"
          style={{
            background: `radial-gradient(circle at 20% 80%, ${colors.from} 0%, transparent 50%), 
                        radial-gradient(circle at 80% 20%, ${colors.via} 0%, transparent 50%), 
                        radial-gradient(circle at 40% 40%, ${colors.to} 0%, transparent 50%)`
          }}
        />
        <div 
          className="absolute inset-0 opacity-20 transition-all duration-3000 ease-in-out"
          style={{
            background: `linear-gradient(45deg, ${colors.from} 0%, ${colors.via} 50%, ${colors.to} 100%)`
          }}
        />
      </div>

      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-[100px] bg-white/5" />
      
      {/* 3D Canvas */}
      <div className="relative z-10">
        <Canvas shadows camera={{ position: [-5, 2, 10], fov: 60 }}>
          <SoftShadows 
            size={25}
            focus={0}
            samples={10}
          />
          <fog attach="fog" args={["white", 0, 40]} />
          <ambientLight intensity={0.5} />
          <directionalLight 
            castShadow 
            position={[2.5, 8, 5]} 
            intensity={1.5} 
            shadow-mapSize={1024}
          >
            <orthographicCamera 
              attach="shadow-camera" 
              args={[-10, 10, -10, 10, 0.1, 50]} 
            />
          </directionalLight>
          <pointLight position={[-10, 0, -20]} color="white" intensity={1} />
          <pointLight position={[0, -10, 0]} intensity={1} />
          <group position={[0, -3.5, 0]}>
            <mesh receiveShadow castShadow>
              <boxGeometry args={[4, 1, 1]} />
              <meshLambertMaterial />
            </mesh>
            <mesh 
              rotation={[-Math.PI / 2, 0, 0]} 
              position={[0, -0.5, 0]} 
              receiveShadow
            >
              <planeGeometry args={[100, 100]} />
              <shadowMaterial transparent opacity={0.4} />
            </mesh>
            <Spheres />
          </group>
        </Canvas>
      </div>
      
      {/* Glass content overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="relative">
          {/* Glass card background */}
          <div 
            className="absolute inset-0 rounded-3xl glass-effect bg-white/10 border border-white/20 shadow-2xl glass-card"
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
              boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.37)`
            }}
          />
          
          {/* Content */}
          <div className="relative p-12 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-lg">
              The 3 Studio
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
              AI-First Digital Tech Agency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/50 hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold rounded-2xl transition-all duration-300 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating glass orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full glass-effect bg-white/10 border border-white/20 float-animation"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
