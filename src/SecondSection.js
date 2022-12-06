import { useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Flex, Box } from '@react-three/flex'
import { Text, useGLTF, Sphere } from '@react-three/drei'


export const SecondSection = ({ position }) => {
  const { viewport } = useThree();
  const breakpoint = 4.3
  const Snowflake = useGLTF('./meshes/snowflake.glb')
  
  return (
    <Flex  
      dir='column'
      position={position} 
      size={[viewport.width, viewport.height, 0]} // xyz size to constrain content to
      alignItems='center'
      centerAnchor={true}
    >
      <Box
        dir='row'
        justifyContent='center'
        alignItems='center'
        centerAnchor={false}
        flexWrap='wrap'
        width='100%'
        height='100%'
      >
        <Box 
          width={1}
          centerAnchor={true}
          // marginTop={viewport.width > breakpoint ? .4 : .5}
        >
          <Sphere 
            args={[.3, 16, 16]} 
            // position={[0, viewport.width > breakpoint ? .4 : .5, 0]}
          >
              <meshLambertMaterial attach="material" color="red" />
          </Sphere>
          {/* <primitive 
            object={ Snowflake.scene } 
            scale={ .001 }
          /> */}
        </Box>
        
        <Box centerAnchor={true}
          marginLeft={viewport.width > breakpoint ? .4 : 0}
        >
          {/* <Sphere args={[.3, 16, 16]} >
              <meshLambertMaterial attach="material" color="green" />
          </Sphere> */}
          <Text 
            color='black' 
            scale={2}
            maxWidth={(viewport.width > breakpoint) ? 3 : 1}
            textAlign='left'
          >
            SECOND Section
          </Text>
          <Text 
            anchorY="top"
            color='black'
            position={[0, -0.3, 0]}
            textAlign='left'
            maxWidth={viewport.width > breakpoint ? 2.8 : 1.75}
          >
            Nullam viverra, mauris quis imperdiet gravida, nunc risus mollis enim, eu molestie risus turpis in ante. Nullam molestie sapien quis fermentum rhoncus.
          </Text>
        </Box>

      </Box>
    </Flex>
  )
}

