import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
	component: Contact,
});

function Contact() {
	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
		onSubmit: async ({ value }) => {
			console.log(value);
			alert("Message sent!");
		},
	});

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle>Contact</CardTitle>
					<CardDescription>Send me a message</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							form.handleSubmit();
						}}
						className="flex flex-col gap-4"
					>
						<form.Field
							name="name"
							validators={{
								onBlur: ({ value }) =>
									!value ? "Name is required" : undefined,
							}}
						>
							{(field) => (
								<div className="flex flex-col gap-2">
									<Label htmlFor="name">Name</Label>
									<Input
										id="name"
										value={field.state.value}
										onChange={(e) => field.handleChange(e.target.value)}
									/>
									{field.state.meta.isTouched &&
									field.state.meta.errors?.length ? (
										<p className="text-sm text-red-500">
											{field.state.meta.errors.join(", ")}
										</p>
									) : null}
								</div>
							)}
						</form.Field>
						<form.Field
							name="email"
							validators={{
								onBlur: ({ value }) =>
									!value
										? "Email is required"
										: !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
											? "Invalid email"
											: undefined,
							}}
						>
							{(field) => (
								<div className="flex flex-col gap-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										type="email"
										value={field.state.value}
										onChange={(e) => field.handleChange(e.target.value)}
									/>
									{field.state.meta.isTouched &&
									field.state.meta.errors?.length ? (
										<p className="text-sm text-red-500">
											{field.state.meta.errors.join(", ")}
										</p>
									) : null}
								</div>
							)}
						</form.Field>
						<form.Field
							name="message"
							validators={{
								onBlur: ({ value }) =>
									!value ? "Message is required" : undefined,
							}}
						>
							{(field) => (
								<div className="flex flex-col gap-2">
									<Label htmlFor="message">Message</Label>
									<Textarea
										id="message"
										value={field.state.value}
										onChange={(e) => field.handleChange(e.target.value)}
									/>
									{field.state.meta.isTouched &&
									field.state.meta.errors?.length ? (
										<p className="text-sm text-red-500">
											{field.state.meta.errors.join(", ")}
										</p>
									) : null}
								</div>
							)}
						</form.Field>
						<Button type="submit" disabled={form.state.isSubmitting}>
							Send
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}

export default Contact;
