import { useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Flex, Box } from '@react-three/flex'
import { Text, useGLTF, Sphere, useHelper } from '@react-three/drei'
import { breakpoints } from './App';
import * as THREE from "three";


export const SecondSection = ({ position }) => {
  const { viewport } = useThree();
  // const mobile = viewport.width < breakpoints.small
  const EBlogo = useGLTF('./meshes/EBLogo_snow.glb')
  const contentMesh = useRef();
  useHelper(contentMesh, THREE.BoxHelper, "#272730");
  
  const textMesh = useRef();
  useHelper(textMesh, THREE.BoxHelper, "coral");

  const headerMesh = useRef();
  useHelper(headerMesh, THREE.BoxHelper, "red");

            

  return (
    <Flex  
      position={position} 
      size={[viewport.width, viewport.height, 0]} // xyz size to constrain content to
      dir='row'
      flexWrap='wrap'
      // padding={.5}
      margin={1}
      // centerAnchor
      alignItems='center'
      justifyContent='space-between'
    >

      {console.log('viewport.width', viewport.width)}
      <mesh ref={contentMesh}>
        <Box
          // height={.5}
          // width={.5}
          anchorY='top'
          marginTop={1}
        >
          {/* <Sphere args={[.3, 16, 16]} position={viewport.width < 2.7 &&  [0, -0.7, 0]}>
              <meshLambertMaterial attach="material" color="red" />
          </Sphere> */}
          <primitive 
            object={ EBlogo.scene } 
            position={ [ 0, 1, 0 ] }
            scale={ .0003 }
            rotation={ [ 0, 0, 0 ] }
          />
        </Box>
      </mesh>

      <mesh ref={textMesh}>
        <Box
          height={1}
          // height={'auto'}
          // width={.5}
          // width={viewport.width}
          // marginBottom={.75}
        >
          <mesh ref={headerMesh}>
              <Text 
                color='black' 
                scale={2}
                maxWidth={(viewport.width / 2)}
              >
                SECOND Section
              </Text>
          </mesh>   
            <Text 
              anchorY="top"
              color='black'
              position={[0, -0.3, 0]}
              maxWidth={viewport.width > 3 ? 3 : (viewport.width / 2)}
              // maxWidth={3}
            >
              Nullam viverra, mauris quis imperdiet gravida, nunc risus mollis enim, eu molestie risus turpis in ante. Nullam molestie sapien quis fermentum rhoncus.
            </Text>
        </Box>
      </mesh>
    </Flex>
  )
}

