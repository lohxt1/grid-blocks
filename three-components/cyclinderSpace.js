import * as THREE from "three";
import React, { Suspense } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";

const near = 0.1;
const far = 10000;
const width = 1024;
const height = 1024;

const CylinderSpace = (props) => {
  return (
    <>
      <Canvas
        camera={{
          fov: 50,
          position: [0, 0, 100],
        }}
        style={{
          height: "100%",
          width: "100%",
          // background: '#fff',
          position: "absolute",
        }}
        orthographic
      >
        <Suspense fallback={null}>
          <ambientLight />
          <mesh
            position={[0, -80, 0]}
            rotation={[Math.PI / 10, Math.PI / 10, Math.PI / 30]}
          >
            <cylinderBufferGeometry
              attach="geometry"
              args={[30, 30, 15, 15, 5, 5]}
            />
            <meshStandardMaterial
              attach="material"
              wireframe
              color={0x000000}
            />
          </mesh>
          <mesh position={[0, 40, 0]} rotation={[Math.PI / 10, 0, 0]}>
            <cylinderBufferGeometry
              attach="geometry"
              args={[30, 30, 15, 15, 5, 5]}
            />
            <meshStandardMaterial
              attach="material"
              wireframe
              color={0x000000}
            />
          </mesh>
          <mesh
            position={[0, 0, 0]}
            rotation={[Math.PI / 10, Math.PI / 10, Math.PI / 10]}
          >
            <cylinderBufferGeometry
              attach="geometry"
              args={[30, 30, 15, 15, 5, 5]}
            />
            <meshStandardMaterial
              attach="material"
              wireframe
              color={0x000000}
            />
          </mesh>
          <mesh
            position={[0, -40, 0]}
            rotation={[Math.PI / 10, Math.PI / 10, Math.PI / 30]}
          >
            <cylinderBufferGeometry
              attach="geometry"
              args={[30, 30, 15, 15, 5, 5]}
            />
            <meshStandardMaterial
              attach="material"
              wireframe
              color={0x000000}
            />
          </mesh>
        </Suspense>
      </Canvas>
    </>
  );
};

export default CylinderSpace;

{
  /* <mesh>
<cylinderBufferGeometry attach="geometry" args={[40, 15, 50, 16]} />
<meshStandardMaterial attach="material" wireframe color={0x000000} />
</mesh> */
}
