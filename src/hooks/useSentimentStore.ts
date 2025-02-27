import { create } from "zustand";

export type SentimentType = "positive" | "negative" | "neutral";

interface ColorScheme {
	color1: string;
	color2: string;
	color3: string;
}

const sentimentColorSchemes: Record<SentimentType, ColorScheme> = {
	positive: {
		color1: "#1B5E20",
		color2: "#0D3D14",
		color3: "#06270C",
	},
	negative: {
		color1: "#8E0000",
		color2: "#5D0000",
		color3: "#3A0000",
	},
	neutral: {
		color1: "#616161",
		color2: "#424242",
		color3: "#212121",
	},
};

interface SentimentState {
	sentiment: SentimentType;
	setSentiment: (sentiment: SentimentType) => void;
	getColorScheme: () => ColorScheme;
}

const useSentimentStore = create<SentimentState>((set, get) => ({
	sentiment: "negative",
	setSentiment: (sentiment) => set({ sentiment }),
	getColorScheme: () => sentimentColorSchemes[get().sentiment],
}));

export default useSentimentStore;
