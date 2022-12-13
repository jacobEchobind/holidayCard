import { useThree } from "@react-three/fiber";
import { Flex, Box } from "@react-three/flex";
import { Text } from "@react-three/drei";
import { folder, useControls } from "leva";
import { fontOptions } from "./assets/fonts";
import ThreeDText from "./ThreeDText";

export const CopySection = ({ position, preHeadingText, headingText, threeDText, threeDTextLine2, bodyText }) => {
  const { viewport } = useThree();
  const breakpoint = 4;

  const {
    fontFirstLine,
    scaleFirstLine,
    colorFirstLine,
    fontBody,
    scaleBody,
    colorBody,
  } = useControls(
    "Second Section",
    {
      firstLine: folder({
        fontFirstLine: { options: [...fontOptions] },
        scaleFirstLine: { value: 0, min: 0, max: 10 },
        colorFirstLine: "white",
      }),
      body: folder({
        fontBody: { options: ["proxima-nova", ...fontOptions] },
        scaleBody: { value: 0, min: 0, max: 10 },
        colorBody: "white",
      }),
    },
    { collapsed: true }
  );

  return (
    <group position={[0, 1.3, 0]}>
      <Flex
        dir="column"
        position={position}
        size={[viewport.width, viewport.height, 0]} // xyz size to constrain content to
        alignItems="center"
        justifyContent="center"
        centerAnchor={true}
      >
        <Box
          centerAnchor={true}
          marginLeft={viewport.width > breakpoint ? 0.4 : 0}
        >
          {preHeadingText ? (
            <Text
              anchorY="top"
              position={[0, .5, 0]}
              color={colorFirstLine}
              scale={scaleFirstLine == 0 ? 2 : scaleFirstLine}
              maxWidth={viewport.width > breakpoint ? 3 : 1.75}
              font={`./fonts/${fontFirstLine}.otf`}
            >
              {preHeadingText}
            </Text>
          ) : null}

          <Text
            color={colorFirstLine}
            scale={scaleFirstLine == 0 ? 4 : scaleFirstLine}
            maxWidth={viewport.width > breakpoint ? 3 : 1.75}
            font={`./fonts/${fontFirstLine}.otf`}
          >
            {headingText}
          </Text>

          {threeDText ? (
            <ThreeDText
              headerText={threeDText}
              headerColor={'teal'} 
              headerPositionY={-.9}
              headerDepth={.5}
              headerScale={0}
            />
          ) : null}

          {threeDTextLine2 ? (
            <ThreeDText
              headerText={threeDTextLine2}
              headerColor={'teal'} 
              headerPositionY={-1.5}
              headerDepth={.5}
              headerScale={0}
            />
          ) : null}

          <Text
            anchorY="top"
            color={colorBody}
            position={[0, threeDTextLine2 ? -1.9 : -1.2, 0]}
            textAlign="center"
            maxWidth={viewport.width > breakpoint ? 2.5 : 1.75}
            scale={scaleBody == 0 ? 1.3 : scaleBody}
            font={`./fonts/${fontBody}.otf`}
          >
            {bodyText}
          </Text>
        </Box>
      </Flex>
    </group>
  );
};
