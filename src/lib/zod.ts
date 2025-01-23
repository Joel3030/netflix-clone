import { object, string } from 'zod';

export const signInSchema = object({
	email: string({ required_error: 'Email is required' })
		.min(2, {
			message: 'Email must be at least 2 characters',
		})
		.email('Invalid email'),
	password: string({ required_error: 'Password is required' }).min(6, {
		message: 'Password must be at least 6 characters',
	}),
});
