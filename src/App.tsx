import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import type { Mesh } from 'three'

function Esfera() {
  const esfera = useRef<Mesh>(null)
  const [color, setColor] = useState('mediumseagreen')
  const [encima, setEncima] = useState(false)

  useFrame((_state, delta) => {
    if (esfera.current) {
      esfera.current.rotation.y -= delta
      esfera.current.rotation.x += delta * 0.5
    }
  })

  return (
    <mesh
      ref={esfera}
      position={[0, 0, 0]}
      scale={encima ? 1.2 : 1}
      onClick={() => setColor(color === 'mediumseagreen' ? 'gold' : 'mediumseagreen')}
      onPointerOver={() => setEncima(true)}
      onPointerOut={() => setEncima(false)}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function Cubo() {
  const cubo = useRef<Mesh>(null)
  const [color, setColor] = useState('royalblue')
  const [encima, setEncima] = useState(false)

  useFrame((_state, delta) => {
    if (cubo.current) {
      cubo.current.rotation.y += delta * 0.7
      cubo.current.rotation.x += delta * 0.4
    }
  })

  return (
    <mesh
      ref={cubo}
      position={[-2.5, 0, 0]}
      scale={encima ? 1.2 : 1}
      onClick={() => setColor(color === 'royalblue' ? 'cyan' : 'royalblue')}
      onPointerOver={() => setEncima(true)}
      onPointerOut={() => setEncima(false)}
    >
      <boxGeometry args={[1.3, 1.3, 1.3]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
    </mesh>
  )
}

function Cono() {
  const cono = useRef<Mesh>(null)
  const [color, setColor] = useState('mediumpurple')
  const [encima, setEncima] = useState(false)

  useFrame((_state, delta) => {
    if (cono.current) {
      cono.current.rotation.y -= delta * 0.9
      cono.current.rotation.z += delta * 0.3
    }
  })

  return (
    <mesh
      ref={cono}
      position={[2.5, 0, 0]}
      scale={encima ? 1.2 : 1}
      onClick={() => setColor(color === 'mediumpurple' ? 'orange' : 'mediumpurple')}
      onPointerOver={() => setEncima(true)}
      onPointerOut={() => setEncima(false)}
    >
      <coneGeometry args={[0.9, 1.6, 32]} />
      <meshStandardMaterial color={color} roughness={0.4} />
    </mesh>
  )
}

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 7] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Cubo />
        <Esfera />
        <Cono />

        <OrbitControls />
        <Environment files="/alex-bdnr-GNNoZa8zVwY-unsplash.jpg" background />
      </Canvas>
    </div>
  )
}