"use client";

import useSentimentStore from "@/hooks/useSentimentStore";

import Background from "./background";

export default function SentimentBackground() {
	const colorScheme = useSentimentStore((state) => state.getColorScheme());

	return (
		<div className="fixed inset-0 z-0">
			<Background
				color1={colorScheme.color1}
				color2={colorScheme.color2}
				color3={colorScheme.color3}
				pixelFilter={2000}
			/>
		</div>
	);
}
