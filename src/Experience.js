import { useFrame, useThree } from "@react-three/fiber";
import { useState, useRef, Suspense } from "react";
import {
  Instances,
  Instance,
  useGLTF,
  PresentationControls,
  Float,
  Environment,
  Text,
  OrbitControls,
} from "@react-three/drei";
import {
  TiltShift,
  Bloom,
  Noise,
  Vignette,
  EffectComposer,
  DepthOfField,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Leva, folder, useControls } from "leva";
import * as THREE from "three";
import { Main } from "./Main.js";

export default function Experience({ position }) {
  const { viewport } = useThree();

  const {
    FocusDistance,
    FocalLength,
    BokehScale,
    TargetX,
    TargetY,
    TargetZ,
    DOFVisible, // DOF
    Offset,
    Darkness,
    Eskil,
    OptionsV,
    VignetteVisible, // vignette
    BLuminanceThreshold,
    BLuminanceSmoothing,
    BHeight,
    BOpacity,
    BloomVisible, // bloom
  } = useControls(
    "Effects",
    {
      DepthOfField: folder({
        FocusDistance: { value: 8, min: 0, max: 50, step: 0.01 }, // where to focus
        FocalLength: { value: 1.5, min: 0, max: 5, step: 0.01 }, // focal length
        BokehScale: { value: 3, min: 0, max: 20, step: 0.01 }, // size of bokeh
        TargetX: { value: 0, min: 0, max: 50, step: 0.1 },
        TargetY: { value: 0, min: 0, max: 50, step: 0.1 },
        TargetZ: { value: 30, min: 0, max: 50, step: 0.1 },
        DOFVisible: false,
      }),

      Vignette: folder({
        Offset: { value: 0.2, min: 0, max: 5, step: 0.01 },
        Darkness: { value: 0.7, min: 0, max: 5, step: 0.01 },
        Eskil: { value: false },
        VignetteVisible: true,
        // OptionsV: {
        //     null: 'null',
        //     ADD: 'ADD',
        //     ALPHA: 'ALPHA',
        //     AVERAGE: 'AVERAGE',
        //     COLOR: 'COLOR',
        //     COLOR_BURN: 'COLOR_BURN',
        //     COLOR_DODGE: 'COLOR_DODGE',
        //     DARKEN: 'COLOR_DODGE',
        //     DIFFERENCE: 'DIFFERENCE',
        //     DIVIDE: 'DIVIDE',
        //     DST: 'DST',
        //     EXCLUSION: 'EXCLUSION',
        //     HARD_LIGHT: 'HARD_LIGHT',
        //     INVERT: 'INVERT',
        //     INVERT_RGB: 'INVERT_RGB',
        //     LIGHTEN: 'LIGHTEN',
        //     LINEAR_BURN: 'LINEAR_BURN',
        //     LINEAR_LIGHT: 'LINDEAR_LIGHT',
        //     LUMINOSITY: 'LUMINOSITY',
        //     MULTIPLY: 'MULTIPLY',
        //     NEGATION: 'NEGATION',
        //     NORMAL: 'NORMAL',
        //     OVERLAY: 'OVERLAY',
        //     PIN_LIGHT: 'PIN_LIGHT',
        //     REFLECT: 'REFLECT',
        //     SATURATION: 'SATURATION',
        //     SCREEN: 'SCREEN',
        //     SET: 'SET',
        //     SKIP: 'SKIP',
        //     SOFT_LIGHT: 'SOFT_LIGHT',
        //     SRC: 'SRC',
        //     SUBTRACT: 'SUBTRACT',
        //     VIVID_LIGHT: 'VIVID_LIGHT'
        // }
      }),
      Bloom: folder({
        BLuminanceThreshold: { value: 0.65, min: 0, max: 1, step: 0.01 },
        BLuminanceSmoothing: { value: 0.75, min: 0, max: 1, step: 0.01 },
        BHeight: { value: 100, min: 0, max: 500, step: 0.1 },
        BOpacity: { value: 1.5, min: 0, max: 5, step: 0.01 },
        BloomVisible: false,
      }),
    },
    {
      collapsed: true,
    }
  );

  const { SnowDepth, SnowVisible, SnowCount, SnowSpeed } = useControls(
    "Snow",
    {
      Snow: folder({
        SnowDepth: { value: 35, min: 0, max: 100, step: 0.01 }, // distance from view
        SnowSpeed: { value: 0.05, min: 0, max: 5, step: 0.01 }, // rate of snowfall
        SnowCount: { value: 350, min: 0.0, max: 500, step: 0.1 }, // amount of snow
        SnowVisible: true,
      }),
    },
    {
      collapsed: true,
    }
  );

  function Snow({ z }) {
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
      ref.current.position.set(
        data.x * width,
        (data.y -= Math.sin(SnowSpeed) * 1.45),
        z
      );
      if (data.y < -height / 1.25) {
        data.y = height / 1.1;
      }
    });

    return (
      <mesh
        ref={ref}
        castShadow
        scale={0.1}
        receiveShadow
        geometry={nodes.Snowflake_low_1.geometry}
        material={materials["Ice Imperfections"]}
      />
    );
    // material-emissive={"orange"} //
  }

  return (
    <group>
      <Environment preset="city" />
      <ambientLight intensity={0.45} />
      <spotLight position={[10, 10, 10]} intensity={2} />

      {/* "Click and drag to view model" box */}
      <group position={[0, position[1] - 2.5, 0]}>
        <mesh scale={[1.1, 0.15, 100]}>
          <planeGeometry />
          <meshPhongMaterial color={"white"} depthTest={false} />
        </mesh>

        <Text color="black" scale={0.8}>
          Click and drag model to view
        </Text>
      </group>

      <Suspense fallback={null}>
        <EffectComposer>
          {/* <TiltShift /> */}

          {SnowVisible ? (
            <group>
              {Array.from({ length: SnowCount }, (_, i) => (
                <Snow key={i} z={-(i / SnowCount) * SnowDepth - SnowDepth} />
              ))}
            </group>
          ) : null}

          {BloomVisible ? (
            <Bloom
              luminanceThreshold={BLuminanceThreshold} // 0 - 1 range https://github.com/pmndrs/react-postprocessing#selective-bloom
              luminanceSmoothing={BLuminanceSmoothing}
              height={BHeight}
              opacity={BOpacity}
            />
          ) : null}

          {VignetteVisible ? (
            <Vignette
              offset={Offset}
              darkness={Darkness}
              // Eskil's vignette technique works from the outside inwards rather
              // than the inside outwards, so if this is 'true' set the offset
              // to a value greater than 1.
              // See frag for details - https://github.com/vanruesc/postprocessing/blob/main/src/effects/glsl/vignette/shader.frag
              eskil={Eskil}
              // blendFunction={BlendFunction.OptionsV}
            />
          ) : null}

          {DOFVisible ? (
            <DepthOfField
              target={[TargetX, TargetY, TargetZ]}
              focalLength={FocalLength} // focal length
              bokehScale={BokehScale} // bokeh size
              height={512}
              focusDistance={FocusDistance} // where to focus
            />
          ) : null}
        </EffectComposer>
        {/* these controls are a helper from react three drei and is used instead of orbit controls */}
        <group position={position}>
          <PresentationControls
            polar={[0.3, 0.5]}
            azimuth={[-1, 0.75]}
            cursor={true}
          >
            {/* <Float rotationIntensity={ 1.5 }> */}
            {/* Picture frame with trees scene model */}
            <Main
              scale={
                viewport.width > 5 ? viewport.width / 10 : viewport.width / 6
              }
            />
            {/* </Float> */}
          </PresentationControls>
        </group>
        <Environment preset="city" />
      </Suspense>
    </group>
  );
}
