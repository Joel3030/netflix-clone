import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import credentials from 'next-auth/providers/credentials';
import { signInSchema } from './lib/zod';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { authConfig } from './auth.config';
import { db } from './lib/db';

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: PrismaAdapter(db),
	...authConfig,
	providers: [
		credentials({
			async authorize(credentials) {
				const validatedFile = signInSchema.safeParse(credentials);

				if (!validatedFile.success) return null;

				const { email, password } = validatedFile.data;

				const userFound = await db.user.findUnique({
					where: {
						email,
					},
				});

				if (!userFound || !userFound.password) return null;

				const passwordMatch = bcrypt.compareSync(password, userFound.password);

				if (!passwordMatch) return null;

				return userFound;
			},
		}),
	],
});
