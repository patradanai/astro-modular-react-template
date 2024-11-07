import React from 'react';
import Button from './Button';

interface ButtonShareProps {
	children?: React.ReactNode;
}

const ButtonShare: React.FC<ButtonShareProps> = ({ children }) => {
	const handler = () => {
		const url = window.location.href;
		navigator.clipboard.writeText(url);
	};

	return (
		<Button
			classBtn='h-10 w-10 bg-gray-400 hover:bg-slate-500'
			size='sm'
			variant='contained'
			onClick={handler}
		>
			{children}
		</Button>
	);
};

export default ButtonShare;
