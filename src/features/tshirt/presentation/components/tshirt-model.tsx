import { useGLTF } from "@react-three/drei";
import { useTshirtColor } from "../hooks/use-tshirt-color";
import { useTshirtMaterial } from "../hooks/use-tshirt-material";

export function TShirtModel() {
	const { scene, materials } = useGLTF("/tshirt-model.glb");
	const materialName = "lambert1";

	useTshirtMaterial({ scene, materials, materialName });
	useTshirtColor({ scene });

	return <primitive object={scene} scale={2.5} />;
}
