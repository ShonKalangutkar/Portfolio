import { Float, useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";

const DockerLogo = ({ scale = 1, ...props }) => {
  const { nodes, materials } = useGLTF("/models/docker_logo.glb");
  const dockerRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Continuous rotation animation
  useGSAP(() => {
    if (!dockerRef.current) return;

    gsap.to(dockerRef.current.rotation, {
      y: `+=${Math.PI * 2}`,
      duration: hovered ? 1.5 : 3,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, [hovered]);

  return (
    <Float floatIntensity={2} rotationIntensity={0.4}>
      <group
        ref={dockerRef}
        {...props}
        scale={scale * 0.01}  // 🔥 base scale fix
        dispose={null}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.white}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/docker_logo.glb");

export default DockerLogo;