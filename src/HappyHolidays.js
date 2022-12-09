import { useRef } from "react";
import { extend, useThree } from "@react-three/fiber"; // extends three-fiber's catalogue of JSX elements
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"; // loads fonts from a JSON file
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import Inter from "./assets/Inter.json";

extend({ TextGeometry });

export default function HappyHolidays({
  headerText,
  headerColor,
  headerPositionY,
  headerDepth,
  headerScale,
}) {
  const font = new FontLoader().parse(Inter);
  const { viewport } = useThree();
  const mesh = useRef();
  let textWidth;

  if (mesh.current) {
    if (mesh.current.geometry.boundingBox) {
      textWidth = mesh.current.geometry.boundingBox.max.x;
    }
  }

  return (
    <mesh position={[-textWidth / 2, headerPositionY, 0]} ref={mesh}>
      <textGeometry
        args={[
          headerText,
          {
            font,
            size:
              headerScale == 0
                ? viewport.width > 3.5
                  ? 0.4
                  : viewport.width / 12
                : headerScale,
            height: headerDepth,
            bevelEnabled: true,
            bevelThickness: 0.1,
            bevelSize: 0.01,
            bevelOffset: 0.001,
            bevelSegments: 3,
          },
        ]}
      />
      <meshPhysicalMaterial attach="material" color={headerColor} />
    </mesh>
  );
}
