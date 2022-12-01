import { useThree } from '@react-three/fiber'
import { Html } from "@react-three/drei"
import { breakpoints } from './App';

export const SecondSection = ({ position }) => {
  const { viewport } = useThree();
  const mobile = viewport.width < breakpoints.small

  return (
    <Html position={ mobile ?  [-viewport.width / 2 , -viewport.height * 2,   0] : position}>
      <div style={{  
          backgroundColor: 'orange', 
          width: mobile ? '90vw' : '50vw', 
          padding: 10 
      }}>
        <h3>Second Section</h3>
        <p>Nullam viverra, mauris quis imperdiet gravida, nunc risus mollis enim, eu molestie risus turpis in ante. Nullam molestie sapien quis fermentum rhoncus.</p>
      </div>
    </Html>
  )
}

