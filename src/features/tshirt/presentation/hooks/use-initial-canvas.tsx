import { Canvas } from "fabric";
import { type RefObject, useEffect } from "react";
import { useCanvasRefStore } from "../store/use-canvas-ref-store";

interface useInitialCanvasProps {
	canvasRef: RefObject<HTMLCanvasElement | null>;
	fabricCanvasRef: RefObject<Canvas | null>;
}

export function useInitialCanvas({
	canvasRef,
	fabricCanvasRef,
}: useInitialCanvasProps) {
	// biome-ignore lint/correctness/useExhaustiveDependencies: Don't need more deps
	useEffect(() => {
		const canvasElement = canvasRef?.current;
		if (!canvasElement) return;

		const fabricCanvas = new Canvas(canvasElement, {
			width: canvasElement.offsetWidth,
			height: canvasElement.offsetHeight,
			selection: false,
		});

		fabricCanvasRef.current = fabricCanvas;
		useCanvasRefStore.getState().setFabricCanvas(fabricCanvas);

		return () => {
			fabricCanvas.dispose();
			useCanvasRefStore.getState().setFabricCanvas(null);
		};
	}, []);

	return null;
}
