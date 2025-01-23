interface FormErrorProps {
	message: string;
}

export const FormError = ({ message }: FormErrorProps) => {
	if (!message) return null;

	return (
		<div className='bg-[#D89D31] text-black p-4 rounded-md mb-[40px]'>
			{message}
		</div>
	);
};
