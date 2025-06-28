import { Decal, useTexture } from "@react-three/drei";
import { useMemo } from "react";
import { createLogoMaterial } from "../lib/utils";
import { useLogoStore } from "../store/use-logo-store";

export function TshirtLogoTexture() {
	const { selectedLogoUrl, logoTransform } = useLogoStore();
	const logoTexture = useTexture(selectedLogoUrl || "/tshirt-default-logo.png");

	const LOGO_SCALE = 0.15;
	const MOVEMENT_X_MULTIPLIER = 0.4;
	const MOVEMENT_Y_MULTIPLIER = 0.8;

	const logoMaterial = useMemo(
		() => (logoTexture ? createLogoMaterial(logoTexture) : null),
		[logoTexture],
	);

	const scale: [number, number, number] = useMemo(() => {
		if (!logoTexture?.image) return [0.1, 0.1, 0.1];

		const { width, height } = logoTexture.image;
		const aspect = width / height;
		const base = LOGO_SCALE;
		const scaleFix = 10;

		const { x: scaleX, y: scaleY } = logoTransform.scale;

		const baseX = aspect >= 1 ? base : base * aspect;
		const baseY = aspect >= 1 ? base / aspect : base;

		const x = baseX * scaleX * scaleFix;
		const y = baseY * scaleY * scaleFix;
		const z = 1;

		return [x, y, z];
	}, [logoTexture, logoTransform.scale]);

	const position: [number, number, number] = useMemo(() => {
		const x = (logoTransform.position.x - 0.5) * MOVEMENT_X_MULTIPLIER;
		const y = (0.5 - logoTransform.position.y) * MOVEMENT_Y_MULTIPLIER;
		return [x, y, 0.1];
	}, [logoTransform.position]);

	const rotation: [number, number, number] = [0, 0, -logoTransform.rotation];

	return (
		<>
			{logoTexture && logoMaterial && selectedLogoUrl && (
				<Decal
					position={position}
					rotation={rotation}
					scale={scale}
					map={logoTexture}
					material={logoMaterial}
				/>
			)}
		</>
	);
}
