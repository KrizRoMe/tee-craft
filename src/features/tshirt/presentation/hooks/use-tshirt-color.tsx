"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useColorStore } from "../store/use-color-store";

interface UseTshirtColorProps {
	scene: THREE.Object3D;
}

export function useTshirtColor({ scene }: UseTshirtColorProps) {
	const { selectedColor } = useColorStore();
	const meshRefs = useRef<THREE.Mesh[]>([]);
	const targetColor = useRef(new THREE.Color(selectedColor));
	const TRANSITION_DURATION = 0.1;

	useEffect(() => {
		const meshes: THREE.Mesh[] = [];

		scene.traverse((child) => {
			if (!(child instanceof THREE.Mesh)) return;
			if (!(child.material instanceof THREE.MeshStandardMaterial)) return;

			meshes.push(child);
		});

		meshRefs.current = meshes;
	}, [scene]);

	useEffect(() => {
		targetColor.current.set(selectedColor);
	}, [selectedColor]);

	useFrame(() => {
		meshRefs.current.forEach((mesh) => {
			const material = mesh.material as THREE.MeshStandardMaterial;
			if (!material) return;

			material.color.lerp(targetColor.current, TRANSITION_DURATION);
		});
	});
}
