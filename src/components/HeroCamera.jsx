import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();

  useFrame(({ mouse }) => {
    if (!groupRef.current) return;

    // Only horizontal rotation
    groupRef.current.rotation.y = mouse.x * 0.2;
  });

  return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;