import React, { useRef, useState } from 'react'
import { useGLTF, Reflector } from '@react-three/drei'
import shoe from '@/models/shoe.gltf'
import state from '@/utils/state';
import { useFrame } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import Cursor from './Cursor';

const Shoes = (props) => {
  const ref = useRef();
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF(shoe);
  const [hovered, setHovered] = useState(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20);
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <>
      <group
        ref={ref}
        onPointerOver={(e) => (e.stopPropagation(), setHovered(e.object.material.name))}
        onPointerOut={(e) => e.intersections.length === 0 && setHovered(null)}
        onPointerMissed={() => (state.current = null)}
        onClick={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}>
        <mesh receiveShadow castShadow geometry={nodes.shoe.geometry} material={materials.laces} material-color={snap.items.laces} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={snap.items.mesh} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={snap.items.caps} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={snap.items.inner} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={snap.items.sole} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={snap.items.stripes} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_6.geometry} material={materials.band} material-color={snap.items.band} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={snap.items.patch} />
      </group>
      <Cursor hovered={hovered} />
      <Reflector
        blur={[300, 100]} // Adjust blur for reflection softness
        mixBlur={1} // Adjust reflection mix
        mixStrength={0.9} // Adjust strength of reflection
        resolution={512} // Resolution of the reflection
        args={[100, 100]} // Size of the reflector
        position={[0, -0.1, 0]} // Position of the reflector
        rotation={[-Math.PI / 2, 0, 0]} // Rotation of the reflector
        color="black" // Reflector color
      >
        {(Material) => <Material color="#000" />}
      </Reflector>
    </>
  );
}

export default Shoes;
