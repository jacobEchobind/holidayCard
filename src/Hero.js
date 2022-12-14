// import { extend } from "@react-three/fiber"
import {
  Instance,
  Instances,
  Text,
  Float,
  Environment,
  useGLTF,
} from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { folder, useControls } from "leva";
import { Flex, Box } from "@react-three/flex";
import { data } from "./store";
import { Perf } from "r3f-perf";
import { FocalLength, FocusDistance, BokehScale } from "./Experience.js";
import ThreeDText from "./ThreeDText";
import { fontOptions } from "./assets/fonts";

export default function Hero() {
  const { viewport } = useThree();

  const { PerfVisible } = useControls({
    PerfVisible: false,
  });

  const {
    colorHeader,
    depthHeader,
    scaleHeader,
    textSub,
    fontSub,
    subSize,
    subColor,
    xSubPosition,
    zSubPosition,

    EBScale,
    EBXRotation,
    EBYRotation,
    EBXPosition,
    EBYPosition,
    EBZPosition,
  } = useControls(
    "Hero Section",
    {
      Header: folder({
        colorHeader: "teal",
        depthHeader: { value: 0.7, min: 0, max: 2 },
        scaleHeader: { value: 0, min: 0, max: 2 },
      }),

      Subheader: folder({
        textSub: "was a big year!",
        fontSub: { options: [...fontOptions] },
        subSize: { value: 0, min: 0, max: 1 },
        subColor: { value: "white" },
        xSubPosition: { value: 0, min: -3, max: 3 },
        zSubPosition: { value: 0, min: -3, max: 3 },
      }),

      EBLogo: folder({
        EBScale: { value: 0, min: 0, max: 0.01 },
        EBXRotation: { value: 0, min: -Math.PI, max: Math.PI },
        EBYRotation: { value: 0, min: -Math.PI, max: Math.PI },
        EBXPosition: { value: 0, min: -3, max: 3 },
        EBYPosition: { value: 0.7, min: -3, max: 3 },
        EBZPosition: { value: 0, min: -3, max: 3 },
      }),

      FloatAnimation: folder({
        FloatSpeed: { value: 1, min: 0, max: 20 },
        FloatRotation: { value: 1, min: 0, max: 2 },
        FloatIntensity: { value: 1, min: 0, max: 2 },
        FloatRangeX: { value: -0.25, min: -3, max: 3 },
        FloatRangeY: { value: 0.25, min: -3, max: 3 },
      }),
    },
    { collapsed: true }
  );

  const EBLogo = useGLTF("./meshes/EBLogo.glb");

  return (
    <>
      {PerfVisible ? <Perf position="top-left" /> : true}

      <Environment
        preset={"apartment"}
        frames={Infinity}
        resolution={128}
        blur={3}
      />

      <Flex
        dir="column"
        position={[0,0,0]}
        size={[viewport.width, viewport.height, 0]} // xyz size to constrain content to
        alignItems="center"
        justifyContent="center"
        centerAnchor={true}
      >
        <Box  centerAnchor={true}>
          <primitive
            object={EBLogo.scene}
            scale={
              EBScale == 0
                ? viewport.width < 2.75
                  ? viewport.width / 5000
                  : 0.0003
                : EBScale
            }
            position={[EBXPosition, 1.5, EBZPosition]}
            rotation={[EBXRotation, EBYRotation, 0]}
          />

          {/*  H A P P Y   H O L I D A Y S  */}
          <ThreeDText
            headerText={'2022'}
            headerColor={colorHeader} 
            headerPositionY={.2}
            headerDepth={depthHeader}
            headerScale={scaleHeader}
          />

          <Text
            font={`./fonts/${fontSub}.otf`}
            fontSize={
              subSize == 0
                ? viewport.width < 3
                  ? viewport.width / 10
                  : 0.5
                : subSize
            }
            position={[xSubPosition, -.3, zSubPosition]}
            maxWidth={viewport.width}
            textAlign="center"
            color={subColor}
          >
            {textSub}
          </Text>
        
          <Text
            position={[0, -1.1, 0]}
            color="white"
            textAlign="center"
            maxWidth={viewport.width > 4 ? 2.3 : 1.75}
            scale={1.3}
            font={`./fonts/proxima-nova.otf`}
          >
            2022 rocked for us and we think 2023 is gonna be even better. Here
            are some of the things we're thankful for this year.
          </Text>
        </Box>
      </Flex>
    </>
  );
}
