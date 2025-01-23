import { initialData } from './seed';
import { db } from '../lib/db';

async function main() {
	await Promise.all([db.user.deleteMany()]);

	const { users } = initialData;

	await db.user.createMany({
		data: users,
	});

	console.log('Seed ejecutado correctamente');
}

(() => {
	if (process.env.NODE_ENV === 'production') return;

	main();
})();
