"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Camera } from "lucide-react";
import html2canvas from "html2canvas-pro";
import { useCanvasExportStore } from "../store/use-canvas-export";
import { useState } from "react";

export function ExportCanvas() {
	const containerRef = useCanvasExportStore((state) => state.containerRef);
	const [open, setOpen] = useState(false);

	const handleExport = async () => {
		if (!containerRef?.current) {
			console.warn("No hay referencia al canvas para exportar");
			return;
		}

		const canvas = await html2canvas(containerRef.current, {
			useCORS: true,
			scale: 2,
		});
		const dataUrl = canvas.toDataURL("image/png");

		const link = document.createElement("a");
		link.href = dataUrl;
		link.download = "tshirt-export.png";
		link.click();

		setOpen(false);
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button variant="ghost" size="icon" onClick={handleExport}>
					<Camera className="h-4 w-4" />
				</Button>
			</PopoverTrigger>
		</Popover>
	);
}
