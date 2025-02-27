import { cn } from "@/lib/utils";
import StatusBadge from "./status-badge";

interface SiteHeaderProps {
	className?: string;
	status?: "online" | "offline";
	logoSrc?: string;
}

export default function Header({ className }: SiteHeaderProps) {
	return (
		<header
			className={cn(
				"relative md:fixed left-0 top-0 z-50 flex w-full items-center",
				className,
			)}
		>
			<div className="container flex h-14 items-center">
				<div className="flex items-center gap-2 ml-2">
					<StatusBadge apiUrl={process.env.API_URL} showToggle={false} />
				</div>
			</div>
		</header>
	);
}
