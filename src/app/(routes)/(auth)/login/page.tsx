import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { Terms } from './Terms/Terms';
import { LoginForm } from './LoginForm';

export default function LoginPage() {
	return (
		<div className=''>
			<p className='text-3xl font-bold text-left mb-7'>Sign In</p>

			<LoginForm />

			<div className='mt-5 text-center'>
				<Link href='/' className='hover:underline hover:opacity-70'>
					Forgot password?
				</Link>
			</div>

			<div className='flex items-center space-x-2 mt-4'>
				<Checkbox id='terms' className='border-white' />
				<label className='peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
					Remember me
				</label>
			</div>

			<div className='mt-4 flex gap-1'>
				<p className='text-white opa7ity-70'>New to Netflix?</p>
				<Link href='/register' className='opacity-1 text-white'>
					Sign up now.
				</Link>
			</div>

			<Terms />
		</div>
	);
}
