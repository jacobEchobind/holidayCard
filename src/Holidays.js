// import { extend } from "@react-three/fiber"
import { Instance, Instances, Cloud, Text, Sparkles, Float, Environment, useGLTF } from "@react-three/drei"
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'
import { useRef, useState } from "react"
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { data } from './store'


function Flakes({ data, range, scale }) {
    const { nodes, materials } = useGLTF('./snowflake.glb')
    // console.log('data', data)
    return (
      <Instances range={range} scale={ scale } material={materials['Ice Imperfections']}  geometry={nodes.Snowflake_1.geometry}>
        <group position={[0, 0, 0]}>
          {data.map((props, i) => (
            <Flake key={i} {...props} />
          ))}
        </group>
      </Instances>
    )
}

function Flake({ random, color = new THREE.Color(), ...props }) {
    const ref = useRef()
    const [ hovered, setHover ] = useState(false)
    useFrame((state) => {
        const t = state.clock.getElapsedTime() + random * 10000
        ref.current.rotation.set(Math.cos(t / 4) / 2, Math.sin(t / 4) / 2, Math.cos(t / 1.5) / 2)
        ref.current.position.y = Math.sin(t / 1.5) / 2
        ref.current.scale.x = ref.current.scale.y = ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z, hovered ? 0.08 : 0.033, 0.05)
        ref.current.color.lerp(color.set(hovered ? '#D4F4F5' : '#E7F5F6'), hovered ? .01 : 0.5)
  })
  return (
    <group {...props}>
      <Instance scale={ 0.01 } ref={ref} onPointerOver={(e) => (e.stopPropagation(), setHover(true))} onPointerOut={(e) => setHover(false)} />
    </group>
  )
}


export default function Holidays()
{

    const { 
        range, 
        scale, 
        // speed, 
        // rotationIntensity, 
        // floatIntensity, 
        // floatingRange1, 
        // floatingRange2, 
        headerPosX, 
        headerPosY, 
        headerPosZ, 
        headerRotX, 
        headerRotY, 
        headerSize  
        } = useControls
    (

        'snowflake', 
        { 
            range: { value: 100, min: 0, max: 300}, 
            scale: { value: 1, min: 0, max: 300}
        },

        // 'Big Header',
        // {
        //     headerPosX: { value: 0, min: - 3, max: 3 }, // X position
        //     headerPosY: { value: 0.7, min: -3, max: 3 }, // Y position
        //     headerPosZ: { value: 1.2, min: 3, max: 3 }, // Z position
        //     headerRotX: { value: 0, min: -45, max: 45 }, // text X rotation
        //     headerRotY: { value: 0, min: -45, max: 45 }, // text Y rotation
        //     scale: { value: 0.00062, min: 0.00001, max: 0.0008 } // XYZ scale
        // }
        // 'Float',
        // { 
        // speed: { value: 1, min: 0, max: 20 }, // Animation speed, defaults to 1 
        // rotationIntensity: { value: 1, min: 0, max: 20}, // XYZ rotation intensity, defaults to 1
        // floatIntensity: { value: 1, min: 0, max: 20 }, // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        // floatingRange1: { value: -1, min: -20, max: 20 }, // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        // floatingRange2: { value: 0.1, min: -20, max: 20}
        // }
    )

    const header = useGLTF('./happy_holidays.glb')

    const EBlogo = useGLTF('./EB-logo.glb')

    return <>
        
        <Environment 
            preset={"apartment"}
            frames={Infinity} 
            resolution={128} 
            blur={3}
        />
        <Float
            // speed={ speed }
            // rotationIntensity={ rotationIntensity }
            // floatIntensity={ floatIntensity }
            // floatingRange={ [ floatingRange1, floatingRange2 ] }
            speed={2.5} // Animation speed, defaults to 1
            rotationIntensity={.5} // XYZ rotation intensity, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-.25, .25]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
            <primitive 
                object={ header.scene } 
                // position={ [ headerPosX, headerPosY, headerPosZ ] }
                // rotation={ [ headerRotX, headerRotY, 0 ] }
                // scale={ headerSize }
                position={ [ 0, .7, 1.2 ] }
                rotation-x={ 0 }
                scale={0.00062}



                // trying to get the scale of 
                // scale={ (RespViewportWidth * .0000009) *  (window.screen.width ? 1.5 : 1)}
                // scale={ scale * 0.00000001}
            />
            <Text
                font='./fonts/noto-serif-v21-latin-regular.woff'
                fontSize={ .45 }
                position={ [ 0, -0.08, 0 ] }
                // rotation={ [ 0, -Math.PI/2, 0 ] }
                maxWidth={ 10 }
                textAlign="center"
                color={'#26524E'}
            >
                From all of us at
            </Text>
            <primitive 
                object={ EBlogo.scene } 
                position={ [ 0, -2.2, 1] }
                scale={.06}
            />
            <Flakes 
                data={ data } 
                range={ range } 
                scale={ scale } 
            />
        </Float>
        <Cloud
            opacity={ 0.8 } // Cloud opacity
            speed={ 0.025 } // Rotation speed
            width={ 4.5 } // Width of the full cloud
            depth={ -3.5 }  // Z-dir depth
            segments={ 10 } // Number of particles
            position={ [ -3, 6, -4 ]} // XYZ position
            color="##F1F9FA"
        />
    </>
}