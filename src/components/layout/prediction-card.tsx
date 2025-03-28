"use client";
import { usePredictionStore } from "@/stores/usePredictionStore";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import ResultSkeleton from "./result-skeleton";

export default function PredictionCard() {
	const { predictionData, loading } = usePredictionStore();

	if (loading) {
		return <ResultSkeleton />;
	}

	if (!predictionData) return null;

	return (
		<Card className="w-full md:max-w-[482px] h-48 p-4 ">
			<CardHeader>
				<CardTitle className="text-lg font-semibold text-center">
					Resultado de la Predicción
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-2 flex flex-col items-center">
					<p className="text-lg font-bold">
						{predictionData.sentiment === "Positivo" ? "😊" : "😞"}{" "}
						{predictionData.sentiment}
					</p>
					<p>
						{predictionData.sentiment === "Positivo"
							? "Sigue asi, todo va excelente"
							: "Animo todo saldra mejor"}
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
