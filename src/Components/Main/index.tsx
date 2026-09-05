import styles from './index.module.scss';
import services from './assets/services.png';
import { Sdam } from './assets/Sdam';
import { OnFive } from './assets/OnFive';
import { Gift } from './assets/Gift';
import { Modal } from '../Modal';
import { useState } from 'react';
import { Uravnenie } from './assets/Uravnenie';
import { People } from './assets/People';
import { Convert } from './assets/Convert';
import { Individual } from './assets/Individual';
import { Laptop } from './assets/Laptop';

export function Main() {
	const [openModal, setOpenModal] = useState<boolean>(false);

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles.repetitor}>
						<span className='inline-block py-1.5 px-6.5 bg-[#0867F9] text-white rounded-2xl text-[24px] leading-9 font-bold uppercase mt-26.5 mb-12.25'>
							репетиторство по
						</span>
						<img className='mb-19.5' src={services} alt='Услуги' />
						<Sdam />
						<OnFive />
						<p className='text-[33px] leading-11.75 font-semibold mb-13.75'>
							Понимаю сложное. Объясняю просто. <br /> Помогаю{' '}
							<span className='text-[#255DC7]'>достигать результата.</span>
						</p>
						<button className={styles.free} onClick={() => setOpenModal(true)}>
							<span className='inline-block min-w-25.5 min-h-25.5 bg-white rounded-full relative'>
								<Gift />
							</span>{' '}
							<p className='leading-9 text-start text-white'>
								<span className='text-[29px] font-bold'>
									ПЕРВОЕ ЗАНЯТИЕ БЕСПЛАТНО
								</span>{' '}
								<br />{' '}
								<span className='text-[27px]'>Попробуй и убедись сам!</span>
							</p>
						</button>
						<Uravnenie />
						<div className='flex items-center gap-13.5'>
							<div>
								<People />{' '}
								<p className='mt-5 text-[22px] leading-8.25 font-medium'>
									5 - 11 класс, <br /> студенты, взрослые
								</p>
							</div>
							<div>
								<Convert />
								<p className='mt-5 text-[22px] leading-8.25 font-medium'>
									Подготовка <br /> к ОГЭ и ЕГЭ
								</p>
							</div>
							<div>
								<Individual />
								<p className='mt-5 text-[22px] leading-8.25 font-medium'>
									Индивидуальный <br /> подход
								</p>
							</div>
							<div>
								<Laptop />
								<p className='mt-5 text-[22px] leading-8.25 font-medium'>
									Онлайн занятия <br /> по видеосвязи
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal startShow={openModal} isClose={() => setOpenModal(false)} />
		</>
	);
}
