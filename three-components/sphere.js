import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Sphere = (props) => {
	const {} = props;
	const ref = useRef();

	useFrame(() => {
		ref.current.rotation.y += 0.001;
	});

	return (
		<group ref={ref}>
			<mesh>
				<sphereBufferGeometry attach="geometry" args={[150, 50, 50]} />
				<meshStandardMaterial attach="material" color={0x000000} wireframe />
			</mesh>
		</group>
	);
};

export default Sphere;
