"use client";

import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCanvasRefStore } from "../store/use-canvas-ref-store";
import { useLogoStore } from "../store/use-logo-store";

export function TshirtReset() {
	const { resetLogo } = useLogoStore();
	const { fabricCanvas, fabricImage, setFabricImage } = useCanvasRefStore();

	const handleReset = () => {
		if (fabricCanvas && fabricImage) {
			fabricCanvas.remove(fabricImage);
			fabricCanvas.renderAll();
			setFabricImage(null);
		}
		resetLogo();
	};

	return (
		<Button
			size="icon"
			variant="ghost"
			className="h-6 w-6"
			onClick={handleReset}
		>
			<RotateCcw className="h-3 w-3" />
		</Button>
	);
}
