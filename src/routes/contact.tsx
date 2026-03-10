import { createFileRoute } from "@tanstack/react-router";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
	component: Contact,
});

function Contact() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4">
			<Card className="w-full max-w-lg">
				<CardHeader>
					<CardTitle>Contact</CardTitle>
					<CardDescription>
						Send a quick note and I will get back to you soon.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						className="flex flex-col gap-4"
						onSubmit={(event) => event.preventDefault()}
					>
						<div className="flex flex-col gap-2">
							<Label htmlFor="contact-name">Name</Label>
							<Input
								id="contact-name"
								name="name"
								autoComplete="name"
								placeholder="Your name"
								required
							/>
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="contact-email">Email</Label>
							<Input
								id="contact-email"
								name="email"
								type="email"
								autoComplete="email"
								placeholder="you@example.com"
								required
							/>
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="contact-subject">Subject</Label>
							<Input
								id="contact-subject"
								name="subject"
								placeholder="What is this about?"
								required
							/>
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="contact-message">Message</Label>
							<Textarea
								id="contact-message"
								name="message"
								placeholder="Share a few details"
								rows={5}
								required
							/>
						</div>
						<Button type="submit" className="w-full">
							Send message
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
