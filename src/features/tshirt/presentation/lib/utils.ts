import { MeshBasicMaterial, type Texture } from "three";
import { MAX_EXPORTS_PER_DAY, STORAGE_KEY } from "./constants";

export function getGradientColor(baseColor: string) {
	console.log("[Gradient] baseColor:", baseColor);

	return `linear-gradient(to bottom, ${baseColor} 0%, ${baseColor}cc 50%, ${baseColor}88 100%)`;
}

export function createLogoMaterial(texture: Texture) {
	return new MeshBasicMaterial({
		map: texture,
		transparent: true,
		toneMapped: false,
		depthWrite: false,
		depthTest: true,
		polygonOffset: true,
		polygonOffsetFactor: -2,
		alphaTest: 0.1,
	});
}

export function canExportToday(): boolean {
	const raw = localStorage.getItem(STORAGE_KEY);
	const today = new Date().toISOString().slice(0, 10);

	let exports: string[] = [];
	if (raw) {
		try {
			exports = JSON.parse(raw);
		} catch {
			exports = [];
		}
	}

	const todayExports = exports.filter((date) => date === today);
	return todayExports.length < MAX_EXPORTS_PER_DAY;
}

export function registerExport() {
	const raw = localStorage.getItem(STORAGE_KEY);
	const today = new Date().toISOString().slice(0, 10);
	let exports: string[] = [];

	try {
		exports = raw ? JSON.parse(raw) : [];
	} catch {
		exports = [];
	}

	exports.push(today);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(exports));
}

export function cleanOldExports() {
	const raw = localStorage.getItem(STORAGE_KEY);
	if (!raw) return;

	const today = new Date().toISOString().slice(0, 10);
	let exports: string[] = [];

	try {
		exports = JSON.parse(raw);
	} catch {
		exports = [];
	}

	const filtered = exports.filter((date) => date === today);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}
