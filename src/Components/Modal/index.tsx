import { Link } from 'react-router';
import styles from './index.module.scss';
import { VK } from './assets/VK';
import cn from 'classnames';
import { OldTelegram } from './assets/OldTelegram';
import { WhatsApp } from './assets/WhatsApp';
import { useEffect } from 'react';

interface ModalProps {
	startShow: boolean;
	isClose: () => void;
}

export function Modal({ startShow, isClose }: ModalProps) {
	useEffect(() => {
		if (startShow) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [startShow]);

	return (
		<div
			className={cn({
				[styles.openModal]: startShow,
				[styles.closeModal]: !startShow,
			})}
		>
			<div
				onClick={isClose}
				className={`${styles.backdrop} bg-black cursor-pointer opacity-50 z-15`}
			></div>
			<div
				className={`${styles.dialog} min-w-2xl min-h-154 bg-white z-20 relative pl-13.25 pr-9 pb-21 rounded-[29px]`}
				role='dialog'
				aria-modal='true'
				aria-label='Написать мне'
			>
				<span
					onClick={isClose}
					className='absolute right-9 top-7.75 text-[#0867F9] cursor-pointer text-[22px]'
				>
					&#10005;
				</span>
				<p className='mt-17 text-[41px] leading-15 font-semibold text-center text-[#122C66]'>
					Написать мне
				</p>
				<p className='mt-2.25 text-[20px] leading-7.5 text-[#808080] text-center'>
					Выберите удобный способ связи
				</p>
				<div className='mt-10.5'>
					<Link
						className='flex items-center justify-between w-full rounded-2xl bg-slate-50 shadow-[0_4px_20px_rgba(0,0,0,0.08)] pl-5.5 pr-9.75 py-3.25'
						to='https://vk.ru/id_78578797'
						target='_blank'
					>
						<span className='flex items-center gap-8.5'>
							<VK /> Написать в VK
						</span>
						<span className='rotate-180 text-[#0867F9] text-[22px]'>
							&#x2C2;
						</span>
					</Link>
					<Link
						className='flex items-center justify-between w-full rounded-2xl bg-slate-50 shadow-[0_4px_20px_rgba(0,0,0,0.08)] pl-5.5 pr-9.75 py-3.25 mt-5.75 mb-5.75'
						to='https://t.me/Neytfl1x'
						target='_blank'
					>
						<span className='flex items-center gap-8.5'>
							<OldTelegram /> Написать в Тelegram
						</span>
						<span className='rotate-180 text-[#0867F9] text-[22px]'>
							&#x2C2;
						</span>
					</Link>
					<Link
						className='flex items-center justify-between w-full rounded-2xl bg-slate-50 shadow-[0_4px_20px_rgba(0,0,0,0.08)] pl-5.5 pr-9.75 py-3.25'
						to='https://vk.ru/away.php?to=https%3A%2F%2Fwa.me%2F79624605719&utf=1'
						target='_blank'
					>
						<span className='flex items-center gap-8.5'>
							<WhatsApp /> Написать в WhatsApp
						</span>
						<span className='rotate-180 text-[#0867F9] text-[22px]'>
							&#x2C2;
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
