import { useProgress, Html } from '@react-three/drei'

export function Loader() {
  const { progress } = useProgress()
  return <Html center>
    <h3 style={{color: 'white', fontFamily:'ChristmasSquad', fontSize:60, textAlign:'center'}}>Loading</h3>
    <h1 style={{color: 'white', fontFamily:'ChristmasSquad', fontSize:100, textAlign:'center', marginTop: -60}}>{progress.toFixed(0)}%</h1>
  </Html>
}