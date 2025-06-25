import { Decal, useTexture } from "@react-three/drei";
import { useLogoStore } from "../store/use-logo-store";

export function TshirtLogoTexture() {
	const { selectedLogoUrl } = useLogoStore();
	const logoTexture = useTexture(selectedLogoUrl || "/image-01.png");

	return (
		<>
			{logoTexture && (
				<Decal
					position={[0, 0, 0.1]}
					rotation={[0, 0, 0]}
					scale={0.12}
					map={logoTexture}
				/>
			)}
		</>
	);
}
