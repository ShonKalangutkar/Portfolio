import { useGSAP } from "@gsap/react";
import { Center } from "@react-three/drei";
import gsap from "gsap";
import { useCallback, useRef } from "react";

export const Rings = ({ position }) => {
  const refList = useRef([]);

  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  useGSAP(() => {
    if (refList.current.length === 0) return;

    refList.current.forEach((r) => {
      r.position.set(position[0], position[1], position[2]);
    });

    gsap.to(
      refList.current.map((r) => r.rotation),
      {
        y: `+=${Math.PI * 2}`,
        x: `-=${Math.PI * 2}`,
        duration: 2.5,
        repeat: -1,
        repeatDelay: 0.5,
        stagger: {
          each: 0.15,
        },
      }
    );
  }, [position]);

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1, 16, 100]} />
            <meshStandardMaterial color="#00ffff" />
          </mesh>
        ))}
      </group>
    </Center>
  );
};