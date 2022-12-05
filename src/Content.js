import { useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useAspect } from '@react-three/drei'
import * as THREE from "three"
import { Flex } from '@react-three/flex'

import Hero from './Hero.js'
import Hero2 from './Hero2.js'
import { SecondSection } from './SecondSection'
import { ThirdSection } from './ThirdSection'
import Experience from './Experience.js'

export const Content = ({state}) => {
  const group = useRef();
  const {viewport} = useThree();
  // const [vpWidth] = useAspect("cover", size.width, size.height)

  const vec = new THREE.Vector3()
  useFrame(() => group.current.position.lerp(vec.set(0, state.top, 0), 0.1))

  // console.log('vpWidth', vpWidth)

  return(
    <group ref={group}>
      <Flex 
        size={[viewport.width, 0, 0]}
        mainAxis='y'
        crossAxis='x'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        centerAnchor
      >
        <Hero2 /> 
        {/* <SecondSection /> */}
        {/* <ThirdSection /> */}
        {/* <Experience /> */}
      </Flex>
    </group>
  )
}


