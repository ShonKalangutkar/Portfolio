import { useGSAP } from "@gsap/react";
import { Float, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useRef, useState } from "react";

const Cube = (props) => {
  const { scene } = useGLTF("/models/cube.glb");

  const cubeRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    if (!cubeRef.current) return;

    gsap.to(cubeRef.current.rotation, {
      y: hovered ? "+=2" : `+=${Math.PI * 2}`,
      x: hovered ? "+=2" : `-=${Math.PI * 2}`,
      duration: 2.5,
      repeat: -1,
      repeatDelay: 0.5,
    });
  }, [hovered]);

  return (
    <Float floatIntensity={2}>
      <group
        rotation={[2.6, 0.8, -1.8]}
        scale={0.74}
        {...props}
      >
        <primitive
          ref={cubeRef}
          object={scene}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/cube.glb");

export default Cube;