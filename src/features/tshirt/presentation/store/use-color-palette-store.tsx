"use client";

import { create } from "zustand";

interface ColorPaletteStore {
	colorPalette: string;
	setColorPalette: (colorPalette: string) => void;
}

export const useColorPaletteStore = create<ColorPaletteStore>((set) => ({
	colorPalette: "ffffff",
	setColorPalette: (colorPalette) => set({ colorPalette }),
}));
