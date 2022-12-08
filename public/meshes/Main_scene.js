/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/main_scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[1.13, 0.28, 0.53]} rotation={[-Math.PI, -0.09, -Math.PI]}>
        <mesh geometry={nodes.lightPole02.geometry} material={materials.woodDark} />
        <mesh geometry={nodes.lightPole02_1.geometry} material={materials.lampEmission} />
        <mesh geometry={nodes.lightPole02_2.geometry} material={materials.woodenFrame} />
        <mesh geometry={nodes.lightPole02_3.geometry} material={materials.wood} />
        <mesh geometry={nodes.lightPole02_4.geometry} material={materials.metal} />
        <mesh geometry={nodes.lightPole02_5.geometry} material={materials.rock} />
        <mesh geometry={nodes.lightPole02_6.geometry} material={materials.TreeMedium} />
        <mesh geometry={nodes.lightPole02_7.geometry} material={materials.TreeDark} />
      </group>
      <mesh geometry={nodes.floor.geometry} material={materials.ground} position={[-0.01, 0, -0.61]} />
      <mesh geometry={nodes.frame.geometry} material={materials.woodenFrame} position={[-0.02, 1.26, -1.89]} rotation={[Math.PI, -0.02, Math.PI]} />
      <mesh geometry={nodes.back.geometry} material={materials['Material.002']} position={[-0.02, 1.27, -1.89]} rotation={[Math.PI, -0.02, Math.PI]} />
      <mesh geometry={nodes.glass.geometry} material={materials.glass} position={[-0.02, 1.27, -1.89]} rotation={[0, 0.02, 0]} />
      <mesh geometry={nodes.picture_matte001.geometry} material={materials['matte.001']} position={[-0.02, 1.24, -1.89]} rotation={[Math.PI, -0.02, Math.PI]} />
      <mesh geometry={nodes.photo.geometry} material={materials.photo} position={[-0.02, 1.24, -1.89]} rotation={[Math.PI, -0.02, Math.PI]} scale={0.09} />
      <mesh geometry={nodes.Snow.geometry} material={materials.Snow} position={[0, 0, -0.61]} />
    </group>
  )
}

useGLTF.preload('/main_scene-transformed.glb')