import { cn } from '@src/utils';

type Color = 'primary' | 'secondary' | 'success' | 'error';
type Variant = 'text' | 'contained' | 'outlined';
type Size = 'sm' | 'md' | 'lg';

interface Props {
	size?: Size;
	variant?: Variant;
	type?: 'button';
	color?: Color;
	disabled?: boolean;
	disableElevation?: boolean;
	classBtn?: string;
	children?: React.ReactNode;
	onClick?: () => void;
}

const Button: React.FC<Props> = ({
	children,
	classBtn,
	color = 'primary',
	disableElevation,
	disabled,
	size = 'md',
	type = 'button',
	variant = 'contained',
	onClick,
}) => {
	interface Props {
		classBtn?: string;
		type?: 'reset' | 'button' | 'submit';
		variant?: Variant;
		size?: Size;
		color?: Color;
		disabled?: boolean;
		disableElevation?: boolean;
	}

	const sizes: Record<Size, string> = {
		sm: 'text-sm px-3',
		lg: 'text-lg px-3 py-2',
		md: 'text-md px-3 py-1',
	};
	const variants: Record<Variant, string> = {
		text: 'bg-none',
		contained: 'text-white',
		outlined: 'bg-none border',
	};
	const colors: Record<Color, string> = {
		primary: `text-primary bg-primary/90 border-primary/40 hover:border-primary ${
			variant === 'contained' ? 'hover:bg-primary/100' : 'hover:bg-primary/5'
		}`,
		secondary: `text-secondary bg-secondary/90 border-secondary/40 hover:border-secondary ${
			variant === 'contained' ? 'hover:bg-secondary/100' : 'hover:bg-secondary/5'
		}`,
		success: `text-success bg-success/90 border-success/40 hover:border-success ${
			variant === 'contained' ? 'hover:bg-success/100' : 'hover:bg-success/5'
		}`,
		error: `text-error bg-error/90 border-error/40 hover:border-error ${
			variant === 'contained' ? 'hover:bg-error/100' : 'hover:bg-error/5'
		}`,
	};
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={cn(
				'flex h-fit w-full items-center justify-center gap-3 whitespace-nowrap rounded-md shadow-sm transition-colors hover:shadow-md',
				sizes[size],
				colors[color],
				variants[variant],
				{
					'shadow-none hover:shadow-none': disableElevation,
				},
				{
					'pointer-events-none border-gray-400/50 bg-gray-300/60 text-gray-400': disabled,
				},
				classBtn,
			)}
		>
			{children}
		</button>
	);
};

export default Button;
