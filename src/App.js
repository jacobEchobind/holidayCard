import { useRef, useEffect, Suspense } from 'react'
import {  Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import './style.css'


import { Content } from './Content'

const state = {
    top: 0,
    pages: 4,
  }

const App = () => {
  const scrollArea = useRef()
  const onScroll = (e) => (state.top = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])

  return (
    <>
        <Canvas  
            onPointerMove={null} 
            camera={{ position: [0, 50, 250] }}
            // camera={{ position: [0, 0, 0] }}
        >
            {/* Lights go here? */}
            <Suspense fallback={<Html center> loading... </Html>}>
               <Content state={state} />
            </Suspense>
        </Canvas>

        <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
            <div style={{ height: `${state.pages * 100}vh` }} />
        </div>
    </>
  )
}

export default App