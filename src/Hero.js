// import { extend } from "@react-three/fiber"
import { Instance, Instances, Text, Float, Environment, useGLTF } from "@react-three/drei"
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'
import { useRef, useState } from "react"
import { useFrame, useThree } from '@react-three/fiber'
import { Leva, folder, useControls } from 'leva'
import { Flex, Box } from '@react-three/flex'
import { data } from './store'
import { Perf } from "r3f-perf"
import { FocalLength, FocusDistance, BokehScale } from './Experience.js'
import HappyHolidays from "./HappyHolidays"

export default function Hero() {
    const { viewport } = useThree();

    const { PerfVisible } =  useControls ({
        PerfVisible: false,
    })

    const { SnowRange, SnowScale, 
        // headerScale, headerRotationX, headerRotationY, headerPositionX, headerPositionY, headerPositionZ,
        header1Scale, header1RotationX, header1RotationY, 
        header1PositionX, header1PositionY, header1PositionZ,
        color1, color2, wireframe,
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
                wireframe: false,
            }),

            material: folder({
                color1: '#ff0000',
            }),

            Header2: folder ({
                header2Scale: { value: 0.04 , min: .03, max: .1, step: 0.01 },
                header2RotationX: { value: 0, min: - Math.PI , max: Math.PI },
                header2RotationY: { value: 0, min: - Math.PI, max: Math.PI },
                header2PositionX: { value: 0, min: -3, max: 3, step: 0.01 },
                header2PositionY: { value: 0, min: -3, max: 3, step: 0.01 },
                header2PositionZ: { value: 0, min: -3, max: 3, step: 0.01 },
                wireframe: false,
            }),

            material: folder({
                color2: '#ff0000',
            }),

            EBLogo: folder ({
                EBScale: { value: .0005, min: 0.0001, max: 0.01 },
                EBRotationX: { value: 0, min: - Math.PI , max: Math.PI },
                EBRotationY: { value: 0, min: - Math.PI, max: Math.PI },
                EBPositionX: { value: 0, min: - 3, max: 3 },
                EBPositionY: { value: .4, min: -3, max: 3 },
                EBPositionZ: { value: 0, min: -3, max: 3 },
            }),

            Subheader: folder ({
                SubSize: { value: .5, min: 0.01, max: 1 },
                SubColor: { value: 'white' },
                SubPositionX: { value: 0, min: - 3, max: 3 },
                SubPositionY: { value: .3, min: -3, max: 3 },
                SubPositionZ: { value: 0, min: -3, max: 3 },
            }),

            // Snowflakes: folder ({ 
            //     SnowRange: { value: 100, min: 0, max: 300}, 
            //     SnowScale: { value: 1, min: 0, max: 300} 
            // }),

            FloatAnimation: folder ({
                FloatSpeed: { value: 1, min: 0, max: 20 },
                FloatRotation: { value: 1, min: 0, max: 2},
                FloatIntensity: { value: 1, min: 0, max: 2 },
                FloatRangeX: { value: -.25, min: -3, max: 3 },
                FloatRangeY: { value: .25, min: -3, max: 3 }
            }),
        },
            {
                collapsed: true,
            }
    )

    // const { options, resolution, blur } = useControls('Background', {
    //         Environment: folder ({
    //             // options: { 
    //             //     apartment: 'apartment',
    //             //     city: 'city',
    //             //     dawn: 'dawn',
    //             //     forest: 'forest',
    //             //     lobby: 'lobby',
    //             //     night: 'night',
    //             //     park: 'park',
    //             //     studio: 'studio',
    //             //     sunset: 'sunset',
    //             //     warehouse: 'warehouse'
    //             // },
    //             resolution: { value: 128, min: 64, max: 2048, step: 8 },
    //             blur: { value: 3, min: 0, max: 24, step: 0.01 },
    //         })
            
    //     },
    //     {
    //         collapsed: true,
    //     }
    // )

    const header1 = useGLTF('./meshes/happy.glb')
    const header2 = useGLTF('./meshes/holidays.glb')
    const EBLogo = useGLTF('./meshes/EBLogo.glb')

    return <>
        
        { PerfVisible ? <Perf position='top-left' /> : true }

        <Environment 
            preset={"apartment"}
            // TODO: presets are not supposed to be used in prod
            frames={Infinity} 
            resolution={128} 
            blur={3}
        />

        <Float
            speed={ FloatSpeed } // Animation speed, defaults to 1
            rotationIntensity={ FloatRotation } // XYZ rotation intensity, defaults to 1
            floatIntensity={ FloatIntensity } // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[ FloatRangeX, FloatRangeY ]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
            <Flex 
                dir='column' 
                size={[viewport.width, viewport.height, 0]} // xyz size to constrain content to
                alignItems='center'
                centerAnchor={true}
                justifyContent='center'
            >

                {/*  H A P P Y   H O L I D A Y S  */}
                <Box 
                    centerAnchor={true}
                    width="100%"
                >
                    <HappyHolidays />
                </Box>

                <Box marginTop={.3} centerAnchor={true}>
                    <Text
                        font='./fonts/christmas-squad.otf'
                        fontSize={ viewport.width < 3 ? viewport.width / 10 : SubSize }
                        position={ [ SubPositionX, SubPositionY, SubPositionZ ] }
                        maxWidth={ viewport.width }
                        textAlign="center"
                        color={ SubColor }
                    >
                        from all of us at
                    </Text>
                </Box>
                <Box mt={.3} centerAnchor={true}>
                    <primitive 
                        object={ EBLogo.scene } 
                        scale={viewport.width < 2.75 ? viewport.width / 5000 : EBScale }
                        position={ [ EBPositionX, EBPositionY, EBPositionZ ] }
                        rotation={ [ EBRotationX, EBRotationY, 0 ] }
                    />
                </Box>
            </Flex>
        </Float>
    </>
}