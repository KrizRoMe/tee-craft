import { TshirtPreviewShapeCanvas } from "./tshirt-preview-shape-canvas";

export function TshirtPreviewShape() {
	return (
		<div className="relative w-full max-w-sm mx-auto">
			<svg
				viewBox="0 0 200 220"
				className="w-full h-auto"
				aria-hidden="true"
				focusable="false"
			>
				<path
					d="M50 30 L50 15 Q50 6 56 6 L144 6 Q150 6 150 15 L150 30 L170 40 L170 210 Q170 214 166 214 L34 214 Q30 214 30 210 L30 40 Z"
					fill="white"
					stroke="#e5e7eb"
					strokeWidth="2"
				/>
				<path
					d="M80 6 Q100 20 120 6"
					fill="none"
					stroke="#e5e7eb"
					strokeWidth="2"
				/>
				<path
					d="M50 30 Q38 35 30 40"
					fill="none"
					stroke="#e5e7eb"
					strokeWidth="2"
				/>
				<path
					d="M150 30 Q162 35 170 40"
					fill="none"
					stroke="#e5e7eb"
					strokeWidth="2"
				/>
			</svg>

			<TshirtPreviewShapeCanvas />
		</div>
	);
}
