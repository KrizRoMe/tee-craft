import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ColorPalette } from "./color-palette";
import { TshirtLogoUploader } from "./tshirt-logo-uploader";

export function SideToolbar() {
	return (
		<div className="absolute z-10 left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 bg-background p-2 rounded-lg shadow-md">
			<ColorPalette />
			<TshirtLogoUploader />

			<Button variant="ghost" size="icon">
				<Bot />
			</Button>
		</div>
	);
}
