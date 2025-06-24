"use client";

import { create } from "zustand";
import { DEFAULT_COLOR } from "../lib/constants";

interface ColorStore {
	selectedColor: string;
	setSelectedColor: (selectedColor: string) => void;
}

export const useColorStore = create<ColorStore>((set) => ({
	selectedColor: DEFAULT_COLOR,
	setSelectedColor: (selectedColor) => set({ selectedColor }),
}));
