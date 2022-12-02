import { useThree } from '@react-three/fiber'
import { Flex, Box } from '@react-three/flex'
import { Text, useGLTF } from '@react-three/drei'
import { breakpoints } from './App';

export const SecondSection = ({ position }) => {
  const { viewport } = useThree();
  // const mobile = viewport.width < breakpoints.small
  const EBlogo = useGLTF('./meshes/EBLogo_snow.glb')

  return (
    <Flex  
      position={ position } 
      // size={[50, 50, 50]}
      // yogaDirection='ltr'
      // dir='row' 
      // width='100%' 
      // height='100%' 
      flexDirection='row'
      justifyContent="center" 
      alignItems="center"
      // align='center' 
      // justify='flex-start' 
      // plane="xy"
      // flexWrap='wrap'

    >
      {/* <Box 
        dir='row' 
        // maxWidth='90%' 
        width='90%' 
        height='100%' 
      > */}

         {/* BOX WITH LOGO */}
         <Box 
          flexGrow={1}
          centerAnchor
          // width={'20%'} 
          // height='auto'
          // height={10}
        >
          <primitive 
              object={ EBlogo.scene } 
              position={ [ 0, 1, 0 ] }
              scale={ .0005 }
              rotation={ [ 0, 0, 0 ] }
          />
      </Box>

        {/*  BOX WITH TEXT */}
        <Box 
          // width='20%' 
          // height='auto'
          flexGrow={1}
          centerAnchor
          // height={10}
        >
          <Text 
            color='black' 
            // position={[0, 0, 0]}
            scale={2}
            maxWidth={(viewport.width / 5)}
          >
            SECOND Section
          </Text>
          <Text 
            // anchorX="center"
            anchorY="top"
            color='black'
            position={[0, -0.3, 0]}
            maxWidth={(viewport.width / 2)}
          >
            Nullam viverra, mauris quis imperdiet gravida, nunc risus mollis enim, eu molestie risus turpis in ante. Nullam molestie sapien quis fermentum rhoncus.
          </Text>
        </Box>
        
        {/* </Box> */}
    </Flex>
  )
}

