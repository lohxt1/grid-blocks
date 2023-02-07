import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = (props) => {
  const {} = props;
  const ref = useRef();

  useFrame(() => {
    // ref.current.rotation.y += 0.005;
  });

  return (
    <group ref={ref}>
      <mesh>
        <boxBufferGeometry
          attach="geometry"
          args={[300, 300, 300, 20, 20, 20]}
        />
        <meshStandardMaterial attach="material" color={0x000000} wireframe />
      </mesh>
    </group>
  );
};

export default Cube;
