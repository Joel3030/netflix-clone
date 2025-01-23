'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	Input,
	Button,
} from '@/components/ui';

import { FormError } from './FormError';

import { login } from '@/actions/auth';

const formSchema = z.object({
	email: z.string().email('Please enter a valid email').min(1, {
		message: 'Please enter a valid email or phone number.',
	}),
	password: z.string().min(4, {
		message: 'Your password must contain between 4 and 60 characters.',
	}),
});

export const LoginForm = () => {
	const [errorMessage, setErrorMessage] = useState('');

	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setErrorMessage('');
		const { message, status } = await login(values);

		if (status === 'error') {
			setErrorMessage(message);
			return;
		}

		router.push('/profiles');
	};

	return (
		<Form {...form}>
			<FormError message={errorMessage} />

			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='w-full gap-4 flex flex-col'>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder='Email or mobile number'
									{...field}
									className='h-14 text-white'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder='Password'
									{...field}
									className='h-14 text-white'
									type='password'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type='submit'
					className='w-full bg-[#E50914] text-white h-[40px]'>
					Sign In
				</Button>

				<p className='text-center'>OR</p>

				<Button className='w-full  text-white h-[40px]'>
					Use a Sing-In Code
				</Button>
			</form>
		</Form>
	);
};
