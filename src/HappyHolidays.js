import  { useRef } from 'react'
import { extend, useThree } from '@react-three/fiber' // extends three-fiber's catalogue of JSX elements
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader' // loads fonts from a JSON file
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import inter from './assets/Inter.json'

extend({ TextGeometry })

export default function HappyHolidays() {
  const font = new FontLoader().parse(inter);
  const { viewport } = useThree();
  const mesh = useRef();
  let textWidth
  
  if(mesh.current) {
    if(mesh.current.geometry.boundingBox) {
      textWidth = mesh.current.geometry.boundingBox.max.x
    }
  }

  return (
    <mesh 
      position={[-textWidth/2, 0, 0]}
      ref={mesh}
    >
      <textGeometry args={['Happy Holidays', {
        font, 
        size: viewport.width > 3 ? .4 : viewport.width / 12 , 
        height: .2
      }]} />
      <meshPhysicalMaterial attach='material' color='red' />
    </mesh>
  )
}