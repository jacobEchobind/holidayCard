import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

export default function Snow({ z }) {
  const ref = useRef();
  // const [clicked, setClicked] = useState(false)
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);
  const { nodes, materials } = useGLTF("/meshes/snowflake.glb");

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2), // example value: 6 which is -3 to 3
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state) => {
    ref.current.rotation.set(
      (data.rX += 0.001),
      (data.rY += 0.004),
      (data.rZ += 0.0005)
    );
    ref.current.position.set(data.x * width, (data.y -= 0.01), z);
    if (data.y > height / 1.5) {
      data.y = -height / 1.5;
    }
  });

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      geometry={nodes.Snowflake_low_1.geometry}
      material={materials["Ice Imperfections"]}
    />
  );
}
