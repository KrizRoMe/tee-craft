import { useGLTF } from "@react-three/drei";

export function TShirtModel() {
	const tshirtGlb = useGLTF("/tshirt-model.glb");
	return <primitive object={tshirtGlb.scene} scale={2.5} />;
}
