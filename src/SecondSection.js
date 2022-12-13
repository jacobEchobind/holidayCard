import { useRef } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { Flex, Box } from "@react-three/flex";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { Scene } from "./SVG";
import { folder, useControls } from "leva";
import { fontOptions } from "./assets/fonts";

export const SecondSection = ({ position, headingText, bodyText }) => {
  const { viewport } = useThree();
  const breakpoint = 4;
  const paperTexture = useLoader(
    THREE.TextureLoader,
    "./white-paper-texture.jpg"
  );

  const {
    fontFirstLine,
    scaleFirstLine,
    colorFirstLine,
    fontSecondLine,
    scaleSecondLine,
    colorSecondLine,
    fontBody,
    scaleBody,
    colorBody,
    showSnowman,
    colorSnowman,
    positionSnowman,
  } = useControls(
    "Second Section",
    {
      firstLine: folder({
        fontFirstLine: { options: [...fontOptions] },
        scaleFirstLine: { value: 0, min: 0, max: 10 },
        colorFirstLine: "white",
      }),
      secondLine: folder({
        fontSecondLine: { options: [...fontOptions] },
        scaleSecondLine: { value: 0, min: 0, max: 10 },
        colorSecondLine: "#006C87",
      }),
      body: folder({
        fontBody: { options: ["proxima-nova", ...fontOptions] },
        scaleBody: { value: 0, min: 0, max: 10 },
        colorBody: "white",
      }),
      snowman: folder({
        showSnowman: false,
        colorSnowman: "#02313D",
        positionSnowman: {
          value: { x: 0.8, y: 0, z: 0 },
          step: 0.1,
        },
      }),
    },
    { collapsed: true }
  );

  return (
    <>
      {/**
      <mesh
        scale={[viewport.width, viewport.height - 1, 1]}
        position={position}
      >
        <planeGeometry />
        <meshBasicMaterial attach="material" map={paperTexture} />
      </mesh>
       */}
      <group
        // position={viewport.width > breakpoint ? [0, .5, 0] : [0, -.7, 0]}
        position={[0, 1.3, 0]}
      >
        <Flex
          dir="column"
          position={position}
          size={[viewport.width, viewport.height, 0]} // xyz size to constrain content to
          alignItems="center"
          justifyContent="center"
          centerAnchor={true}
        >
          <Box
            dir="row"
            justifyContent="center"
            alignItems="center"
            centerAnchor={false}
            flexWrap="wrap"
            width="100%"
            height="100%"
          >
            <Box
              centerAnchor={true}
              marginLeft={viewport.width > breakpoint ? 0.4 : 0}
            >
              <Text
                color={colorFirstLine}
                scale={scaleFirstLine == 0 ? 4 : scaleFirstLine}
                maxWidth={viewport.width > breakpoint ? 3 : 1.75}
                font={`./fonts/${fontFirstLine}.otf`}
              >
                {headingText}
              </Text>
              {/**
              <Text
                anchorY="top"
                position={[0, -0.2, 0]}
                color={colorSecondLine}
                scale={scaleSecondLine == 0 ? 4 : scaleSecondLine}
                maxWidth={viewport.width > breakpoint ? 3 : 1.75}
                font={`./fonts/${fontSecondLine}.otf`}
              >
                season approaches...
              </Text>
              */}
              <Text
                anchorY="top"
                color={colorBody}
                position={[0, -0.8, 0]}
                textAlign="left"
                maxWidth={viewport.width > breakpoint ? 3 : 1.75}
                scale={scaleBody == 0 ? 1.3 : scaleBody}
                font={`./fonts/${fontBody}.otf`}
              >
                {bodyText}
              </Text>
            </Box>
          </Box>
          {showSnowman ? (
            <mesh position={[0, 0.4, 0]}>
              <Box centerAnchor={true}>
                <Scene color={colorSnowman} position={positionSnowman} />
              </Box>
            </mesh>
          ) : null}
        </Flex>
      </group>
    </>
  );
};
