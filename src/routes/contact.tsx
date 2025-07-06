import { createFileRoute } from "@tanstack/react-router";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/contact")({
	component: Contact,
});

function Contact() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle>Contact</CardTitle>
					<CardDescription>
						This site is still under construction. Come back later.
					</CardDescription>
				</CardHeader>
			</Card>
		</div>
	);
}
