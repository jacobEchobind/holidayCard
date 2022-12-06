import { useFrame, useThree } from '@react-three/fiber'
import { useState, useRef, Suspense } from 'react'
import { Instances, Instance, useGLTF, PresentationControls, Float, Environment } from '@react-three/drei'
import { TiltShift, Bloom, Noise, Vignette, EffectComposer, DepthOfField } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { folder, useControls } from 'leva'
import * as THREE from 'three'
import { Portal } from './Portal.js'


function Snow({z}) {
    const ref = useRef()
    // const [clicked, setClicked] = useState(false)
    const { viewport, camera } = useThree()
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])
    const {nodes, materials} =  useGLTF('/meshes/snowflake.glb')
  
    const [data] = useState({
      x: THREE.MathUtils.randFloatSpread(2), // example value: 6 which is -3 to 3
      y: THREE.MathUtils.randFloatSpread(height),
      rX: Math.random() * Math.PI,
      rY: Math.random() * Math.PI,
      rZ: Math.random() * Math.PI,
    })
  
    useFrame((state) => {
      ref.current.rotation.set((data.rX += 0.001), (data.rY += 0.004), (data.rZ += 0.0005))
      ref.current.position.set(data.x * width, (data.y -= Math.sin(.05) * 1.45), z)
      if (data.y < - height / 1.25) {
         data.y = height / 1.1
      }
    })
  
    return (<mesh ref={ref} castShadow receiveShadow geometry={nodes.Snowflake_low_1.geometry} material={materials["Ice Imperfections"]} />)
    // material-emissive={"orange"} //
  }

 

export default function Experience({ position}) {
    const { viewport } = useThree();
    const count = 150;
    const depth = 40;

    const { FocusDistance, FocalLength, BokehScale, TargetX, TargetY, TargetZ } = useControls('Effects',{
            DepthOfField: folder ( {
            FocusDistance: { value: 8, min: 0, max: 50, step: 0.01 }, // where to focus
            FocalLength: { value: 1.5, min: 0, max: 5, step: 0.01 }, // focal length
            BokehScale: { value: 3, min: 0, max: 20, step: 0.01}, // size of bokeh
            TargetX:{ value: 0, min: 0, max: 10, step: 0.01 },
            TargetY:{ value: 0, min: 0, max: 10, step: 0.01 },
            TargetZ:{ value: 30, min: 0, max: 80, step: 0.01 },
        })
        }
    )

    return (
        <group>
            <Environment preset='city'/>
            <ambientLight intensity={.45} />
            <spotLight position={[10, 10, 10]} intensity={2} />
            <Suspense fallback={ null }>
                <EffectComposer>
                    {/* <TiltShift /> */}
                    {Array.from({length: count}, (_, i) => (
                        <Snow key={i} z={-(i / count) * depth -35 } 
                    />
                    ))}
                    <Bloom
                        luminanceThreshold={.65} // 0 - 1 range https://github.com/pmndrs/react-postprocessing#selective-bloom
                        luminanceSmoothing={.75}
                        height={180}
                        opacity={1.5}
                    />
                    {/* <Noise opacity={0.001} />   */}
                    <Vignette
                        offset={0.2}
                        darkness={0.9}
                        // Eskil's vignette technique works from the outside inwards rather
                        // than the inside outwards, so if this is 'true' set the offset
                        // to a value greater than 1.
                        // See frag for details - https://github.com/vanruesc/postprocessing/blob/main/src/effects/glsl/vignette/shader.frag
                        eskil={false}
                        // blendFunction={BlendFunction.SOFT_LIGHT}
                    />
                    <DepthOfField 
                        target={[ TargetX, TargetY, TargetZ]} 
                        focalLength={ FocalLength } // focal length
                        bokehScale={ BokehScale } // bokeh size
                        height={512} 
                        focusDistance={ FocusDistance } // where to focus
                    />
                </EffectComposer>
                {/* these controls are a helper from react three drei and is used instead of orbit controls */}
                    <group position={ position }>    
                        <PresentationControls 
                            // if you add global the presentation controls will be added to the whole canvas vs just meshes in the canvas
                            rotation={ [ 0.13, -0.1, 0 ] }
                            polar={ [ -0.4, 0.2 ] }
                            azimuth={ [ -1, 0.75 ] }
                            config={ { mass: 2, tension: 400 } }
                            // counter weight and on release will return to initial position
                            // snap={ { mass: 4, tension: 400 }  }
                        >
                            <Float rotationIntensity={ 0.8 }>
                                {/* Picture frame with trees scene model */}
                                <Portal scale={viewport.width / 10} />
                            </Float>
                        </PresentationControls>
                    </group>
                <Environment preset='city'/>
            </Suspense>
        </group> 
    )
}