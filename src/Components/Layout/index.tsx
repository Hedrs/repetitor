import { useState } from 'react';
import { Modal } from '../Modal';
import { Telegram } from './assets/Telegram';
import styles from './index.module.scss';
import { Link } from 'react-router';
import cn from 'classnames';

function Layout() {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [openNav, setOpenNav] = useState<boolean>(false);

	return (
		<>
			<div className={styles.container}>
				<div className='flex items-center gap-3.75 max-md:gap-1.25'>
					<span className={styles.logo}>{'</>'}</span>
					<h1 className='max-3lg:text-[20px] max-3lg:leading-5 max-md:text-[7px] max-md:leading-2.5 text-[25px] text-[#255dc7] font-semibold uppercase inline'>
						INFO<span className='text-red-600'>MATH</span>IK.RU
					</h1>
				</div>
				<div
					className={cn({
						['hidden md:flex items-center gap-9.25']: !openNav,
						['flex flex-col max-w-25 max-h-50 p-3 absolute right-0 top-5 bg-white z-10 gap-2.5 md:flex items-center']:
							openNav,
					})}
				>
					<Link
						to='#lesson-format'
						className='max-md:text-[6px] max-md:leading-2.5 uppercase text-[18px] leading-6.75 font-semibold'
					>
						формат занятии
					</Link>
					<Link
						to='#services'
						className='max-md:text-[6px] max-md:leading-2.5 uppercase text-[18px] leading-6.75 font-semibold'
					>
						услуги
					</Link>
					<Link
						to='#about-me'
						className='max-md:text-[6px] max-md:leading-2.5 uppercase text-[18px] leading-6.75 font-semibold'
					>
						обо мне
					</Link>
					<Link
						to='#price'
						className='max-md:text-[6px] max-md:leading-2.5 uppercase text-[18px] leading-6.75 font-semibold'
					>
						прайс
					</Link>
					<Link
						to='#reviews'
						className='max-md:text-[6px] max-md:leading-2.5 uppercase text-[18px] leading-6.75 font-semibold'
					>
						отзывы
					</Link>
					<button
						onClick={() => setOpenModal(true)}
						className='hidden md:flex items-center bg-[#0762F7] gap-2.75 pl-3.75 pr-5.25 py-3 rounded-[10px] cursor-pointer'
					>
						<Telegram />
						<span className='text-white leading-6.75 text-[16px] uppercase font-semibold'>
							написать мне
						</span>
					</button>
				</div>
				<button
					onClick={() => setOpenNav(prev => !prev)}
					className='flex flex-col gap-1 cursor-pointer md:hidden'
				>
					<span className='inline-block min-w-3.5 min-h-px bg-[#2876F5] rounded-2xl'></span>
					<span className='inline-block min-w-3.5 min-h-px bg-[#2876F5] rounded-2xl'></span>
					<span className='inline-block min-w-3.5 min-h-px bg-[#2876F5] rounded-2xl'></span>
				</button>
			</div>
			<Modal startShow={openModal} isClose={() => setOpenModal(false)} />
		</>
	);
}

export default Layout;
