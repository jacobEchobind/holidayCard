// import { extend } from "@react-three/fiber"
import { Instance, Instances, Cloud, Text, Sparkles, Float, Environment, useGLTF } from "@react-three/drei"
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'
import { useRef, useState } from "react"
import { useFrame } from '@react-three/fiber'
import { folder, useControls } from 'leva'
import { data } from './store'


function Flakes({ data, range, scale }) {
    const { nodes, materials } = useGLTF('./meshes/snowflake.glb')
    console.log('nodes', nodes)
    return (
      <Instances range={ range } scale={ scale } material={materials['Ice Imperfections']}  geometry={nodes.Snowflake_low_1.geometry}>
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
    const { SnowRange, SnowScale, 
        headerScale, headerRotationX, headerRotationY, headerPositionX, headerPositionY, headerPositionZ,
        EBScale, EBRotationX, EBRotationY, EBPositionX, EBPositionY, EBPositionZ,
        SubSize, SubColor, SubPositionX, SubPositionY, SubPositionZ,
        FloatSpeed, FloatRotation, FloatIntensity, FloatRangeX, FloatRangeY,
        CloudVisible, CloudOpacity, CloudSpeed, CloudWidth, CloudDepth, CloudSegments, CloudPositionX, CloudPositionY, CloudPositionZ, CloudColor
        } = useControls ('Hero Section', { 

            Header: folder ({
                headerScale: { value: 0.00045 , min: 0.0002, max: 0.00085 },
                headerRotationX: { value: 0, min: - Math.PI , max: Math.PI },
                headerRotationY: { value: 0, min: - Math.PI, max: Math.PI },
                headerPositionX: { value: 0, min: - 3, max: 3 },
                headerPositionY: { value: 0.7, min: -3, max: 3 },
                headerPositionZ: { value: 1.2, min: -3, max: 3 },
            }),

            EBLogo: folder ({
                EBScale: { value: .06, min: 0.005, max: 0.1 },
                EBRotationX: { value: 0, min: - Math.PI , max: Math.PI },
                EBRotationY: { value: 0, min: - Math.PI, max: Math.PI },
                EBPositionX: { value: 0, min: - 3, max: 3 },
                EBPositionY: { value: -2.2, min: -3, max: 3 },
                EBPositionZ: { value: 1, min: -3, max: 3 },
            }),

            Subheader: folder ({
                SubSize: { value: .45, min: 0.01, max: 1 },
                SubColor: { value: '#26524E' },
                SubPositionX: { value: 0, min: - 3, max: 3 },
                SubPositionY: { value: 0, min: -3, max: 3 },
                SubPositionZ: { value: 0, min: -3, max: 3 },
            }),

            Snowflakes: folder ({ 
                SnowRange: { value: 100, min: 0, max: 300}, 
                SnowScale: { value: 1, min: 0, max: 300} 
            }),

            FloatAnimation: folder ({
                FloatSpeed: { value: 1, min: 0, max: 20 },
                FloatRotation: { value: 1, min: 0, max: 2},
                FloatIntensity: { value: 1, min: 0, max: 2 },
                FloatRangeX: { value: -.25, min: -3, max: 3 },
                FloatRangeY: { value: .25, min: -3, max: 3 }
            }),

            Clouds: folder ({ 
                CloudVisible: { value: true }, // Boolean
                CloudOpacity: { value: 0.8, min: 0, max: 2  }, // Cloud opacity
                CloudSpeed: { value: 0.025, min: 0, max: 0.5  }, // Rotation speed
                CloudWidth: { value: 4.5, min: 0, max: 20  }, // Width of the full cloud
                CloudDepth: { value: 0, min: -2, max: 0  }, // Z-dir depth
                CloudSegments: { value: 10 }, // Number of particles
                CloudPositionX: { value: -3, min: -50, max: 50  }, // X position
                CloudPositionY: { value: 6, min: -50, max: 50  }, // Y position
                CloudPositionZ: { value: -4, min: -30, max: 0  }, // Z position
                CloudColor: { value: '#F1F9FA' } // Cloud Color
             })
        }
    )

    const header = useGLTF('./meshes/happy_holidays.glb')

    const EBlogo = useGLTF('./meshes/EB-logo.glb')

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
            speed={ FloatSpeed } // Animation speed, defaults to 1
            rotationIntensity={ FloatRotation } // XYZ rotation intensity, defaults to 1
            floatIntensity={ FloatIntensity } // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[ FloatRangeX, FloatRangeY ]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
            <primitive 
                object={ header.scene } 
                // position={ [ headerPosX, headerPosY, headerPosZ ] }
                // rotation={ [ headerRotX, headerRotY, 0 ] }
                // scale={ headerSize }
                position={ [ headerPositionX, headerPositionY, headerPositionZ ] }
                rotation-x={ headerRotationX }
                rotation-y={ headerRotationY }
                scale={ headerScale }



                // trying to get the scale of 
                // scale={ (RespViewportWidth * .0000009) *  (window.screen.width ? 1.5 : 1)}
                // scale={ scale * 0.00000001}
            />
            <Text
                font='./fonts/noto-serif-v21-latin-regular.woff'
                fontSize={ SubSize }
                position={ [ SubPositionX, SubPositionY, SubPositionZ ] }
                maxWidth={ 10 }
                textAlign="center"
                color={ SubColor }
            >
                From all of us at
            </Text>
            <primitive 
                object={ EBlogo.scene } 
                position={ [ EBPositionX, EBPositionY, EBPositionZ ] }
                scale={ EBScale }
                rotation={ [ EBRotationX, EBRotationY, 0 ] }
            />
        </Float>
        <Flakes 
                data={ data } 
                range={ SnowRange } 
                scale={ SnowScale } 
        />
        <Cloud
            opacity={ CloudOpacity } // Cloud opacity
            speed={ CloudSpeed } // Rotation speed
            width={ CloudWidth } // Width of the full cloud
            depth={ CloudDepth }  // Z-dir depth
            segments={ CloudSegments } // Number of particles
            position={ [ CloudPositionX, CloudPositionY, CloudPositionZ ]} // XYZ position
            color={ CloudColor }
        />
    </>
}