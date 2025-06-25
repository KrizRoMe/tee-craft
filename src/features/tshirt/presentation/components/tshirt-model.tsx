import { Html, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import type { Mesh } from "three";
import { useTshirtColor } from "../hooks/use-tshirt-color";
import { useTshirtMaterial } from "../hooks/use-tshirt-material";
import { TshirtLogoLoader } from "./thsirt-logo-loader";
import { TshirtLogoTexture } from "./tshirt-logo-texture";

export function TShirtModel() {
	const { scene, materials, nodes } = useGLTF("/tshirt-model.glb");

	const materialName = "lambert1";
	const tshirtMesh = nodes.T_Shirt_male as Mesh;

	useTshirtMaterial({ scene, materials, materialName });
	useTshirtColor({ scene });

	return (
		<group scale={2.5}>
			<mesh geometry={tshirtMesh.geometry} material={tshirtMesh.material}>
				<Suspense
					fallback={
						<Html center>
							<TshirtLogoLoader />
						</Html>
					}
				>
					<TshirtLogoTexture />
				</Suspense>
			</mesh>
		</group>
	);
}
