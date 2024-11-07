import React, { useState } from 'react';
import Button from '../Button/Button';
import {
	MdOutlineKeyboardDoubleArrowLeft,
	MdOutlineKeyboardDoubleArrowRight,
} from 'react-icons/md';
import styles from './CardTableGenerateFloating.module.css';
import useIntersection from '@src/hooks/useIntersection';

interface Props {
	headers?: {
		anchor: string;
		level: number;
		text: string;
	}[];
}

const CardTableGenerate: React.FC<Props> = ({ headers }) => {
	const [isOpen, setIsOpen] = useState(false);
    const [activeId] = useIntersection(headers ?? []);

	return (
		<>
			<div
				className={`fixed top-1/2 z-50 -translate-y-1/2 transition-all ${isOpen ? 'right-2 delay-300' : '-right-[300px]'}`}
			>
				<div
					className={`min-w-[280px] rounded-xl bg-[#EAEAEA] p-5 shadow-xl border-black border-2`}
				>
					<div className='cursor-pointer bg-transparent' onClick={() => setIsOpen(false)}>
						<MdOutlineKeyboardDoubleArrowRight className='w-6 h-6' />
					</div>
					<h2 className='pt-5 pb-3 text-xl uppercase'>Table of Contents</h2>
					<ul className={styles['card-list']}>
						{headers?.map((header, index) => (
							<li key={index} className={`${styles['card-list__item']} ${activeId === header.anchor ? styles["card-list__item__active"] : ""}`}>
								<a href={`#${header.anchor}`} className='hover:text-blue-500'>
									{header.text}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div
				className={`fixed top-1/2 z-50 -translate-y-1/2 transition-all ${isOpen ? '-right-[300px]' : 'right-2 delay-300'}`}
			>
				<Button
					classBtn='hover: h-14 w-14 rounded-2xl border-2 border-black bg-white p-3 text-black hover:border-black hover:bg-[#EAEAEA]'
					onClick={() => setIsOpen(true)}
				>
					<MdOutlineKeyboardDoubleArrowLeft className='size-6' />
				</Button>
			</div>
		</>
	);
};

export default CardTableGenerate;
