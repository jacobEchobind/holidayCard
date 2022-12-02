import ReactDOM from 'react-dom/client'
import App from './App'

import { Canvas } from '@react-three/fiber'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas 
        // camera={{position: [0, 0, 10]}}
    >
        <App/>
    </Canvas>
)