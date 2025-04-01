import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Model = () => {
  const modelRef = useRef();
  const { scene } = useGLTF("src/assets/imgs/sofa_3230.glb"); // Replace with your model path

  // Rotate the model every frame (smooth rotation)
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.0; // Adjust for speed
    }
  });

  // Scroll-triggered rotation using GSAP
  useEffect(() => {
    gsap.to(modelRef.current.rotation, {
      y: Math.PI * 2, // Full rotation
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth scrolling effect
      },
    });
  }, []);

  return <primitive ref={modelRef} object={scene} scale={1} />;
};

const HeroModel = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Model />
    </Canvas>
  );
};

export default HeroModel;
