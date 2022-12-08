import { useThree } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import './style.css'

// Sections
import Hero from './Hero.js'
import { SecondSection } from './SecondSection'
import { ThirdSection } from './ThirdSection'
import Experience from './Experience.js'

const App = () => {
  const { viewport } = useThree();
  let x = 0

  return (
    <ScrollControls
        pages={3} // Each page takes 100% of the height of the canvas
        distance={.5} // A factor that increases scroll bar travel (default: 1)
        damping={4} // Friction, higher is faster (default: 4)
    >
        <Scroll>
            <directionalLight intensity={0.2} position={[ 0,  5, 3 ]}/>
            <directionalLight intensity={0.1} position={[ 0,  0, 5 ]}/>
            <Hero /> 
            <SecondSection position={[x, -viewport.height * 1, 0]} />
            <directionalLight intensity={0.5} position={[ 0, (-viewport.height * 2 + 5), 3 ]}/>
            {/* <ThirdSection position={[x, -viewport.height * 2, 0]} /> */}
            <Experience position={[x, -viewport.height * 2, 0]} />
        </Scroll>
    </ScrollControls>
  )
}

export default App