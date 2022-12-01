import { 
    PresentationControls, 
    Float, 
    Environment, 
} from '@react-three/drei'
import { Portal } from './Portal'

export default function Experience({ position }) {
    return (
        <group position={ position }>
            <Environment preset='city'/>
            
            {/* these controls are a helper from react three drei and is used instead of orbit controls */}
            <PresentationControls 
                // if you add global the presentation controls will be added to the whole canvas vs just meshes in the canvas
                rotation={ [ 0.13, -0.1, 0 ] }
                polar={ [ -0.4, 0.2 ] }
                azimuth={ [ -1, 0.75 ] }
                config={ { mass: 2, tension: 400 } }
                // counter weight and on release will return to initial position
                // snap={ { mass: 4, tension: 400 }  }
            >
                <Float rotationIntensity={ 0.4 }>
                    {/* Picture frame with trees scene model */}
                    <Portal />
                </Float>
            </PresentationControls>
        </group> 
    )
}