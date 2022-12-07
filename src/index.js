import ReactDOM from 'react-dom/client'
import App from './App'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader } from './Loader'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Canvas camera={{ near: 0.1, far: 200, fov: 80}}>
            <Suspense fallback={<Loader/>}>
                <App />
            </Suspense>
        </Canvas>
    </>
)