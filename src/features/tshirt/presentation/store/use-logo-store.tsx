"use client";

import { create } from "zustand";

interface LogoStore {
	selectedLogoUrl: string | null;
	setSelectedLogoUrl: (selectedLogoUrl: string) => void;
}

export const useLogoStore = create<LogoStore>((set) => ({
	selectedLogoUrl: null,
	setSelectedLogoUrl: (selectedLogoUrl) => set({ selectedLogoUrl }),
}));
