/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/meshes/EB-Logo.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.eb_circleEB_text_highZBrush_defualt_group_1.geometry} material={materials['EB-logo']} />
    </group>
  )
}

useGLTF.preload('/meshes/EB-Logo.glb')
