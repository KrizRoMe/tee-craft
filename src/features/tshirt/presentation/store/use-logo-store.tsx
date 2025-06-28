"use client";

import { create } from "zustand";
import { DEFAULT_LOGO_TRANSFORM } from "../lib/constants";

interface LogoStore {
	selectedLogoUrl: string | null;
	logoTransform: {
		position: { x: number; y: number };
		scale: { x: number; y: number };
		rotation: number;
	};
	baseScale: number;
	setSelectedLogoUrl: (selectedLogoUrl: string) => void;
	setLogoTransform: (logoTransform: {
		position: { x: number; y: number };
		scale: { x: number; y: number };
		rotation: number;
	}) => void;
	setBaseScale: (baseScale: number) => void;
	resetLogo: () => void;
}

export const useLogoStore = create<LogoStore>((set) => ({
	selectedLogoUrl: null,
	logoTransform: DEFAULT_LOGO_TRANSFORM,
	baseScale: 1,
	setSelectedLogoUrl: (selectedLogoUrl) => set({ selectedLogoUrl }),
	setLogoTransform: (logoTransform) =>
		set({ logoTransform: { ...logoTransform } }),
	setBaseScale: (scale) => set({ baseScale: scale }),
	resetLogo: () =>
		set({ selectedLogoUrl: null, logoTransform: DEFAULT_LOGO_TRANSFORM }),
}));
