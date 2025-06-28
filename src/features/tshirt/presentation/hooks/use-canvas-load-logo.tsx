import { type Canvas, FabricImage } from "fabric";
import { type RefObject, useEffect } from "react";
import { useCanvasRefStore } from "../store/use-canvas-ref-store";
import { useLogoStore } from "../store/use-logo-store";

interface useCanvasLoadLogoProps {
	fabricCanvasRef: RefObject<Canvas | null>;
	fabricImageRef: RefObject<FabricImage | null>;
}

export function useCanvasLoadLogo({
	fabricCanvasRef,
	fabricImageRef,
}: useCanvasLoadLogoProps) {
	const { selectedLogoUrl, logoTransform } = useLogoStore();

	// biome-ignore lint/correctness/useExhaustiveDependencies: Don't need more deps
	useEffect(() => {
		let isMounted = true;

		const fabricCanvas = fabricCanvasRef.current;
		console.log("fabricCanvas", fabricCanvas);

		if (!fabricCanvas || !selectedLogoUrl) return;

		FabricImage.fromURL(selectedLogoUrl).then((image) => {
			if (!isMounted) return;

			fabricCanvas.clear();
			fabricImageRef.current = image;
			useCanvasRefStore.getState().setFabricImage(image);

			const { width: canvasWidth, height: canvasHeight } = fabricCanvas;

			image.set({
				left: logoTransform.position.x * canvasWidth,
				top: logoTransform.position.y * canvasHeight,
				originX: "center",
				originY: "center",
				scaleX: logoTransform.scale.x || 1,
				scaleY: logoTransform.scale.y || 1,
				angle: (logoTransform.rotation * 180) / Math.PI,
				hasControls: true,
				hasBorders: true,
				selectable: true,
			});

			const updateTransform = () => {
				const { left, top, scaleX, scaleY, angle } = image;
				if (
					typeof left !== "number" ||
					typeof top !== "number" ||
					typeof scaleX !== "number" ||
					typeof scaleY !== "number" ||
					typeof angle !== "number"
				)
					return;

				useLogoStore.getState().setLogoTransform({
					position: {
						x: left / canvasWidth,
						y: top / canvasHeight,
					},
					scale: {
						x: scaleX,
						y: scaleY,
					},
					rotation: (angle * Math.PI) / 180,
				});
			};

			image.on("moving", updateTransform);
			image.on("scaling", updateTransform);
			image.on("rotating", updateTransform);

			fabricCanvas.add(image);
			fabricCanvas.setActiveObject(image);
			fabricCanvas.renderAll();
		});

		return () => {
			isMounted = false;
		};
	}, [selectedLogoUrl, fabricCanvasRef.current]);

	return null;
}
