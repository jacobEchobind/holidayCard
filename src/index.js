import ReactDOM from 'react-dom/client'
import App from './App'
import { folder, useControls } from 'leva'
import { Canvas } from '@react-three/fiber'

/** Add new camera to serve as Canvas camera **/
/** associate useControls inside of the camera component **/

// for reference https://www.reddit.com/r/threejs/comments/md2p0k/react_threejs_postprocessing_flickering_black/

// export default function Camera() {

//     const { Near, Far, FOV } = useControls('camera', {
//         Near: { value: 0.1, min: 0, max: 120, step: 0.01 }, // nearest most range
//         Far: { value: 0.1, min: 0, max: 120, step: 0.01 }, // furthest most range
//         FOV: { value: 0.1, min: 0, max: 120, step: 0.01 }, // angle of view (smaller feels more cropped/zoomed in)
//     },
//         {
//             collapsed: true,
//         }
//     )
// }

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas camera={{ near: 0.1, far: 200, fov: 56, antialias: true}}>
        <App />
    </Canvas>
)