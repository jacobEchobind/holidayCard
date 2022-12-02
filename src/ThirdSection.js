import { useThree } from '@react-three/fiber'
import { Flex, Box } from '@react-three/flex'
import { Text } from '@react-three/drei'
import { Html } from "@react-three/drei"

export const ThirdSection = ({ position }) => {
  const { viewport } = useThree();

  return (
    <Flex  position={ position }>
      <Box width={1} color='red'>
        <Text 
          color='black' 
          position={[0, 0, 0]}
          scale={2}
        >
          THIRD Section
        </Text>
        <Text 
          color='black'
          position={[0, -0.3, 0]}
          width='100%'
        >
          Nullam viverra, mauris quis imperdiet gravida, nunc risus mollis enim, eu molestie risus turpis in ante. Nullam molestie sapien quis fermentum rhoncus.
        </Text>
      </Box>
    </Flex>
  )
}

