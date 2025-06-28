"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Shirt } from "lucide-react";
import { useState } from "react";
import { TshirtPreviewShape } from "./tshirt-preview-shape";
import { TshirtPreviewControls } from "./tshirt-preview-controls";

export function TshirtPreview() {
	const [open, setOpen] = useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button variant="ghost" size="icon">
					<Shirt className="h-4 w-4" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-64 p-3" align="start">
				<div className="space-y-3">
					{/* Canvas Area */}
					<div className="relative">
						<div className="flex justify-between mb-2">
							<Label className="text-xs font-medium">
								Vista frontal del polo
							</Label>

							{/* Controls */}
							<TshirtPreviewControls />
						</div>
						<div className="mt-1 relative bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 overflow-hidden">
							{/* Tshirt Shape */}
							<TshirtPreviewShape />
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
