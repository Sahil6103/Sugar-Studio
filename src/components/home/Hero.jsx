import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Model = () => {
  const { scene } = useGLTF("/models/sofa.glb");
  const [scale, setScale] = useState(2); // Default scale
  const [position, setPosition] = useState([0, -1, 0]); // Default position

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScale(0.9); // Mobile size
        setPosition([0, -1.5, 0]); // Adjust position for small screens
      } else if (width < 1024) {
        setScale(1); // Tablet size
        setPosition([0, -1.2, 0]);
      } else {
        setScale(1.5); // Desktop size
        setPosition([0, -1, 0]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <primitive object={scene} scale={scale} position={position} />;
};

const Hero = () => {
  const text = "A Symphony of Craft & Innovation.";

  const hero = useRef();
  const textRef = useRef([]);
  const heroModel = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.set(textRef.current, { y: 20, opacity: 0 })
        .set(heroModel.current, { y: -20, opacity: 0 })
        .to(textRef.current, { y: 0, opacity: 1, duration: 0.2, stagger: 0.1 })
        .to(heroModel.current, { opacity: 1, duration: 0.3 }, "-=0.5");
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={hero}
      className="relative min-h-[65vh] md:min-h-screen flex flex-col justify-center items-center bg-light-gray md:bg-transparent  text-[#000] overflow-hidden">
      {/* 3D Model */}
      <div
        ref={heroModel}
        className="absolute inset-0 z-10 w-full md:h-full pointer-events-none">
        <Canvas
          camera={{ position: [0, 1.5, 5], fov: 50 }}
          className="!w-full !h-full">
          <ambientLight intensity={1.2} />
          <directionalLight position={[2, 2, 2]} intensity={2} />
          <Model />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* Heading Behind 3D */}
      <h1 className="absolute top-20 md:top-5 2xl:top-14 font-heading tracking-wide px-3 text-3xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold text-center z-0 uppercase flex flex-wrap justify-center leading-tight overflow-hidden">
        {text.split(" ").map((word, i) => (
          <span key={i} className="mr-3 md:mr-5 flex">
            {word.split("").map((char, j) => (
              <span
                key={j}
                ref={(el) => {
                  if (el) textRef.current.push(el);
                }}
                className="inline-block">
                {char}
              </span>
            ))}
          </span>
        ))}
      </h1>
    </section>
  );
};

export default Hero;
