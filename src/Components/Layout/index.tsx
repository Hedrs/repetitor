import { useState } from 'react';
import { Modal } from '../Modal';
import { Telegram } from './assets/Telegram';
import styles from './index.module.scss';
import { Link } from 'react-router';

function Layout() {
	const [openModal, setOpenModal] = useState<boolean>(false);

	return (
		<>
			<div className={styles.container}>
				<div className='flex items-center gap-3.75'>
					<span className={styles.logo}>{'</>'}</span>
					<h1 className='text-[24px] leading-9 font-semibold uppercase inline'>
						Репетитор онлайн
					</h1>
				</div>
				<div className='flex items-center gap-9.25'>
					<Link
						to='#lesson-format'
						className='uppercase text-[24px] leading-9 font-semibold'
					>
						формат занятии
					</Link>
					<Link
						to='#services'
						className='uppercase text-[24px] leading-9 font-semibold'
					>
						услуги
					</Link>
					<Link
						to='#about-me'
						className='uppercase text-[24px] leading-9 font-semibold'
					>
						обо мне
					</Link>
					<Link
						to='#price'
						className='uppercase text-[24px] leading-9 font-semibold'
					>
						прайс
					</Link>
					<Link
						to='#reviews'
						className='uppercase text-[24px] leading-9 font-semibold'
					>
						отзывы
					</Link>
					<button
						onClick={() => setOpenModal(true)}
						className='flex items-center bg-[#0762F7] gap-2.75 pl-3.75 pr-5.25 py-5 rounded-[20px] cursor-pointer'
					>
						<Telegram />
						<span className='text-white leading-9 text-[22px] uppercase font-semibold'>
							написать мне
						</span>
					</button>
				</div>
			</div>
			<Modal startShow={openModal} isClose={() => setOpenModal(false)} />
		</>
	);
}

export default Layout;
