"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Camera } from "lucide-react";
import html2canvas from "html2canvas-pro";
import { useCanvasExportStore } from "../store/use-canvas-export";
import { useEffect, useState } from "react";
import { canExportToday, cleanOldExports, registerExport } from "../lib/utils";
import { toast } from "sonner";

export function ExportCanvas() {
	const containerRef = useCanvasExportStore((state) => state.containerRef);
	const [open, setOpen] = useState(false);

	const handleExport = async () => {
		if (!containerRef?.current) {
			toast("El canvas no está disponible.");
			return;
		}

		if (!canExportToday()) {
			toast.warning("Límite de exportaciones alcanzado por hoy.");
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

		registerExport();
		setOpen(false);
	};

	useEffect(() => {
		cleanOldExports();
	}, []);

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
