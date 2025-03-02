import { create } from "zustand";

interface StatusState {
	status: "online" | "offline";
	fetchStatus: (apiUrl: string) => Promise<void>;
}

export const useStatusStore = create<StatusState>((set) => ({
	status: "offline",

	fetchStatus: async (apiUrl) => {
		try {
			const response = await fetch(apiUrl);
			set({ status: response.ok ? "online" : "offline" });
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error) {
			set({ status: "offline" });
		}
	},
}));
