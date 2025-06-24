"use client";

import { Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { getGradientColor } from "../lib/utils";
import { useColorStore } from "../store/use-color-store";
import { TShirtModel } from "./tshirt-model";
import { TShirtSkeleton } from "./tshirt-skeleton";

export function TShirtCanvas() {
	const { selectedColor } = useColorStore();

	return (
		<div
			className="absolute inset-0 z-0 flex items-center justify-center"
			style={{ backgroundImage: getGradientColor(selectedColor) }}
		>
			<Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
				<ambientLight intensity={0.5} />
				<directionalLight position={[5, 5, 5]} intensity={1} />
				<Suspense
					fallback={
						<Html center>
							<TShirtSkeleton />
						</Html>
					}
				>
					<TShirtModel />
				</Suspense>
				<OrbitControls
					enablePan={false}
					enableZoom={true}
					minDistance={1}
					maxDistance={4}
				/>
			</Canvas>
		</div>
	);
}
