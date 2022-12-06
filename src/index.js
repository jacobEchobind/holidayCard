import ReactDOM from 'react-dom/client'
import App from './App'

import { Canvas } from '@react-three/fiber'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas camera={{ near: 0.1, far: 200, fov: 80}}>
        <App />
    </Canvas>
)