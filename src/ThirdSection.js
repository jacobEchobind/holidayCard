import { useThree } from '@react-three/fiber'
import { Html } from "@react-three/drei"

export const ThirdSection = ({ position }) => {
  const { viewport } = useThree();

  return (
    <>
      <Html position={position}>
      {console.log('viewport.width', viewport.width)}

        <div style={{ 
            backgroundColor: 'red', 
            // TODO: if viewport is mobile, 100vw
            width: '50vw', 
            padding: 10 
          }}>
          <h3>THIRD Section</h3>
          <p>Nullam viverra, mauris quis imperdiet gravida, nunc risus mollis enim, eu molestie risus turpis in ante. Nullam molestie sapien quis fermentum rhoncus.</p>
        </div>
      </Html>
    </>
  )
}

