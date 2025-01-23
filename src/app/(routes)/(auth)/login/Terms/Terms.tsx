'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';

export const Terms = () => {
	const [showExtraTerms, setShowExtraTerms] = useState(false);

	return (
		<div className='text-xs mt-4 mb-10 text-gray-600 max-w-72'>
			<div className='mb-5'>
				<span>
					This page is protected by Google reCAPTCHA to ensure you are not a
					bot.
				</span>
				{!showExtraTerms && (
					<Button
						variant='ghost'
						onClick={() => setShowExtraTerms(true)}
						className='opacity-70 text-[#0071eb] hover:bg-transparent p-0 ml-1'>
						Learn more.
					</Button>
				)}
			</div>

			<div>
				{showExtraTerms && (
					<p>
						The information collected by Google reCAPTCHA is subject to the
						Google{' '}
						{
							<Link
								className='text-[#0088FF] hover:underline hover:opacity-70'
								href='https://policies.google.com/privacy'>
								Privacy Policy
							</Link>
						}{' '}
						and{' '}
						{
							<Link
								className='text-[#0088FF] hover:underline hover:opacity-70'
								href='https://policies.google.com/terms'>
								Terms of Service
							</Link>
						}{' '}
						, and is used for providing, maintaining, and improving the
						reCAPTCHA service and for general security purposes (it is not used
						for personalized advertising by Google).
					</p>
				)}
			</div>
		</div>
	);
};
