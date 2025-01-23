import { type NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
	pages: {
		signIn: '/login',
	},
	callbacks: {
		async jwt({ token }) {
			return token;
		},

		async session({ session, token }) {
			if (token.sub && session.user) {
				session.user.id = token.sub;
			}

			return session;
		},
	},
	session: { strategy: 'jwt' },
	providers: [],
};
