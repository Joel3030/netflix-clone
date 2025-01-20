'use client';
import { Bell, Menu, Search } from 'lucide-react';

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Logo } from '@/components/Shared/Logo';
import { itemNavbar } from '@/data';
import { NavbarItem } from '../NavbarItem';

export const NavbarMobile = () => {
	return (
		<div className='p-4 flex justify-between'>
			<Logo />

			<Sheet>
				<SheetTrigger>
					<Menu />
				</SheetTrigger>
				<SheetContent side='left' className='bg-black'>
					<SheetTitle></SheetTitle>
					<SheetDescription></SheetDescription>
					<div className='flex flex-col gap-4'>
						{itemNavbar.map((item) => (
							<NavbarItem key={item.name} {...item} />
						))}
					</div>

					<div className='border-[1px] border-white/70 my-5' />
					<div className='flex justify-between gap-6 mt-4'>
						<Search className='cursor-pointer' />
						<Bell className='cursor-pointer' />
						<p>User</p>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};
