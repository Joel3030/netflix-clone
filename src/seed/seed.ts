import bcrypt from 'bcryptjs';
interface SeedUser {
	email: string;
	password: string;
}

interface SeedData {
	users: SeedUser[];
}

export const initialData: SeedData = {
	users: [
		{
			email: 'netflix-clone@gmail.com',
			password: bcrypt.hashSync('!123Netflix', 10),
		},
	],
};
