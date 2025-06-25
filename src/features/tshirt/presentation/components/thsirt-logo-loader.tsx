"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export function TshirtLogoLoader() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					return 100;
				}
				return prev + 10;
			});
		}, 150);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex w-[100px] flex-col items-center gap-4">
			<Progress value={progress} className="w-full" />
		</div>
	);
}
