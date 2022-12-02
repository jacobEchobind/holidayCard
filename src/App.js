import { useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { ScrollControls, Scroll, useHelper, OrbitControls } from '@react-three/drei'
import './style.css'
import * as THREE from 'three'

// Sections
import Hero from './Hero.js'
import { SecondSection } from './SecondSection'
import { ThirdSection } from './ThirdSection'
import Experience from './Experience.js'

// export const breakpoints = {
//     // when viewport.width === 7
//     small: 7
// }

const App = () => {
  const { viewport } = useThree();
  //   let x = viewport.width / 2
  let x = 0
  
  const secondMesh = useRef();
  useHelper(secondMesh, THREE.BoxHelper, "pink");
  const thirdMesh = useRef();
  useHelper(thirdMesh, THREE.BoxHelper, "pink");
  const scrollMesh = useRef();
  useHelper(scrollMesh, THREE.BoxHelper, "orange");

  return (
    <>
        {/* <OrbitControls enableZoom={false}/> */}
        <ScrollControls
            pages={4} // Each page takes 100% of the height of the canvas
            distance={1.5} // A factor that increases scroll bar travel (default: 1)
            damping={4} // Friction, higher is faster (default: 4)
        >
            <mesh ref={scrollMesh}>
                <Scroll>
                    {/* Lights */}
                    <directionalLight intensity={0.2} position={[ 0,  5, 3 ]}/>
                    <directionalLight intensity={0.1} position={[ 0,  0, 5 ]}/>

                    <Hero /> 
                    <mesh ref={secondMesh}>
                        <SecondSection position={[x, -viewport.height * 1, 0]} />
                    </mesh>
                    <directionalLight intensity={0.5} position={[ 0, (-viewport.height * 2 + 5), 3 ]}/>
                    
                    <mesh ref={thirdMesh}>
                        <ThirdSection position={[x, -viewport.height * 2, 0]} />
                    </mesh>
                    
                    <Experience position={[0, -viewport.height * 3, 0]} />
                </Scroll>
            </mesh>
        </ScrollControls>
    </>
  )
}

export default App