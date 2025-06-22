import { Download, Rotate3D, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BottomBar() {
	return (
		<div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 flex gap-4 bg-background p-2 px-4 rounded-full shadow-md">
			<Button variant="ghost" size="icon">
				<Rotate3D />
			</Button>
			<Button variant="ghost" size="icon">
				<Shirt />
			</Button>
			<Button variant="ghost" size="icon">
				<Download />
			</Button>
		</div>
	);
}
