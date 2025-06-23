import { Shirt } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function TShirtSkeleton() {
	return (
		<div className="absolute inset-0 bg-primary z-0 flex items-center justify-center">
			<div className="flex flex-col items-center space-y-4">
				<div className="relative">
					<Skeleton className="h-80 w-56 rounded-lg" />
					<div className="absolute inset-0 flex items-center justify-center">
						<Shirt className="h-20 w-20 text-muted-foreground/50" />
					</div>
				</div>
			</div>
		</div>
	);
}
