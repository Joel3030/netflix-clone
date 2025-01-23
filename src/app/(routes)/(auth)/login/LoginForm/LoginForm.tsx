'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { FormError } from './FormError';

const formSchema = z.object({
	email: z.string().email('Please enter a valid email').min(1, {
		message: 'Please enter a valid email or phone number.',
	}),
	password: z.string().min(4, {
		message: 'Your password must contain between 4 and 60 characters.',
	}),
});

export const LoginForm = () => {
	const [error, setError] = useState('');

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		setError('');
		console.log(values);
	};

	return (
		<Form {...form}>
			<FormError message={error} />

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
