import * as THREE from "three";
import React, { Suspense } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";

const near = 0.1;
const far = 10000;
const width = 1024;
const height = 1024;

const RingShape = (props) => {
  return (
    <>
      <Canvas
        camera={{
          fov: 50,
          position: [0, 0, 80],
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
            <ringBufferGeometry attach="geometry" args={[70, 30, 30, 16]} />
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

export default RingShape;
