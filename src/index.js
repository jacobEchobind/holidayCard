import ReactDOM from 'react-dom/client'
import App from './App'

import { Canvas } from '@react-three/fiber'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas 
        // camera={{position: [0, 0, 10]}}
        // camera={{ position: [0, -3.2, 40], fov: 12 }}
    >
        <App/>
    </Canvas>
)