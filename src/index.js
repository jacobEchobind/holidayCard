import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import Holidays from './Holidays.js'
// import { ScrollControls } from '@react-three/drei'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        
        <section>
            <Canvas>
            {/* <ScrollControls 
                pages={1} // Each page takes 100% of the height of the canvas
                distance={1} // A factor that increases scroll bar travel (default: 1)
                damping={4} // Friction, higher is faster (default: 4)
                horizontal={false} // Can also scroll horizontally (default: false)
                infinite={false} // Can also scroll infinitely (default: false)
            /> */}
                <Holidays /> 

            </Canvas>
        </section>
        <Canvas
            camera={ {
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [ -3, 1.5, 4 ]
            } }
        >
            {/* <ScrollControls /> */}
            <Experience />
        </Canvas>
    </>
)