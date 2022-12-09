import React from 'react'
import { useMemo } from 'react'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

const SvgShape = ({ shape, color, index }) => (
  <mesh>
    <meshPhongMaterial
      attach="material"
      color='#102A30'
      // color='teal'
      // color='#02313D'
      // color='#006D88'
      // side={THREE.DoubleSide}
      // depthWrite={false}
      // transparent
    />
    <shapeGeometry args={[shape]} />
  </mesh>
)

const SvgAsync = React.memo(({ url, sceneRef }) => {
  const { paths } = useLoader(SVGLoader, url)
  const shapes = useMemo(
    () =>
      paths.flatMap((path, index) =>
        path.toShapes(true).map(shape => ({ index, shape, color: '#006C87' }))
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
      position={[.8, 0, 0]}
      scale={0.0005}
    />
  )
})

export function Scene() {

  return (
    <SvgAsync url='./svgs/snowman.svg' />
  )
}