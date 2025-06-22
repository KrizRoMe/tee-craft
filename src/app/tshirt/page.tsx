import { BottomBar } from "@/features/tshirt/presentation/components/bottom-bar";
import { SideToolbar } from "@/features/tshirt/presentation/components/side-toolbar";
import { TShirtCanvas } from "@/features/tshirt/presentation/components/tshirt-canvas";

export default function TShirtPage() {
	return (
		<main className="relative w-full h-screen overflow-hidden">
			<SideToolbar />
			<TShirtCanvas />
			<BottomBar />
		</main>
	);
}
