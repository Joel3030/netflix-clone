'use server';

import bcrypt from 'bcryptjs';

import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export const registerUser = async (email: string, password: string) => {
	try {
		const hashedPassword = bcrypt.hashSync(password, 10);
		const existingUser = await db.user.findUnique({
			where: {
				email,
			},
		});

		if (existingUser) {
			return new NextResponse('User already exists', {
				status: 400,
			});
		}

		const userCreated = await db.user.create({
			data: {
				email,
				password: hashedPassword,
			},
		});

		return NextResponse.json(userCreated);
	} catch (error) {
		return new NextResponse(`Error creating user: ${error}`, {
			status: 500,
		});
	}
};
