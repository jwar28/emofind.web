import { create } from "zustand";

export type SentimentType = "positive" | "negative" | "neutral";

interface ColorScheme {
	color1: string;
	color2: string;
	color3: string;
}

const sentimentColorSchemes: Record<SentimentType, ColorScheme> = {
	positive: {
		color1: "#388E3C",
		color2: "#2E7D32",
		color3: "#1B5E20",
	},
	negative: {
		color1: "#C62828",
		color2: "#B71C1C",
		color3: "#8E0000",
	},
	neutral: {
		color1: "#9E9E9E",
		color2: "#757575",
		color3: "#616161",
	},
};

interface SentimentState {
	sentiment: SentimentType;
	setSentiment: (sentiment: SentimentType) => void;
	getColorScheme: () => ColorScheme;
}

const useSentimentStore = create<SentimentState>((set, get) => ({
	sentiment: "neutral",
	setSentiment: (sentiment) => set({ sentiment }),
	getColorScheme: () => sentimentColorSchemes[get().sentiment],
}));

export default useSentimentStore;
