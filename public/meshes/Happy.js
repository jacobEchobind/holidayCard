/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/happy-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.SnowBallinterHeader003.geometry} material={materials['header_snow.001']} />
      <mesh geometry={nodes.SnowBallinterHeader003_1.geometry} material={materials['header_text.002']} />
    </group>
  )
}

useGLTF.preload('/happy-transformed.glb')
