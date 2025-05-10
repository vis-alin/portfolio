import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";

function InfinityModel() {
  const { scene } = useGLTF("/models/infinity.glb");
  return <primitive object={scene} scale={2.5} />;
}

export default function InfinityBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <Stars radius={80} depth={50} count={5000} factor={4} fade />
        <InfinityModel />
        <OrbitControls autoRotate enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
