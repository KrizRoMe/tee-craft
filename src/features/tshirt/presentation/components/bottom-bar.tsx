import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function BottomBar() {
	return (
		<div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 flex gap-4 bg-background p-2 px-4 rounded-full shadow-md">
			<Badge>
				<Code className="w-3 h-3" />
				By KrizRome
			</Badge>
		</div>
	);
}
