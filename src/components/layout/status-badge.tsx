"use client";

import { useStatusStore } from "@/stores/useStatusStore";
import { useEffect } from "react";

import { cn } from "@/lib/utils";

interface StatusBadgeProps {
	apiUrl?: string;
	className?: string;
	showToggle?: boolean;
}

export default function StatusBadge({
	apiUrl = "",
	className,
	showToggle = false,
}: StatusBadgeProps) {
	const { status, fetchStatus } = useStatusStore();

	useEffect(() => {
		fetchStatus(apiUrl);
		const interval = setInterval(() => fetchStatus(apiUrl), 5000);
		return () => clearInterval(interval);
	}, [apiUrl, fetchStatus]);

	return (
		<div className={cn("flex items-center", className)}>
			<div className="flex items-center">
				<div
					className={cn(
						"flex items-center gap-2 rounded-full px-2 py-0.5 text-xs font-medium",
						status === "online"
							? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
							: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400",
					)}
				>
					<span className="relative flex h-2 w-2">
						<span
							className={cn(
								"absolute inline-flex h-full w-full rounded-full",
								status === "online" ? "bg-green-500" : "bg-gray-500",
							)}
						/>
						{status === "online" && (
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
						)}
					</span>
					{status === "online" ? "Online" : "Offline"}
				</div>
			</div>

			{showToggle && (
				<button
					onClick={() => fetchStatus(apiUrl)}
					className="ml-2 text-xs text-gray-500 underline hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
				>
					Actualizar estado
				</button>
			)}
		</div>
	);
}
