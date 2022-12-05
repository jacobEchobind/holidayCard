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

    console.log('header', header1)

    return <>
      <Box 
        flexDirection='row'
        flexWrap='wrap'
        // alignItems='center'
        centerAnchor
      >
        <Box 
          // width='auto'
          margin={10}
          // position={[-1, 0, 0]}
          centerAnchor

        >
          <primitive 
            object={ header1.scene } 
            scale={ 2 }
          />
        </Box>
        <Box
          // width='auto'
          margin={10}
          centerAnchor

        >
          <primitive 
            object={ header2.scene } 
            scale={ 2 }
            // width='content-width'
          />
        </Box>
      </Box>
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