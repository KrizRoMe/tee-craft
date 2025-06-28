import { MeshBasicMaterial, type Texture } from "three";

export function getGradientColor(baseColor: string) {
	console.log("[Gradient] baseColor:", baseColor);

	return `linear-gradient(to bottom, ${baseColor} 0%, ${baseColor}cc 50%, ${baseColor}88 100%)`;
}

export function createLogoMaterial(texture: Texture) {
	return new MeshBasicMaterial({
		map: texture,
		transparent: true,
		toneMapped: false,
		depthWrite: false,
		depthTest: true,
		polygonOffset: true,
		polygonOffsetFactor: -2,
		alphaTest: 0.1,
	});
}
