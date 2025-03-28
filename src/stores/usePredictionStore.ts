import { create } from "zustand";

interface PredictionState {
	predictionData: { sentiment: string; text: string } | null;
	loading: boolean;
	setPredictionData: (data: { sentiment: string; text: string } | null) => void;
	setLoading: (loading: boolean) => void;
}

export const usePredictionStore = create<PredictionState>((set) => ({
	predictionData: null,
	loading: false,
	setPredictionData: (data) => set({ predictionData: data, loading: false }),
	setLoading: (loading) => set({ loading }),
}));
