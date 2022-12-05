// import { extend } from "@react-three/fiber"
import { Instance, Instances, Cloud, Text, Sparkles, Float, Environment, useGLTF } from "@react-three/drei"
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'
import { useRef, useState } from "react"
import { useFrame, useThree } from '@react-three/fiber'
import { folder, useControls } from 'leva'
import { Flex, Box } from '@react-three/flex'
import { data } from './store'
import { useHelper, Sphere, Center } from '@react-three/drei'


export default function Hero({position}) {
    const { viewport } = useThree();


    const { SnowRange, SnowScale, 
        // headerScale, headerRotationX, headerRotationY, headerPositionX, headerPositionY, headerPositionZ,
        header1Scale, header1RotationX, header1RotationY, 
        header1PositionX, header1PositionY, header1PositionZ,
        header2Scale, header2RotationX, header2RotationY, 
        header2PositionX, header2PositionY, header2PositionZ,
        EBScale, EBRotationX, EBRotationY, EBPositionX, EBPositionY, EBPositionZ,
        SubSize, SubColor, SubPositionX, SubPositionY, SubPositionZ,
        FloatSpeed, FloatRotation, FloatIntensity, FloatRangeX, FloatRangeY,
        // CloudVisible, CloudOpacity, CloudSpeed, CloudWidth, CloudDepth, CloudSegments, CloudPositionX, CloudPositionY, CloudPositionZ, CloudColor
        } = useControls ('Hero Section', { 

            Header1: folder ({
                header1Scale: { value: 0.04 , min: .03, max: .1, step: 0.01 },
                header1RotationX: { value: 0, min: - Math.PI , max: Math.PI },
                header1RotationY: { value: 0, min: - Math.PI, max: Math.PI },
                header1PositionX: { value: 0, min: - 3, max: 3, step: 0.01 },
                header1PositionY: { value: 0, min: -3, max: 3, step: 0.01 },
                header1PositionZ: { value: 0, min: -3, max: 3, step: 0.01 },
            }),

            Header2: folder ({
                header2Scale: { value: 0.04 , min: .03, max: .1, step: 0.01 },
                header2RotationX: { value: 0, min: - Math.PI , max: Math.PI },
                header2RotationY: { value: 0, min: - Math.PI, max: Math.PI },
                header2PositionX: { value: 0, min: -3, max: 3, step: 0.01 },
                header2PositionY: { value: 0, min: -3, max: 3, step: 0.01 },
                header2PositionZ: { value: 0, min: -3, max: 3, step: 0.01 },
            }),

            EBLogo: folder ({
                EBScale: { value: .0005, min: 0.0001, max: 0.01 },
                EBRotationX: { value: 0, min: - Math.PI , max: Math.PI },
                EBRotationY: { value: 0, min: - Math.PI, max: Math.PI },
                EBPositionX: { value: 0, min: - 3, max: 3 },
                EBPositionY: { value: -1.3, min: -3, max: 3 },
                EBPositionZ: { value: 1, min: -3, max: 3 },
            }),

            Subheader: folder ({
                SubSize: { value: .35, min: 0.01, max: 1 },
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

    // const header = useGLTF('./meshes/happy_holidays.glb')
    const header1 = useGLTF('./meshes/happy.glb')
    const header2 = useGLTF('./meshes/holidays.glb')
    const EBlogo = useGLTF('./meshes/EBLogo_snow.glb')

    const hero = useRef();
    useHelper(hero, THREE.BoxHelper, "pink");
    const holidayFlex = useRef();
    useHelper(holidayFlex, THREE.BoxHelper, "orange");
    const happy = useRef();
    useHelper(happy, THREE.BoxHelper, "red");
    const holiday = useRef();
    useHelper(holiday, THREE.BoxHelper, "purple");
    const from = useRef();
    useHelper(from, THREE.BoxHelper, "gray");

    return <>
        
        <Environment 
            preset={"apartment"}
            // TODO: presets are not supposed to be used in prod
            frames={Infinity} 
            resolution={128} 
            blur={3}
            // remove backgound or set to not visible so we can add the color in CSS
        />


        <Float
            speed={ FloatSpeed } // Animation speed, defaults to 1
            rotationIntensity={ FloatRotation } // XYZ rotation intensity, defaults to 1
            floatIntensity={ FloatIntensity } // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[ FloatRangeX, FloatRangeY ]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
            <mesh ref={hero}>
                <Flex 
                    // position={position}
                    dir='column' 
                    // size={['100%', viewport.height, 0]} // xyz size to constrain content to
                    // size={[viewport.width, viewport.height, 0]} 
                    justifyContent='center' 
                    alignItems='center'
                    centerAnchor
                >
                    <mesh ref={holidayFlex}>
                        <Box 
                            dir='row' 
                            flexWrap='wrap'
                            mainAxis="x"
                            crossAxis="y"
                            // alignItems='center'
                        >
                            <mesh ref={happy}>
                                <Box>
                                    <Sphere args={[.3, 16, 16]} position={viewport.width < 2.7 &&  [0, -0.7, 0]}>
                                        <meshLambertMaterial attach="material" color="red" />
                                    </Sphere>
                                    <primitive 
                                        object={ header1.scene } 
                                        // position={ [ header1PositionX, header1PositionY, header1PositionZ ] }
                                        // rotation-x={ header1RotationX }
                                        // rotation-y={ header1RotationY }
                                        // position={[0,0,0]}
                                        scale={ header1Scale }
                                    />
                                </Box>
                            </mesh>
                            <mesh ref={holiday}>
                                <Box marginLeft={.6}>
                                    <Sphere args={[.3, 16, 16]} position={viewport.width < 2.7 &&  [0, -0.7, 0]}>
                                        <meshLambertMaterial attach="material" color="red" />
                                    </Sphere>
                                    <primitive 
                                        object={ header2.scene } 
                                        // position={[0,0,0]}
                                        // position={ [ header2PositionX, header2PositionY, header2PositionZ ] }
                                        // rotation-x={ header2RotationX }
                                        // rotation-y={ header2RotationY }
                                        scale={ header2Scale }
                                    />
                                </Box>
                            </mesh>
                        </Box>
                    </mesh>

                    <mesh>
                        <Box ref={from}>
                            <Text
                                font='./fonts/noto-serif-v21-latin-regular.woff'
                                fontSize={ SubSize }
                                // position={ [ SubPositionX, SubPositionY, SubPositionZ ] }
                                maxWidth={ 10 }
                                // textAlign="center"
                                color={ SubColor }
                            >
                                From all of us at
                            </Text>
                        </Box>
                    </mesh>

                    <Box mt={1.2}>
                        <primitive 
                            object={ EBlogo.scene } 
                            // position={ [ EBPositionX, EBPositionY, EBPositionZ ] }
                            scale={ EBScale }
                            // rotation={ [ EBRotationX, EBRotationY, 0 ] }
                        />
                    </Box>
                </Flex>
            </mesh>
        </Float>

        <Flakes 
            data={ data } 
            range={ SnowRange } 
            scale={ SnowScale } 
        />
    </>
}

function Flakes({ data, range, scale }) {
    const { nodes, materials } = useGLTF('./meshes/snowflake.glb')
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