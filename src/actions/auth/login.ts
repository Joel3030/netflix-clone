'use server';

import { AuthError } from 'next-auth';
import { z } from 'zod';

import { signIn } from '@/auth';
import { signInSchema } from '@/lib/zod';

export type LoginResponse = {
	message: string;
	status: 'success' | 'error';
	error?: z.ZodError;
};

export const login = async (
	values: z.infer<typeof signInSchema>
): Promise<LoginResponse> => {
	const validationError = validateLoginInput(values);
	if (validationError) return validationError;

	const { email, password } = values;

	try {
		await signIn('credentials', {
			email,
			password,
			redirect: false,
		});

		return {
			message: 'Login successful',
			status: 'success',
		};
	} catch (error) {
		return handleAuthenticationError(error);
	}
};

const validateLoginInput = (
	values: z.infer<typeof signInSchema>
): LoginResponse | null => {
	const validatedFile = signInSchema.safeParse(values);

	if (validatedFile.success) return null;

	return {
		message: 'Invalid fields!',
		status: 'error',
		error: validatedFile.error,
	};
};

const handleAuthenticationError = (error: unknown): LoginResponse => {
	if (error instanceof AuthError) {
		switch (error.type) {
			case 'CredentialsSignin':
				return {
					message: 'Invalid credentials!',
					status: 'error',
				};
			default:
				return {
					message: 'Authentication failed',
					status: 'error',
				};
		}
	}

	return {
		message: 'Unexpected error occurred',
		status: 'error',
	};
};
