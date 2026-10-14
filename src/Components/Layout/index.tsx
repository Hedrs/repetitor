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
				<div className={styles.brand}>
					<span className={styles.logo}>{'</>'}</span>
					<h1 className={`${styles.brandName} max-3lg:text-[20px] max-3lg:leading-5 text-[25px] text-[#255dc7] font-semibold uppercase inline`}>
						INFO<span className='text-red-600'>MATH</span>IK.RU
					</h1>
				</div>
				<div
					id='site-navigation'
					className={cn(styles.navigation, { [styles.navigationOpen]: openNav })}
				>
					<Link
						to='#lesson-format'
						onClick={() => setOpenNav(false)}
						className='max-md:text-[6px] max-md:leading-2.5 uppercase text-[18px] leading-6.75 font-semibold'
					>
						формат занятии
					</Link>
					<Link
						to='#services'
						onClick={() => setOpenNav(false)}
						className='max-md:text-[6px] max-md:leading-2.5 uppercase text-[18px] leading-6.75 font-semibold'
					>
						услуги
					</Link>
					<Link
						to='#about-me'
						onClick={() => setOpenNav(false)}
						className='max-md:text-[6px] max-md:leading-2.5 uppercase text-[18px] leading-6.75 font-semibold'
					>
						обо мне
					</Link>
					<Link
						to='#price'
						onClick={() => setOpenNav(false)}
						className='max-md:text-[6px] max-md:leading-2.5 uppercase text-[18px] leading-6.75 font-semibold'
					>
						прайс
					</Link>
					<Link
						to='#reviews'
						onClick={() => setOpenNav(false)}
						className='max-md:text-[6px] max-md:leading-2.5 uppercase text-[18px] leading-6.75 font-semibold'
					>
						отзывы
					</Link>
					<button
						onClick={() => setOpenModal(true)}
						className={`${styles.contactButton} hidden md:flex items-center bg-[#0762F7] gap-2.75 pl-3.75 pr-5.25 py-3 rounded-[10px] cursor-pointer`}
					>
						<Telegram />
						<span className='text-white leading-6.75 text-[16px] uppercase font-semibold'>
							написать мне
						</span>
					</button>
				</div>
				<button
					onClick={() => setOpenNav(prev => !prev)}
					className={styles.menuButton}
					aria-label='Меню'
					aria-expanded={openNav}
					aria-controls='site-navigation'
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
