import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Drawing(props) {
  const { nodes, materials } = useGLTF('./meshes/drawing-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.drawing.geometry} material={materials.drawing_mat} scale={0.5} />
    </group>
  )
}

useGLTF.preload('./meshes/drawing-transformed.glb')
