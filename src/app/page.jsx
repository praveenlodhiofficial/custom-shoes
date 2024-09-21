"use client"

import Picker from '@/components/Picker'
import Shoes from '@/components/Shoes'
import { ContactShadows, Environment, OrbitControls, Reflector } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import React from 'react'

const Page = () => {
  return (
    <>
      <div className='bg-red-500 h-[100vh] w-[100vw]'>
        <Canvas shadows className='relative bg-black h-[90%] w-[90%]' camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <Shoes position={[0, 0, -3]} />
                  
          <Environment preset="city" />
          <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
          <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
          <Picker />

        </Canvas>
      </div>
    </>
  );
}

export default Page;
