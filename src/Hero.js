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
    textHeader,
    colorHeader,
    yPosHeader,
    depthHeader,
    scaleHeader,
    textSub,
    fontSub,
    subSize,
    subColor,
    xSubPosition,
    ySubPosition,
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
        textHeader: '2022',
        colorHeader: "teal",
        yPosHeader: { value: 0, min: -Math.PI, max: Math.PI },
        depthHeader: { value: 0.9, min: 0, max: 2 },
        scaleHeader: { value: 0, min: 0, max: 2 },
      }),

      Subheader: folder({
        textSub: "was a big year!",
        fontSub: { options: [...fontOptions] },
        subSize: { value: 0, min: 0, max: 1 },
        subColor: { value: "white" },
        xSubPosition: { value: 0, min: -3, max: 3 },
        ySubPosition: { value: 0.3, min: -3, max: 3 },
        zSubPosition: { value: 0, min: -3, max: 3 },
      }),

      EBLogo: folder({
        EBScale: { value: 0, min: 0, max: 0.01 },
        EBXRotation: { value: 0, min: -Math.PI, max: Math.PI },
        EBYRotation: { value: 0, min: -Math.PI, max: Math.PI },
        EBXPosition: { value: 0, min: -3, max: 3 },
        EBYPosition: { value: 0.4, min: -3, max: 3 },
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

      {/* <Float
        speed={FloatSpeed} // Animation speed, defaults to 1
        rotationIntensity={FloatRotation} // XYZ rotation intensity, defaults to 1
        floatIntensity={FloatIntensity} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[FloatRangeX, FloatRangeY]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      > */}
        <Flex
          dir="column"
          size={[viewport.width, viewport.height, 0]} // xyz size to constrain content to
          alignItems="center"
          centerAnchor={true}
          justifyContent="center"
        >
           <Box mt={0.3} centerAnchor={true}>
            <primitive
              object={EBLogo.scene}
              scale={
                EBScale == 0
                  ? viewport.width < 2.75
                    ? viewport.width / 5000
                    : 0.0003
                  : EBScale
              }
              position={[EBXPosition, EBYPosition, EBZPosition]}
              rotation={[EBXRotation, EBYRotation, 0]}
            />
          </Box>


          {/*  H A P P Y   H O L I D A Y S  */}
          <Box 
            centerAnchor={true}
            width="100%"
          >
            <ThreeDText
              headerText={'2022'}
              // headerText={textHeader}
              headerColor={colorHeader} 
              headerPositionY={yPosHeader}
              headerDepth={depthHeader}
              headerScale={scaleHeader}
            />
          </Box>

          <Box marginTop={0.3} centerAnchor={true}>
            <Text
              font={`./fonts/${fontSub}.otf`}
              fontSize={
                subSize == 0
                  ? viewport.width < 3
                    ? viewport.width / 10
                    : 0.5
                  : subSize
              }
              position={[xSubPosition, ySubPosition, zSubPosition]}
              maxWidth={viewport.width}
              textAlign="center"
              color={subColor}
            >
              {textSub}
            </Text>
          </Box>
         
          <Box 
          // mt={0.3} 
          centerAnchor={true}>
            <Text
              anchorY="top"
              color="white"
              textAlign="center"
              maxWidth={viewport.width > 4 ? 2.3 : 1.75}
              scale={1.3}
              font={`./fonts/proxima-nova.otf`}
            >
              2022 rocked for us, and we think 2023 is gonna be even better. Here
              are some of the things we're thankful for this year.
            </Text>
          </Box>
        </Flex>
      {/* </Float> */}
    </>
  );
}
