/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Portal(props) {
  const { nodes, materials } = useGLTF('/meshes/portal1.glb')
  console.log('props', props)
  return (
    <group {...props} dispose={null} scale={.5}>
      <mesh geometry={nodes.Cube.geometry} material={materials.wood} position={[0.91, 0.35, 1.29]} rotation={[0, -0.08, 0]}>
        <mesh geometry={nodes.SnowBall008.geometry} material={materials['Snow.015']} position={[-0.02, 0.07, 0.11]} rotation={[0, 0.08, 0]} />
      </mesh>
      <mesh geometry={nodes.Cube001.geometry} material={materials.wood} position={[0.91, 0.35, 0.42]} rotation={[0, -0.14, 0]}>
        <mesh geometry={nodes.SnowBall009.geometry} material={materials['Snow.016']} position={[-0.03, 0.07, 0.11]} rotation={[0, 0.14, 0]} />
      </mesh>
      <mesh geometry={nodes.Cube002.geometry} material={materials.wood} position={[0.91, 0.35, -0.52]} rotation={[0, 0.13, 0]}>
        <mesh geometry={nodes.SnowBall026.geometry} material={materials['Snow.033']} position={[-0.02, 0.07, 0.12]} rotation={[0, -0.13, 0]} />
      </mesh>
      <mesh geometry={nodes.Cube003.geometry} material={materials.wood} position={[-0.95, 0.35, -0.24]} rotation={[Math.PI, -0.07, Math.PI]}>
        <mesh geometry={nodes.SnowBall012.geometry} material={materials['Snow.019']} position={[-0.02, 0.07, 0.11]} rotation={[-Math.PI, 0.07, -Math.PI]} />
      </mesh>
      <mesh geometry={nodes.Cube004.geometry} material={materials.wood} position={[-0.95, 0.35, 0.63]} rotation={[-Math.PI, 0.06, -Math.PI]}>
        <mesh geometry={nodes.SnowBall011.geometry} material={materials['Snow.018']} position={[-0.02, 0.07, 0.11]} rotation={[Math.PI, -0.06, Math.PI]} />
      </mesh>
      <mesh geometry={nodes.Cube005.geometry} material={materials.wood} position={[-0.9, 0.35, 1.57]} rotation={[Math.PI, -0.07, Math.PI]}>
        <mesh geometry={nodes.SnowBall010.geometry} material={materials['Snow.017']} position={[-0.02, 0.07, 0.11]} rotation={[-Math.PI, 0.07, -Math.PI]} />
      </mesh>
      <mesh geometry={nodes.Cylinder.geometry} material={materials['frame.001']} position={[1.31, 0.07, 0.94]} rotation={[0, -0.47, 0]}>
        <mesh geometry={nodes.SnowBall022.geometry} material={materials['Snow.029']} position={[0, 0.12, -0.01]} rotation={[0, 0.47, 0]} />
      </mesh>
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['frame.001']} position={[1.16, 0.05, 1.57]} rotation={[0, 0.86, 0]}>
        <mesh geometry={nodes.SnowBall017.geometry} material={materials['Snow.024']} position={[0, 0.15, 0]} rotation={[0, -0.86, 0]} />
      </mesh>
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['frame.001']} position={[1.52, 0.05, 0.23]}>
        <mesh geometry={nodes.SnowBall007.geometry} material={materials['Snow.013']} position={[0, 0.09, 0]} />
      </mesh>
      <mesh geometry={nodes.Cylinder003.geometry} material={materials['frame.001']} position={[1.65, 0.05, 1.41]} rotation={[Math.PI, -1.49, Math.PI]}>
        <mesh geometry={nodes.SnowBall016.geometry} material={materials['Snow.023']} position={[0, 0.1, 0]} rotation={[-Math.PI, 1.49, -Math.PI]} />
      </mesh>
      <mesh geometry={nodes.Cylinder004.geometry} material={materials['frame.001']} position={[1.56, 0.09, 0.61]} rotation={[0.81, 0.07, 0.25]}>
        <mesh geometry={nodes.SnowBall025.geometry} material={materials['Snow.032']} position={[0.06, 0.03, -0.05]} rotation={[-0.81, 0.13, -0.23]} />
      </mesh>
      <mesh geometry={nodes.Cylinder006.geometry} material={materials['frame.001']} position={[1.28, 0.05, 1.26]} rotation={[1.73, -0.36, -2.75]}>
        <mesh geometry={nodes.SnowBall018.geometry} material={materials['Snow.025']} position={[0.07, 0.01, -0.06]} rotation={[1.73, -0.33, -2.72]} />
      </mesh>
      <mesh geometry={nodes.Cylinder007.geometry} material={materials['frame.001']} position={[1.51, 0.05, 0.63]} rotation={[1.19, -0.1, 1.77]}>
        <mesh geometry={nodes.SnowBall024.geometry} material={materials['Snow.031']} position={[0.08, 0, -0.05]} rotation={[0.54, 1.12, -2.05]} />
      </mesh>
      <mesh geometry={nodes.Cylinder008.geometry} material={materials['frame.001']} position={[1.72, 0.01, 1.06]} rotation={[1.79, 0.33, -0.64]}>
        <mesh geometry={nodes.SnowBall019.geometry} material={materials['Snow.026']} position={[0.08, 0.01, -0.06]} rotation={[-1.81, -0.55, -0.47]} />
      </mesh>
      <mesh geometry={nodes.Cylinder005.geometry} material={materials['frame.001']} position={[1.41, 0.03, 1.7]} rotation={[1.18, 0.07, 1.35]}>
        <mesh geometry={nodes.SnowBall021.geometry} material={materials['Snow.028']} position={[0.08, -0.01, -0.06]} rotation={[-0.54, 1.11, -1.06]} />
      </mesh>
      <mesh geometry={nodes.axe.geometry} material={materials.wood} position={[1.34, 0.26, 0.95]} rotation={[0, 0.07, 0]}>
        <mesh geometry={nodes.SnowBall038.geometry} material={materials['Snow.046']} position={[0.17, 0.1, 0]} rotation={[0, -0.07, 0]} />
      </mesh>
      <mesh geometry={nodes.axe001.geometry} material={materials.metal} position={[1.34, 0.26, 0.95]} rotation={[0, 0.07, 0]}>
        <mesh geometry={nodes.SnowBall015.geometry} material={materials['Snow.022']} position={[-0.01, 0.1, 0]} rotation={[0, -0.07, 0]} scale={[2.66, 1, 1]} />
      </mesh>
      <mesh geometry={nodes.Plane002.geometry} material={materials.grass} position={[-0.01, 0, -0.61]}>
        <mesh geometry={nodes.SnowBall039.geometry} material={materials['Snow.001']} />
      </mesh>
      <mesh geometry={nodes.base.geometry} material={materials.woodDark} position={[-1.16, 0.28, 0.54]} />
      <mesh geometry={nodes.light.geometry} material={materials.lampEmission} position={[-0.88, 0.79, 0.54]} />
      <mesh geometry={nodes.lightBox.geometry} material={materials.woodDark} position={[-0.88, 0.79, 0.54]} />
      <mesh geometry={nodes.pole.geometry} material={materials['frame.001']} position={[-1.16, 0.28, 0.54]}>
        <mesh geometry={nodes.SnowBall036.geometry} material={materials['Snow.043']} position={[0.12, 0.44, -0.01]} scale={1.3} />
      </mesh>
      <mesh geometry={nodes.base001.geometry} material={materials.woodDark} position={[1.13, 0.28, 0.53]} rotation={[Math.PI, -0.09, Math.PI]} />
      <mesh geometry={nodes.light001.geometry} material={materials.lampEmission} position={[0.85, 0.78, 0.55]} rotation={[Math.PI, -0.09, Math.PI]} />
      <mesh geometry={nodes.lightBox001.geometry} material={materials.woodDark} position={[0.85, 0.78, 0.55]} rotation={[Math.PI, -0.09, Math.PI]} />
      <mesh geometry={nodes.pole001.geometry} material={materials['frame.001']} position={[1.13, 0.28, 0.53]} rotation={[Math.PI, -0.09, Math.PI]}>
        <mesh geometry={nodes.SnowBall014.geometry} material={materials['Snow.021']} position={[0.11, 0.44, 0]} rotation={[-Math.PI, 0.09, -Math.PI]} scale={1.3} />
      </mesh>
      <mesh geometry={nodes.Cube010.geometry} material={materials.rock} position={[1.45, 0, -1.34]}>
        <mesh geometry={nodes.SnowBall002.geometry} material={materials['Snow.008']} position={[0.09, 0.77, -0.01]} />
      </mesh>
      <mesh geometry={nodes.Cube011.geometry} material={materials.rock} position={[-1.43, 0, -1.35]} rotation={[Math.PI, -0.81, Math.PI]}>
        <mesh geometry={nodes.SnowBall027.geometry} material={materials['Snow.034']} position={[0, 0.45, 0.06]} rotation={[-Math.PI, 0.81, -Math.PI]} />
      </mesh>
      <mesh geometry={nodes.Cube012.geometry} material={materials.rock} position={[-1.22, 0, -0.85]}>
        <mesh geometry={nodes.SnowBall029.geometry} material={materials['Snow.036']} position={[-0.05, 0.29, -0.03]} />
      </mesh>
      <mesh geometry={nodes.Cube013.geometry} material={materials.rock} position={[-1.69, 0.01, -0.82]}>
        <mesh geometry={nodes.SnowBall028.geometry} material={materials['Snow.035']} position={[0, 0.3, 0]} />
      </mesh>
      <mesh geometry={nodes.Cube014.geometry} material={materials.rock} position={[1.76, 0, -0.78]} rotation={[0, -0.71, 0]}>
        <mesh geometry={nodes.SnowBall001.geometry} material={materials['Snow.007']} position={[0, 0.18, 0.04]} rotation={[0, 0.71, 0]} />
      </mesh>
      <mesh geometry={nodes.Cube015.geometry} material={materials.rock} position={[-1.4, 0, 0.36]}>
        <mesh geometry={nodes.SnowBall031.geometry} material={materials['Snow.038']} position={[0, 0.09, 0]} />
      </mesh>
      <mesh geometry={nodes.Cube016.geometry} material={materials.rock} position={[-1.69, 0, -0.03]}>
        <mesh geometry={nodes.SnowBall032.geometry} material={materials['Snow.039']} position={[-0.01, 0.13, 0.04]} />
      </mesh>
      <mesh geometry={nodes.Cube017.geometry} material={materials.rock} position={[1.26, 0, -0.78]}>
        <mesh geometry={nodes.SnowBall003.geometry} material={materials['Snow.009']} position={[-0.06, 0.39, 0.06]} />
      </mesh>
      <mesh geometry={nodes.Cube018.geometry} material={materials.rock} position={[-1.71, 0, 1.12]} rotation={[0, 0.72, 0]}>
        <mesh geometry={nodes.SnowBall033.geometry} material={materials['Snow.040']} position={[0.03, 0.1, 0.02]} rotation={[0, -0.72, 0]} />
      </mesh>
      <mesh geometry={nodes.Cube019.geometry} material={materials.rock} position={[1.75, 0, -0.15]}>
        <mesh geometry={nodes.SnowBall004.geometry} material={materials['Snow.010']} position={[0, 0.11, 0]} />
      </mesh>
      <mesh geometry={nodes.Cube021.geometry} material={materials.rock} position={[-1.25, 0, -0.39]} rotation={[0, 1.35, 0]}>
        <mesh geometry={nodes.SnowBall030.geometry} material={materials['Snow.037']} position={[0, 0.24, 0.01]} rotation={[0, -1.35, 0]} />
      </mesh>
      <mesh geometry={nodes.Cube022.geometry} material={materials.rock} position={[-1.77, 0, 0.55]} rotation={[0, 1.28, 0]}>
        <mesh geometry={nodes.SnowBall034.geometry} material={materials['Snow.041']} position={[0, 0.08, 0]} rotation={[0, -1.28, 0]} />
      </mesh>
      <mesh geometry={nodes.Cube023.geometry} material={materials.rock} position={[1.84, 0, 0.27]}>
        <mesh geometry={nodes.SnowBall023.geometry} material={materials['Snow.030']} position={[-0.03, 0.14, -0.01]} />
      </mesh>
      <mesh geometry={nodes.Cube020.geometry} material={materials.rock} position={[1.27, 0, -0.39]}>
        <mesh geometry={nodes.SnowBall005.geometry} material={materials['Snow.011']} position={[0, 0.09, 0.02]} />
      </mesh>
      <mesh geometry={nodes.Cube024.geometry} material={materials.rock} position={[-1.11, 0, 0.27]} />
      <mesh geometry={nodes.Cube025.geometry} material={materials.rock} position={[-1.72, 0, -0.41]} rotation={[Math.PI, -1.52, Math.PI]}>
        <mesh geometry={nodes.SnowBall035.geometry} material={materials['Snow.042']} position={[-0.03, 0.16, -0.01]} rotation={[-Math.PI, 1.52, -Math.PI]} />
      </mesh>
      <mesh geometry={nodes.Cube026.geometry} material={materials.rock} position={[1.25, 0, 0.02]} rotation={[0, -0.49, 0]}>
        <mesh geometry={nodes.SnowBall006.geometry} material={materials['Snow.012']} position={[-0.01, 0.06, -0.01]} rotation={[0, 0.49, 0]} />
      </mesh>
      <mesh geometry={nodes.picture_frame001.geometry} material={materials['frame.001']} position={[-0.02, 1.26, -1.89]} rotation={[Math.PI, -0.02, Math.PI]}>
        <mesh geometry={nodes.SnowBall037.geometry} material={materials['Snow.044']} position={[0.03, 0.05, 0]} rotation={[-Math.PI, 0.02, -Math.PI]} />
      </mesh>
      <mesh geometry={nodes.picture_glass003.geometry} material={materials['glass.002']} position={[-0.02, 1.24, -1.89]} rotation={[Math.PI, -0.02, Math.PI]} />
      <mesh geometry={nodes.picture_glass004.geometry} material={materials['glass.003']} position={[-0.02, 1.24, -1.89]} rotation={[Math.PI, -0.02, Math.PI]} />
      <mesh geometry={nodes.picture_glass005.geometry} material={materials['Material.002']} position={[-0.02, 1.24, -1.89]} rotation={[Math.PI, -0.02, Math.PI]} />
      <mesh geometry={nodes.picture_matte001.geometry} material={materials['matte.001']} position={[-0.02, 1.24, -1.89]} rotation={[Math.PI, -0.02, Math.PI]} />
      <mesh geometry={nodes.picture_photo001.geometry} material={materials['photo.001']} position={[-0.02, 1.24, -1.89]} rotation={[Math.PI, -0.02, Math.PI]} scale={0.09} />
      <mesh geometry={nodes.Plane033.geometry} material={materials['Tree.002']} position={[-2.92, 0.05, -0.5]}>
        <mesh geometry={nodes.SnowBall046.geometry} material={materials['Snow.048']} position={[0.03, 0.5, -0.04]} />
      </mesh>
      <mesh geometry={nodes.Plane032.geometry} material={materials['Tree.002']} position={[-2.59, 0.02, 0.71]}>
        <mesh geometry={nodes.SnowBall045.geometry} material={materials['Snow.047']} position={[0, 0.34, 0]} />
      </mesh>
      <mesh geometry={nodes.Plane030.geometry} material={materials['Tree.002']} position={[2.16, 0, -1.68]}>
        <mesh geometry={nodes.SnowBall041.geometry} material={materials['Snow.004']} position={[0.04, 0.91, -0.06]} />
      </mesh>
      <mesh geometry={nodes.Plane001.geometry} material={materials['Tree.002']} position={[2.31, 0.01, -0.5]} rotation={[Math.PI, -1.1, Math.PI]}>
        <mesh geometry={nodes.SnowBall042.geometry} material={materials['Snow.005']} position={[0.03, 0.39, 0.04]} rotation={[-Math.PI, 1.1, -Math.PI]} />
      </mesh>
      <mesh geometry={nodes.Plane003.geometry} material={materials['Tree.002']} position={[2.47, 0, 0.69]} rotation={[Math.PI, -1.28, Math.PI]}>
        <mesh geometry={nodes.SnowBall043.geometry} material={materials['Snow.006']} position={[0.01, 0.23, 0]} rotation={[-Math.PI, 1.28, -Math.PI]} />
      </mesh>
      <mesh geometry={nodes.Plane004.geometry} material={materials['Tree.002']} position={[1.67, 0.05, -2.79]} rotation={[0, -0.29, 0]}>
        <mesh geometry={nodes.SnowBall044.geometry} material={materials['Snow.014']} position={[0.1, 0.96, 0.02]} rotation={[0, 0.29, 0]} />
      </mesh>
      <mesh geometry={nodes.Plane005.geometry} material={materials['Tree.002']} position={[-2.06, 0, -1.09]} rotation={[Math.PI, -0.13, Math.PI]}>
        <mesh geometry={nodes.SnowBall048.geometry} material={materials['Snow.050']} position={[-0.01, 0.7, 0.03]} rotation={[-Math.PI, 0.13, -Math.PI]} />
      </mesh>
      <mesh geometry={nodes.Plane006.geometry} material={materials['Tree.002']} position={[-1.9, 0, -2.62]} rotation={[0, -0.61, 0]}>
        <mesh geometry={nodes.SnowBall050.geometry} material={materials.Snow} position={[0.03, 1.17, -0.12]} rotation={[0, -0.09, 0]} />
      </mesh>
      <mesh geometry={nodes.Plane007.geometry} material={materials['Tree.002']} position={[2.98, 0, -1.03]}>
        <mesh geometry={nodes.SnowBall040.geometry} material={materials['Snow.020']} position={[0.04, 0.51, -0.04]} />
      </mesh>
      <mesh geometry={nodes.Plane009.geometry} material={materials['Tree.002']} position={[-2.92, 0, -1.84]} rotation={[Math.PI, -1.1, Math.PI]}>
        <mesh geometry={nodes.SnowBall049.geometry} material={materials['Snow.051']} position={[0.03, 0.52, 0.05]} rotation={[-Math.PI, 1.1, -Math.PI]} />
      </mesh>
      <mesh geometry={nodes.Plane010.geometry} material={materials['Tree.002']} position={[-2.08, 0, 0.05]} rotation={[Math.PI, -1.1, Math.PI]}>
        <mesh geometry={nodes.SnowBall047.geometry} material={materials['Snow.049']} position={[0.01, 0.18, 0.02]} rotation={[-Math.PI, 1.1, -Math.PI]} />
      </mesh>
      <mesh geometry={nodes.Plane011.geometry} material={materials['Tree.002']} position={[2.96, 0.01, 0.05]} rotation={[Math.PI, -1.1, Math.PI]}>
        <mesh geometry={nodes.SnowBall020.geometry} material={materials['Snow.002']} position={[0.01, 0.18, 0.02]} rotation={[-Math.PI, 1.1, -Math.PI]} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/meshes/portal1.glb')
