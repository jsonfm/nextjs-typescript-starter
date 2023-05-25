import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { usersService } from "@/services/users.service";

const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/login",
	},
	providers: [
		CredentialsProvider({
			name: "credentials",
			type: "credentials",
			credentials: {},
			authorize: async (credentials, req) => {
				const { email, password } = credentials as {
					email: string;
					password: string;
				};
				const response = await usersService.login(email, password);
				return response?.user ?? null;
			},
		}),
	],
};

export default NextAuth(authOptions);
