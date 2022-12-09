import  { useRef } from 'react'
import { extend, useThree } from '@react-three/fiber' // extends three-fiber's catalogue of JSX elements
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader' // loads fonts from a JSON file
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import Inter from './assets/Inter.json'

extend({ TextGeometry })

export default function HappyHolidays() {
  const font = new FontLoader().parse(Inter);
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
        height: .15,
        bevelEnabled: true,
        bevelThickness: .1,
        bevelSize: .01,
        bevelOffset: .001,
        bevelSegments: 3
      }]} />
      <meshPhysicalMaterial attach='material' color='teal' />
    </mesh>
  )
}