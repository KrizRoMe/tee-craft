import { ColorPalette } from "./color-palette";
import { ExportCanvas } from "./export-canvas";
import { TshirtPreview } from "./tshirt-preview";

export function SideToolbar() {
	return (
		<div className="absolute z-10 left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 bg-background p-2 rounded-lg shadow-md">
			<ColorPalette />
			<TshirtPreview />
			<ExportCanvas />
		</div>
	);
}
