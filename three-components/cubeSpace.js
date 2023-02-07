import * as THREE from "three";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

const near = 0.1;
const far = 10000;
const width = 1024;
const height = 1024;

const CubeSpace = (props) => {
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
            <boxBufferGeometry
              attach="geometry"
              args={[400, 200, 20, 20, 20, 20]}
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

export default CubeSpace;
