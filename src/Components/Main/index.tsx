import styles from './index.module.scss';
import services from './assets/services.png';
import { Sdam } from './assets/Sdam';
import { OnFive } from './assets/OnFive';
import { Gift } from './assets/Gift';
import { Modal } from '../Modal';
import { useState } from 'react';
import { Uravnenie } from './assets/Uravnenie';
import { People } from './assets/People';
import { Convert } from './assets/Sdam';
import { Individual } from './assets/Individual';
import { Laptop } from './assets/Laptop';
import main360 from './assets/Main360.png';

export function Main() {
	const [openModal, setOpenModal] = useState<boolean>(false);

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles.repetitor}>
						<div
							className={`${styles.mobileHero} max-md:block hidden`}
							style={{ backgroundImage: `url(${main360})` }}
						>
							<span className='inline-block py-1.5 px-6.5 bg-[#0867F9] text-white rounded-2xl text-[22px] leading-9 font-bold uppercase mt-15.25 mb-10.75 max-md:mt-2.75 max-md:mb-3.75 max-md:text-[7px] max-md:leading-2.75 max-md:px-2 max-md:py-0.75'>
								репетиторство по
							</span>
							<img
								className='mb-19.5 max-md:w-[75%] max-md:mb-3.75'
								src={services}
								alt='Услуги'
							/>
							<Sdam />
							<OnFive />
							<p className='max-md:text-[10px] max-md:leading-3.25 text-[30px] leading-11.75 font-semibold mb-13.75 max-md:mb-58.25'>
								Понимаю сложное. Объясняю просто. <br /> Помогаю{' '}
								<span className='text-[#255DC7]'>достигать результата.</span>
							</p>
							<div className='max-md:text-center'>
								<button
									className={styles.free}
									onClick={() => setOpenModal(true)}
								>
									<span className='inline-flex min-w-22.5 min-h-22.5 bg-white rounded-full justify-center items-center max-md:min-w-9 max-md:min-h-9'>
										<Gift />
									</span>{' '}
									<p className='text-start text-white'>
										<span className='max-md:text-[12px] max-md:leading-3 text-[25px] font-bold'>
											ПЕРВОЕ ЗАНЯТИЕ БЕСПЛАТНО
										</span>{' '}
										<br />{' '}
										<span className='max-md:text-[12px] max-md:leading-3 text-[23px] max-md:hidden'>
											Попробуй и убедись сам!
										</span>
									</p>
								</button>
							</div>
						</div>
						<div className={`${styles.desktopHero} max-md:hidden`}>
							<span className='inline-block py-1.5 px-6.5 bg-[#0867F9] text-white rounded-2xl text-[22px] leading-9 font-bold uppercase mt-15.25 mb-10.75 max-md:mt-2.75 max-md:mb-3.75 max-md:text-[7px] max-md:leading-2.75 max-md:px-2 max-md:py-0.75'>
								репетиторство по
							</span>
							<img
								className='mb-19.5 max-md:w-[75%] max-md:mb-3.75'
								src={services}
								alt='Услуги'
							/>
							<Sdam />
							<OnFive />
							<p className='max-md:text-[10px] max-md:leading-3.25 text-[30px] leading-11.75 font-semibold mb-13.75 max-md:mb-58.25'>
								Понимаю сложное. Объясняю просто. <br /> Помогаю{' '}
								<span className='text-[#255DC7]'>достигать результата.</span>
							</p>
							<div className='max-md:text-center'>
								<button
									className={styles.free}
									onClick={() => setOpenModal(true)}
								>
									<span className='inline-flex min-w-22.5 min-h-22.5 bg-white rounded-full justify-center items-center max-md:min-w-9 max-md:min-h-9'>
										<Gift />
									</span>{' '}
									<p className='text-start text-white'>
										<span className='max-md:text-[12px] max-md:leading-3 text-[25px] font-bold'>
											ПЕРВОЕ ЗАНЯТИЕ БЕСПЛАТНО
										</span>{' '}
										<br />{' '}
										<span className='max-md:text-[12px] max-md:leading-3 text-[23px] max-md:hidden'>
											Попробуй и убедись сам!
										</span>
									</p>
								</button>
							</div>
						</div>
						<Uravnenie />
						<div className={`${styles.features} max-md:justify-between max-md:text-center flex 3xl:gap-13.75 items-center`}>
							<div>
								<People />{' '}
								<p className='max-md:text-[9px] max-md:mt-1.5 max-md:leading-3.25 mt-5 text-[22px] leading-8.25 font-medium'>
									5 - 11 класс, <br /> студенты, взрослые
								</p>
							</div>
							<div>
								<Convert />
								<p className='max-md:text-[9px] max-md:mt-1.5 max-md:leading-3.25 mt-5 text-[22px] leading-8.25 font-medium'>
									Подготовка <br /> к ОГЭ и ЕГЭ
								</p>
							</div>
							<div>
								<Individual />
								<p className='max-md:text-[9px] max-md:mt-1.5 max-md:leading-3.25 mt-5 text-[22px] leading-8.25 font-medium'>
									Индивидуальный <br /> подход
								</p>
							</div>
							<div>
								<Laptop />
								<p className='max-md:text-[9px] max-md:mt-1.5 max-md:leading-3.25 mt-5 text-[22px] leading-8.25 font-medium'>
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
