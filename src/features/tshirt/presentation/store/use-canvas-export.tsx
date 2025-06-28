"use client";

import { create } from "zustand";

interface CanvasContainer {
	containerRef: React.RefObject<HTMLDivElement> | null;
	setContainerRef: (
		containerRef: React.RefObject<HTMLDivElement> | null,
	) => void;
}

export const useCanvasExportStore = create<CanvasContainer>((set) => ({
	containerRef: null,
	setContainerRef: (containerRef) => set({ containerRef }),
}));
