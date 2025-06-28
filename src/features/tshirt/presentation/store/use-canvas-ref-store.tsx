import type { Canvas, FabricImage } from "fabric";
import { create } from "zustand";

interface CanvasRefStore {
	fabricCanvas: Canvas | null;
	fabricImage: FabricImage | null;
	setFabricCanvas: (canvas: Canvas | null) => void;
	setFabricImage: (image: FabricImage | null) => void;
}

export const useCanvasRefStore = create<CanvasRefStore>((set) => ({
	fabricCanvas: null,
	fabricImage: null,
	setFabricCanvas: (canvas) => set({ fabricCanvas: canvas }),
	setFabricImage: (image) => set({ fabricImage: image }),
}));
