import { useThree } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import './style.css'

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
  return (
    <ScrollControls
        pages={4} // Each page takes 100% of the height of the canvas
        distance={1.5} // A factor that increases scroll bar travel (default: 1)
        damping={4} // Friction, higher is faster (default: 4)
    >
        <Scroll>
            <Hero /> 
            <SecondSection position={[ 0, -viewport.height * 1, 0 ]} />
            <ThirdSection position={[ 0, -viewport.height * 2, 0 ]} />
            <Experience position={[0, -viewport.height * 3, 0]} />
        </Scroll>
    </ScrollControls>
  )
}

export default App