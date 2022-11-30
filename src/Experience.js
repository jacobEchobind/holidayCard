import { 
    Text, 
    Html, 
    ContactShadows, 
    PresentationControls, 
    Float, 
    Environment, 
    useGLTF 
} from '@react-three/drei'

export default function Experience()
{
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    return <>
        {/* environment map */}
        <Environment preset='city' />

        {/* background color */}
        <color args={ [ '#695b5b' ] } attach="background" />
        
        {/* these controls are a helper from react three drei and is used instead of orbit controls */}
        
            <PresentationControls 
                // if you add global the presentation controls will be added to the whole canvas vs just meshes in the canvas
                // global
                rotation={ [ 0.13, 0.1, 0 ] }
                polar={ [ -0.4, 0.2 ] }
                azimuth={ [ -1, 0.75 ] }
                // 
                config={ { mass: 2, tension: 400 } }
                // counter weight and on release will return to initial position
                snap={ { mass: 4, tension: 400 }  }
                
            >
                <Float rotationIntensity={ 0.4 }>
                    {/* screen light */}
                    <rectAreaLight 
                        width={ 2.5 }
                        height={ 1.65 }
                        intensity={ 65 }
                        color={ '#695b5b' }
                        rotation={ [ -0.1, Math.PI, 0 ] }
                        position={ [ 0, 0.55, -1.15 ] }
                    />
                    {/* computer model */}
                    <primitive 
                        object={ computer.scene } 
                        position-y={ - 1.1 }
                    >
                        {/* website iframe on screen */}
                        <Html
                            transform
                            wrapperClass='htmlScreen'
                            distanceFactor={ 1.17 }
                            position={ [ 0, 1.56, -1.4 ] }
                            rotation-x={ [ - 0.256 ] }
                        >
                            <iframe src='http://bruno-simon.com/html/' />
                            {/* <iframe src='https://lavosbit.com' /> */}
                        </Html>
                    </primitive>
                    <Text
                        font='./fonts/bangers-v20-latin-regular.woff'
                        fontSize={ 1 }
                        position={ [ 2, 1, 0 ] }
                        rotation={ [ 0, -Math.PI/2, 0 ] }
                        maxWidth={ 2 }
                        textAlign="center"
                    >
                        BRUNO SIMON
                    </Text>
                </Float>
            </PresentationControls>

            {/* cast shadows below the computer */}
            <ContactShadows 
                position-y={ -1.4 } 
                opacity={ .4 }
                scale={ 5 }
                blur={ 2.4 }
            />
    </>
}