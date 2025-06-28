"use client";

import { Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { getGradientColor } from "../lib/utils";
import { Suspense, useEffect, useRef } from "react";
import { useColorStore } from "../store/use-color-store";
import { TShirtModel } from "./tshirt-model";
import { TShirtSkeleton } from "./tshirt-skeleton";
import { useCanvasExportStore } from "../store/use-canvas-export";

export function TShirtCanvas() {
	const { selectedColor } = useColorStore();
	const containerRef = useRef<HTMLDivElement>(null);
	const setContainerRef = useCanvasExportStore(
		(state) => state.setContainerRef,
	);

	// biome-ignore lint/correctness/useExhaustiveDependencies: Don't need more deps
	useEffect(() => {
		if (containerRef.current) {
			setContainerRef(containerRef as React.RefObject<HTMLDivElement>);
		}
	}, [containerRef, setContainerRef]);

	return (
		<div
			ref={containerRef}
			className="absolute inset-0 z-0 flex items-center justify-center"
		>
			<Canvas
				camera={{ position: [0, 0, 3], fov: 50 }}
				gl={{ preserveDrawingBuffer: true }}
				style={{ background: getGradientColor(selectedColor) }}
			>
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
