"use client";

import type { Canvas, FabricImage } from "fabric";
import { useRef } from "react";
import { useCanvasLoadLogo } from "../hooks/use-canvas-load-logo";
import { useCanvasTransform } from "../hooks/use-canvas-transform";
import { useInitialCanvas } from "../hooks/use-initial-canvas";

export function TshirtPreviewShapeCanvas() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const fabricCanvasRef = useRef<Canvas | null>(null);
	const fabricImageRef = useRef<FabricImage | null>(null);

	useInitialCanvas({ canvasRef, fabricCanvasRef });
	useCanvasLoadLogo({ fabricCanvasRef, fabricImageRef });
	useCanvasTransform({ fabricCanvasRef, fabricImageRef });

	return (
		<div className="absolute top-0 left-0 w-full h-full">
			<canvas ref={canvasRef} className="w-full h-full block" />
		</div>
	);
}
