/* eslint-disable @next/next/no-img-element */
"use client";

import { usePredictionStore } from "@/stores/usePredictionStore";
import { useStatusStore } from "@/stores/useStatusStore";
import type React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Card } from "../ui/card";

export default function CustomTextarea() {
	const [text, setText] = useState("");
	const { status } = useStatusStore();

	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	};

	const handleSubmit = async () => {
		const { setPredictionData, setLoading } = usePredictionStore.getState();

		if (status === "offline") {
			alert("Error: La API no está en línea. Intente más tarde.");
			return;
		}

		if (!text.trim()) {
			alert("Error: El campo de texto está vacío.");
			return;
		}

		const body = JSON.stringify({ text });

		console.log("Enviando a la API:", body);
		setLoading(true);

		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/predict`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body,
				},
			);

			if (!response.ok) {
				throw new Error("Error en la API. No se pudo enviar el texto.");
			}

			const data = await response.json();
			console.log("Respuesta de la API:", data);

			setPredictionData(data);
		} catch (error) {
			console.error("Error:", error);
			setPredictionData(null);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Card className="p-10 flex flex-col items-center gap-3 md:max-w-[482px] w-full">
			<img src="/grey-logo.png" className="h-24" alt="/" />
			<div className="w-full md:min-w-[400px] max-w-md space-y-4">
				<textarea
					className="w-full min-h-[150px] p-3 border rounded-md resize-y"
					placeholder="Ingrese su texto aquí para analizar su sentimiento..."
					value={text}
					onChange={handleTextChange}
				/>
				<div>
					<Button
						className="w-full"
						onClick={handleSubmit}
						disabled={status === "offline"}
					>
						Enviar
					</Button>
				</div>
				{status === "offline" && (
					<p className="text-red-500 text-sm text-center">
						⚠ La API no está disponible en este momento.
					</p>
				)}
			</div>
		</Card>
	);
}
