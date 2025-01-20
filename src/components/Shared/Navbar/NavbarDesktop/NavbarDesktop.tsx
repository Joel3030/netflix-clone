'use client';

import { BellRing, Search } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Logo } from '@/components/Shared/Logo';
import { itemNavbar } from '@/data';
import { useScrollPosition } from '@/hooks';
import { NavbarItem } from '../NavbarItem';

export const NavbarDesktop = () => {
	const scrollPosition = useScrollPosition();

	return (
		<div
			className={cn(
				'z-30 left-0 right-0 top-0 h-16 fixed w-full transition-all duration-300',
				scrollPosition > 20 ? 'bg-black' : 'bg-transparent'
			)}>
			<div className='px-[4%] mx-auto h-full'>
				<div className='flex gap-4 justify-between h-full items-center'>
					<div className='flex gap-2 items-center'>
						<Logo />
						<div className='ml-10 flex gap-4'>
							{itemNavbar.map((item) => (
								<NavbarItem key={item.name} {...item} />
							))}
						</div>
					</div>
					<div className='flex gap-4 items-center'>
						<Search className='cursor-pointer' />
						<BellRing className='cursor-pointer' />
						<div className='flex gap-2 items-center'>
							<p>User</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
