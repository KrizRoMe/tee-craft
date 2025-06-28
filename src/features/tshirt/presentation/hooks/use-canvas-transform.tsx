import type { Canvas, FabricImage } from "fabric";
import { type RefObject, useEffect } from "react";
import { useLogoStore } from "../store/use-logo-store";

interface useCanvasTransformProps {
	fabricCanvasRef: RefObject<Canvas | null>;
	fabricImageRef: RefObject<FabricImage | null>;
}

export function useCanvasTransform({
	fabricCanvasRef,
	fabricImageRef,
}: useCanvasTransformProps) {
	const { logoTransform } = useLogoStore();

	// biome-ignore lint/correctness/useExhaustiveDependencies: Don't need more deps
	useEffect(() => {
		const fabricCanvas = fabricCanvasRef.current;
		const image = fabricImageRef.current;
		if (!fabricCanvas || !image) return;

		const { width: canvasWidth, height: canvasHeight } = fabricCanvas;

		image.set({
			left: logoTransform.position.x * canvasWidth,
			top: logoTransform.position.y * canvasHeight,
			scaleX: logoTransform.scale.x,
			scaleY: logoTransform.scale.y,
			angle: (logoTransform.rotation * 180) / Math.PI,
		});

		image.setCoords();
		fabricCanvas.renderAll();
	}, [logoTransform]);

	return null;
}
