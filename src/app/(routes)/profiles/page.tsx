import { auth } from '@/auth';

export default async function ProfilesPage() {
	const session = await auth();
	return (
		<div>
			<p>{JSON.stringify(session)}</p>
		</div>
	);
}
