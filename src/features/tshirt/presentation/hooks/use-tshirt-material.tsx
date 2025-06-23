"use client";

import { useEffect } from "react";
import * as THREE from "three";

interface UseTshirtColorProps {
	scene: THREE.Object3D;
	materials: Record<string, THREE.Material>;
	materialName: string;
}

export function useTshirtMaterial({
	scene,
	materials,
	materialName,
}: UseTshirtColorProps) {
	useEffect(() => {
		const material = materials[materialName];
		if (!material || !(material instanceof THREE.MeshStandardMaterial)) return;

		scene.traverse((child) => {
			if (!(child instanceof THREE.Mesh)) return;
			child.material = material;
		});
	}, [scene, materials, materialName]);
}
