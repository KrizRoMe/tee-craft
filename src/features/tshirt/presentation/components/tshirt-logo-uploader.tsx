"use client";

import { FileImage } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLogoStore } from "../store/use-logo-store";

export function TshirtLogoUploader() {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const ALLOWED_IMAGE_TYPE_LIST = ["image/jpeg", "image/png"];

	const { setSelectedLogoUrl } = useLogoStore();

	const handleUploadImage = () => {
		fileInputRef.current?.click();
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) return;

		if (!ALLOWED_IMAGE_TYPE_LIST.includes(file.type)) return;

		const fileUrl = URL.createObjectURL(file);
		setSelectedLogoUrl(fileUrl);
	};

	return (
		<>
			<input
				ref={fileInputRef}
				type="file"
				accept={ALLOWED_IMAGE_TYPE_LIST.join(",")}
				style={{ display: "none" }}
				onChange={handleFileChange}
			/>
			<Button variant="ghost" size="icon" onClick={handleUploadImage}>
				<FileImage />
			</Button>
		</>
	);
}
