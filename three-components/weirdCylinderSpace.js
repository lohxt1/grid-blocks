import * as THREE from "three";
import React, { Suspense } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";

const near = 0.1;
const far = 10000;
const width = 1024;
const height = 1024;

const WeirdCylinderShape = (props) => {
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
          <mesh>
            <cylinderBufferGeometry
              attach="geometry"
              args={[100, 25, 130, 36]}
            />
            <meshStandardMaterial
              attach="material"
              wireframe
              color={0x000000}
            />
          </mesh>
          <mesh position={[5, 5, 2]}>
            <cylinderBufferGeometry
              attach="geometry"
              args={[100, 25, 130, 36]}
            />
            <meshStandardMaterial
              attach="material"
              wireframe
              color={0xff5500}
            />
          </mesh>
        </Suspense>
      </Canvas>
    </>
  );
};

export default WeirdCylinderShape;

{
  /* <mesh>
<cylinderBufferGeometry attach="geometry" args={[40, 15, 50, 16]} />
<meshStandardMaterial attach="material" wireframe color={0x000000} />
</mesh> */
}
