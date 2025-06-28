import { TshirtLogoUploader } from "./tshirt-logo-uploader";
import { TshirtReset } from "./tshirt-reset";

export function TshirtPreviewControls() {
	return (
		<div className="flex gap-1">
			<TshirtLogoUploader />
			<TshirtReset />
		</div>
	);
}
