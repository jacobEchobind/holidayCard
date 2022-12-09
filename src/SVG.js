import React from 'react'
import { useMemo } from 'react'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

const SvgShape = ({ shape, color, index }) => (
  <mesh>
    <meshPhongMaterial
      attach="material"
      color={color}
      // side={THREE.DoubleSide}
      // depthWrite={false}
      // transparent
    />
    <shapeGeometry args={[shape]} />
  </mesh>
)

const SvgAsync = React.memo(({ url, sceneRef, color, position }) => {
  const { paths } = useLoader(SVGLoader, url)
  const shapes = useMemo(
    () =>
      paths.flatMap((path, index) =>
        path.toShapes(true).map(shape => ({ index, shape, color: color }))
      ),
    [paths]
  )

  return (
    <group
      ref={sceneRef}
      children={shapes.map((props, key) => (
        <SvgShape key={key} {...props} />
      ))}
      // rotation={[0, 0, -Math.PI]}
      rotation={[-Math.PI, -Math.PI, 0]}
      position={[position.x, position.y, position.z]}
      // position={[.8, 0, 0]}
      scale={0.0005}
    />
  )
})

export function Scene({ color, position }) {

  return (
    <SvgAsync url='./svgs/snowman.svg' color={color} position={position}/>
  )
}