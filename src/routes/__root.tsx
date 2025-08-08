import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createRootRoute({
	component: () => (
		<>
			<header className="border-b">
				<div className="container mx-auto flex items-center justify-between p-4">
					<Link to="/" className="font-semibold">
						Matteo VH
					</Link>
					<div className="flex items-center gap-4">
						<Link to="/contact">Contact</Link>
						<ThemeToggle />
					</div>
				</div>
			</header>
			<Outlet />
			{import.meta.env.DEV && <TanStackRouterDevtools />}
		</>
	),
});
