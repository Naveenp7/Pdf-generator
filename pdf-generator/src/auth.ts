import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                // Mock authentication for now
                // In a real app, you would query your database here
                if (credentials?.email === "user@example.com" && credentials?.password === "password") {
                    return {
                        id: "1",
                        name: "Demo User",
                        email: "user@example.com",
                    }
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: '/login',
    },
});
