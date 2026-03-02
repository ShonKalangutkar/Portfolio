import { Float, useGLTF } from "@react-three/drei";
import { useRef } from "react";

const PythonLogo = (props) => {
  const { nodes, materials } = useGLTF("/models/python.glb");
  const ref = useRef(null);

  return (
    <Float floatIntensity={1.5} rotationIntensity={0.5}>
      <group ref={ref} {...props} dispose={null}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Python_Python_0.geometry}
            material={materials.Python}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </Float>
  );
};

useGLTF.preload("/models/python.glb");

export default PythonLogo;
