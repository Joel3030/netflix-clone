import Link from 'next/link';

interface NavbarItemProps {
	name: string;
	href: string;
}

export const NavbarItem = ({ href, name }: NavbarItemProps) => {
	return (
		<Link
			href={href}
			className='hover:text-gray-300 transition-all duration-300'>
			{name}
		</Link>
	);
};
