import axios from "axios";

const X_API_KEY = process.env.NEXT_PUBLIC_X_API_KEY || "";

export const apiClient = axios.create({
	baseURL: "http://localhost:3000/api",
	headers: {
		"x-api-key": X_API_KEY,
	},
});
