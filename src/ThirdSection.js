import { useThree } from '@react-three/fiber'
import { Flex, Box } from '@react-three/flex'
import { Text, Sphere, Html } from '@react-three/drei'

export const ThirdSection = ({ position }) => {
  const { viewport } = useThree();
  const breakpoint = 4.5

  return (
    <>
      <mesh scale={[viewport.width, viewport.height / 3, 1]} position={position} >
        <planeGeometry />
        <meshPhongMaterial color={'lightblue'} depthTest={false} />
      </mesh>
      <group position={[0, .5, 0]}>
        <Flex  
          dir={'column'}
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
            <Box centerAnchor={true}>
              <Text 
                color='black' 
                scale={4}
                maxWidth={(viewport.width > breakpoint) ? 3 : 1}
                font='./fonts/christmas-squad.otf'
              >
                Third Section
              </Text>
              <Text 
                maxWidth={viewport.width > breakpoint ? 2 : 1.75}
                anchorY="top"
                position={[0, -0.3, 0]}
                color='black'
                scale={2}
                font='./fonts/proxima-nova.otf'
              >
                Nullam viverra, mauris quis imperdiet gravida, nunc risus mollis enim, eu molestie risus turpis in ante. Nullam molestie sapien quis fermentum rhoncus.
              </Text>
            </Box>
            <Box
              width={1}
              centerAnchor={true}
              marginTop={viewport.width > breakpoint ? 1.5 : 1.5}
              marginLeft={viewport.width > breakpoint ? .4 : 0}
            >
              <Sphere args={[.3, 16, 16]}>
                <meshLambertMaterial attach="material" color="red" />
              </Sphere>
            </Box>
          </Box>
        </Flex>
      </group>
    </>
  )
}

