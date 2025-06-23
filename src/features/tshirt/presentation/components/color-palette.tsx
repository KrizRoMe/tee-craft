"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Palette, Copy, Check } from "lucide-react";
import { useColorPaletteStore } from "../store/use-color-palette-store";

const compactColors = ["#000000", "#ffffff", "#3b82f6", "#ef4444", "#22c55e"];

interface ColorPalettePopoverProps {
	defaultColor?: string;
}

export default function ColorPalettePopover({
	defaultColor = "#ffffff",
}: ColorPalettePopoverProps) {
	const { colorPalette, setColorPalette } = useColorPaletteStore();
	const [hexInput, setHexInput] = useState(defaultColor);
	const [copied, setCopied] = useState(false);
	const [open, setOpen] = useState(false);

	const isValidHex = (hex: string) => {
		return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
	};

	const handleHexChange = (value: string) => {
		setHexInput(value);
		if (isValidHex(value)) {
			setColorPalette(value);
		}
	};

	const handleColorSelect = (color: string) => {
		setColorPalette(color);
		setHexInput(color);
	};

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(colorPalette);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button variant="ghost" size="icon">
					<Palette className="h-4 w-4" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-3" align="start">
				<div className="space-y-3">
					{/* Color Preview */}
					<div className="flex items-center gap-2">
						<div
							className="w-8 h-8 rounded-sm border border-gray-200"
							style={{ backgroundColor: colorPalette }}
						/>
						<div className="flex-1 flex items-center gap-1">
							<span className="font-mono text-xs text-gray-600">
								{colorPalette}
							</span>
							<Button
								variant="ghost"
								size="icon"
								className="h-6 w-6"
								onClick={copyToClipboard}
							>
								{copied ? (
									<Check className="h-3 w-3 text-green-600" />
								) : (
									<Copy className="h-3 w-3" />
								)}
							</Button>
						</div>
					</div>

					{/* Hex Input */}
					<div className="flex gap-2">
						<div className="space-y-2">
							<Input
								value={hexInput}
								onChange={(e) => handleHexChange(e.target.value)}
								placeholder="#000000"
								className="font-mono text-xs h-8 w-32"
							/>
							{hexInput && !isValidHex(hexInput) && (
								<p className="text-xs text-red-500 max-w-32">
									Formato hexadecimal inválido
								</p>
							)}
						</div>
						<div className="relative">
							<input
								type="color"
								value={colorPalette}
								onChange={(e) => handleColorSelect(e.target.value)}
								className="absolute inset-0 w-8 h-8 opacity-0 cursor-pointer"
							/>
							<div
								className="w-8 h-8 rounded-full border border-gray-200"
								style={{ backgroundColor: colorPalette }}
							/>
						</div>
					</div>

					{/* Compact Color Grid */}
					<div className="grid grid-cols-5 gap-1">
						{compactColors.map((color) => (
							<button
								type="button"
								key={color}
								onClick={() => handleColorSelect(color)}
								className={`w-7 h-7 rounded-sm border transition-all hover:scale-105 ${
									colorPalette === color
										? "border-gray-900 ring-1 ring-gray-900"
										: "border-gray-200 hover:border-gray-300"
								}`}
								style={{ backgroundColor: color }}
								title={color}
							/>
						))}
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
