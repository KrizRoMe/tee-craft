"use client";

import { useEffect } from "react";
import * as THREE from "three";
import { useColorPaletteStore } from "../store/use-color-palette-store";

interface UseTshirtColorProps {
	scene: THREE.Object3D;
}

export function useTshirtColor({ scene }: UseTshirtColorProps) {
	const { colorPalette } = useColorPaletteStore();

	useEffect(() => {
		scene.traverse((child) => {
			if (!(child instanceof THREE.Mesh)) return;
			if (!(child.material instanceof THREE.MeshStandardMaterial)) return;

			const newMaterial = child.material.clone();
			newMaterial.color = new THREE.Color(colorPalette);
			newMaterial.needsUpdate = true;
			child.material = newMaterial;
		});
	}, [scene, colorPalette]);
}
