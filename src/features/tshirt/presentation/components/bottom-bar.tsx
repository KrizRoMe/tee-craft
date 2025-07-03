import { Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function BottomBar() {
	return (
		<div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 flex gap-4 bg-background p-2 px-4 rounded-full shadow-md">
			<Badge>
				<Code className="w-3 h-3" />
				By KrizRome
			</Badge>
			<Link
				href="https://www.buymeacoffee.com/krizrome"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=krizrome&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff"
					alt="Buy Me A Coffee"
					width={150}
					height={50}
				/>
			</Link>
		</div>
	);
}
