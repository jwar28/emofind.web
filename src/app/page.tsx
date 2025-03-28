"use client";

import { usePredictionStore } from "@/stores/usePredictionStore";

import PredictionCard from "@/components/layout/prediction-card";
import ResultSkeleton from "@/components/layout/result-skeleton";
import CustomTextarea from "@/components/prompt/custom-textarea";

export default function Home() {
	const { predictionData, loading } = usePredictionStore();

	return (
		<div className="md:min-h-screen w-full p-4">
			<div className="w-full flex flex-col gap-4 items-center md:justify-center md:min-h-screen md:-mt-16">
				<CustomTextarea />
				{loading && <ResultSkeleton />}
				{!loading && predictionData && <PredictionCard />}
			</div>
		</div>
	);
}
