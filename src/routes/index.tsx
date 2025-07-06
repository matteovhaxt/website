import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/")({
	component: Index,
});

const socials = [
	{
		name: "Linkedin",
		icon: Linkedin,
		link: "https://www.linkedin.com/in/matteovhaxt/",
	},
	{
		name: "Github",
		icon: Github,
		link: "https://github.com/matteovhaxt",
	},
	{
		name: "Twitter",
		icon: Twitter,
		link: "https://x.com/matteovhaxt",
	},
	{
		name: "Mail",
		icon: Mail,
		link: "mailto:matteovhaxt@gmail.com",
	},
];

const projects = [
	{
		title: "my-model-context",
		description: "CLI to smootly manage local MCP configurations.",
		link: "https://www.npmjs.com/package/my-model-context",
		github: "https://github.com/matteovhaxt/my-model-context",
	},
];

const work = [
	{
		company: "LLM Studios",
		role: "Co-Founder & CTO",
		image: "llm-logo.jpeg",
		timeframe: "Feb 2024 - Mar 2025",
	},
	{
		company: "Bling",
		role: "Mobile App Developer",
		image: "bling-logo.jpeg",
		timeframe: "Mar 2023 - Feb 2024",
	},
	{
		company: "Earrn",
		role: "Co-Founder & CTO",
		image: "earrn-logo.jpeg",
		timeframe: "Jul 2021 - Mar 2023",
	},
	{
		company: "CODE University",
		role: "Academic Assistant",
		image: "code-logo.jpeg",
		timeframe: "Feb 2021 - Jul 2021",
	},
];

const education = [
	{
		school: "CODE University",
		degree: "Bachelor of Science - BSc Software Engineering",
		image: "code-logo.jpeg",
		timeframe: "2020 - 2025",
	},
	{
		school: "XU Exponential University",
		degree: "Bachelor of Applied Science - BASc Digital Business",
		image: "xu-logo.jpeg",
		timeframe: "2019 - 2020",
	},
];

export default function Index() {
	return (
		<>
			<div className="fixed top-4 right-4">
				<ThemeToggle />
			</div>
			<div className="flex flex-col items-center justify-center gap-8 py-24 px-4">
				<section className="w-full md:w-1/2">
					<div className="flex flex-col md:flex-row items-center justify-start w-full gap-4 md:gap-8">
						<Avatar className="w-32 h-32 md:w-48 md:h-48">
							<AvatarImage src={"/portrait.png"} />
							<AvatarFallback>MVH</AvatarFallback>
						</Avatar>
						<div className="flex flex-col gap-2">
							<h1 className="text-2xl font-bold">Matteo von Haxthausen</h1>
							<p className="text-lg text-gray-500">
								Software Engineer based in Berlin
							</p>
							<div className="flex items-center justify-center md:justify-start gap-2">
								{socials.map((social) => (
									<Button
										key={social.name}
										variant="ghost"
										size="icon"
										onClick={() => window.open(social.link, "_blank")}
									>
										<social.icon className="w-4 h-4" />
									</Button>
								))}
							</div>
						</div>
					</div>
				</section>
				<section className="w-full md:w-1/2">
					<Card className="w-full">
						<CardHeader>
							<CardTitle>About</CardTitle>
							<CardDescription>
								Hey there! I'm Matteo, a software engineer based in Berlin.{" "}
								<br />I am passionate about building cool stuff and learning new
								things. <br />
								Currently exploring everything AI and building my own projects.{" "}
								<br />
								Hit me up if you want to chat!
							</CardDescription>
						</CardHeader>
					</Card>
				</section>
				<section className="w-full md:w-1/2">
					<Card className="w-full">
						<CardHeader>
							<CardTitle>Projects</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-col gap-4">
							{projects.map((project, index) => (
								<div key={project.title} className="flex flex-col gap-4">
									{index > 0 && <Separator />}
									<div
										key={project.title}
										className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4"
									>
										<div className="flex-1 flex flex-col gap-2">
											<CardTitle>{project.title}</CardTitle>
											<CardDescription>{project.description}</CardDescription>
										</div>
										<div className="flex items-center justify-center gap-2">
											<Button
												variant="ghost"
												size="icon"
												onClick={() => window.open(project.link, "_blank")}
											>
												<ExternalLink className="w-4 h-4" />
											</Button>
											<Button
												variant="ghost"
												size="icon"
												onClick={() => window.open(project.github, "_blank")}
											>
												<Github className="w-4 h-4" />
											</Button>
										</div>
									</div>
								</div>
							))}
						</CardContent>
					</Card>
				</section>
				<section className="w-full md:w-1/2">
					<Card className="w-full">
						<CardHeader>
							<CardTitle>Skills</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-wrap gap-2">
							{[
								"React",
								"Next.js",
								"Tailwind CSS",
								"TypeScript",
								"Node.js",
								"PostgreSQL",
								"Docker",
							].map((skill) => (
								<Badge key={skill}>
									<p>{skill}</p>
								</Badge>
							))}
						</CardContent>
					</Card>
				</section>
				<section className="w-full md:w-1/2">
					<Card className="w-full">
						<CardHeader>
							<CardTitle>Work</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-col gap-4">
							{work.map((work, index) => (
								<div key={work.company} className="flex flex-col gap-4">
									{index > 0 && <Separator />}
									<div
										key={work.company}
										className="flex flex-col md:flex-row items-start md:items-center justify-start gap-4"
									>
										<Avatar className="w-12 h-12">
											<AvatarImage src={work.image} />
											<AvatarFallback>IMG</AvatarFallback>
										</Avatar>
										<div className="flex-1 flex flex-col gap-2">
											<CardTitle>{work.role}</CardTitle>
											<CardDescription>{work.company}</CardDescription>
										</div>
										<p className="text-sm text-gray-500">{work.timeframe}</p>
									</div>
								</div>
							))}
						</CardContent>
					</Card>
				</section>
				<section className="w-full md:w-1/2">
					<Card className="w-full">
						<CardHeader>
							<CardTitle>Education</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-col gap-4">
							{education.map((education, index) => (
								<div key={education.school} className="flex flex-col gap-4">
									{index > 0 && <Separator />}
									<div
										key={education.school}
										className="flex flex-col md:flex-row items-start md:items-center justify-start gap-4"
									>
										<Avatar className="w-12 h-12">
											<AvatarImage src={education.image} />
											<AvatarFallback>IMG</AvatarFallback>
										</Avatar>
										<div className="flex-1 flex flex-col gap-2">
											<CardTitle>{education.school}</CardTitle>
											<CardDescription>{education.degree}</CardDescription>
										</div>
										<p className="text-sm text-gray-500">
											{education.timeframe}
										</p>
									</div>
								</div>
							))}
						</CardContent>
					</Card>
				</section>
				{/* <section className='w-1/2'>
        <Card className='w-full'>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
              <Label>Email</Label>
              <Input placeholder='Email' />
              <Label>Message</Label>
              <Textarea placeholder='Message' />
            </CardContent>
            <CardFooter>
              <Button>Card Button</Button>
            </CardFooter>
          </Card>
      </section> */}
			</div>
		</>
	);
}
