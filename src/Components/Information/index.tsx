import styles from './index.module.scss';
import laptopWithCamera from './assets/laptopWithCamera.png';
import { CheckMark } from './assets/CheckMark';
import { Clock } from './assets/Clock';
import { Time } from './assets/Time';
import { Birdie } from './assets/Birdie';
import { TheAmount } from './assets/TheAmount';
import { QuotationMarks } from './assets/QuotationMarks';
import { Target } from './assets/Target';
import { Progress } from './assets/Progress';
import { Shield } from './assets/Shield';
import { Star } from './assets/Star';
import { Message } from './assets/Message';
import hour from './assets/hour.png';
import { useState } from 'react';
import { Telegram } from '../Layout/assets/Telegram';
import { Modal } from '../Modal';
import { Apostrophe, ApostropheRotate } from './assets/Apostrophes';
import { WhiteTelegram } from './assets/WhiteTelegram';
import Thinking from './assets/thinking.png';
import classNames from 'classnames';
import { Arrow } from './assets/Arrow';

const REVIEWS = [
	{
		id: '1',
		text: (
			<p className='mb-12.25 mt-3.25 text-[24px] max-md:text-[8px] max-md:leading-3 max-md:mb-2.25 max-md:mt-1.25 font-medium line-clamp-2 max-md:line-clamp-2'>
				Благодаря занятиям поднял баллы <br className='max-md:hidden' /> по
				информатике с 60 до 91 на ЕГЭ. <br className='max-md:hidden' />{' '}
				Объясняет просто и понятно!
			</p>
		),
		author: (
			<p className='text-[22px] max-md:text-[7px] max-md:leading-3'>
				<span className='font-medium'>Алексей</span>, 11 класс
			</p>
		),
	},
	{
		id: '2',
		text: (
			<p className='mb-12.25 mt-3.25 text-[24px] max-md:text-[8px] max-md:leading-3 max-md:mb-2.25 max-md:mt-1.25 font-medium line-clamp-2'>
				Подготовка к ОГЭ прошла отлично, <br className='max-md:hidden' />{' '}
				занятия интересные и продуктивные. Рекомндую!
			</p>
		),
		author: (
			<p className='text-[22px] max-md:text-[7px] max-md:leading-3'>
				<span className='font-medium'>Мария</span>, 9 класс
			</p>
		),
	},
	{
		id: '3',
		text: (
			<p className='mb-12.25 mt-3.25 text-[24px] max-md:text-[8px] max-md:leading-3 max-md:mb-2.25 max-md:mt-1.25 font-medium line-clamp-2'>
				Помог с решением задач по высшей <br className='max-md:hidden' />{' '}
				математике в университете, все четко <br /> и по делу.
			</p>
		),
		author: (
			<p className='text-[22px] max-md:text-[7px] max-md:leading-3'>
				<span className='font-medium'>Иван</span>, студент
			</p>
		),
	},
	{
		id: '4',
		text: (
			<p className='mb-12.25 mt-3.25 text-[24px] max-md:text-[8px] max-md:leading-3 max-md:mb-2.25 max-md:mt-1.25 font-medium line-clamp-2'>
				Сын подтянул алгебру за полгода: с <br className='max-md:hidden' />{' '}
				тройки перешел на твердую четверку, <br className='max-md:hidden' /> ОГЭ
				сдал на «хорошо».
			</p>
		),
		author: (
			<p className='text-[22px] max-md:text-[7px] max-md:leading-3'>
				<span className='font-medium'>Елена</span>, мама ученика 9 класса
			</p>
		),
	},
	{
		id: '5',
		text: (
			<p className='mb-12.25 mt-3.25 text-[24px] max-md:text-[8px] max-md:leading-3 max-md:mb-2.25 max-md:mt-1.25 font-medium line-clamp-2'>
				Готовился к ЕГЭ по информатике всего <br className='max-md:hidden' /> 4
				месяца, в итоге 84 балла. Раньше <br className='max-md:hidden' /> боялся
				27-го задания, а на экзамене <br className='max-md:hidden' /> решил его
				без ошибок.
			</p>
		),
		author: (
			<p className='text-[22px] max-md:text-[7px] max-md:leading-3'>
				<span className='font-medium'>Дмитрий</span>, 11 класс
			</p>
		),
	},
	{
		id: '6',
		text: (
			<p className='mb-12.25 mt-3.25 text-[24px] max-md:text-[8px] max-md:leading-3 max-md:mb-2.25 max-md:mt-1.25 font-medium line-clamp-2'>
				Пересдавал экзамен по мат. анализу в <br className='max-md:hidden' />{' '}
				вузе. После месяца занятий сдал на <br className='max-md:hidden' />{' '}
				"хорошо" Объяснили буквально «на <br className='max-md:hidden' />{' '}
				пальцах». Очень выручили!
			</p>
		),
		author: (
			<p className='text-[22px] max-md:text-[7px] max-md:leading-3'>
				<span className='font-medium'>Игорь</span>, студент 2 курса
			</p>
		),
	},
];

export function Information() {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [openPrice, setOpenPrice] = useState<boolean>(false);
	const PER_VIEW = 3;
	const [page, setPage] = useState(0);
	const pagesCount = Math.ceil(REVIEWS.length / PER_VIEW); // 6 отзывов → 2 страницы
	const visible = REVIEWS.slice(page * PER_VIEW, page * PER_VIEW + PER_VIEW);

	const slide = (dir: -1 | 1) => {
		setPage(prev => Math.min(Math.max(prev + dir, 0), pagesCount - 1));
	};

	return (
		<>
			<div className={styles.container}>
				<div>
					<h2
						id='lesson-format'
						className='text-[40px] max-md:text-[11px] max-md:leading-2.5 leading-9 font-black flex items-center gap-4.5 max-md:gap-1.25 uppercase mt-20.25 scroll-mt-25 mb-12.75 max-md:mb-4 max-md:mt-8.25'
					>
						<span className='block w-4.5 h-4.5 max-md:w-1.25 max-md:h-1.25 bg-[#025EFF] rounded-full'></span>{' '}
						форма занятий
					</h2>
					<div
						className={`${styles.formatLayout} flex items-center ml-9 max-md:ml-0 gap-4 max-md:flex-wrap max-md:justify-between`}
					>
						<img
							className={`${styles.laptop} max-md:w-49.5 max-md:h-40`}
							src={laptopWithCamera}
							alt=''
						/>
						<div
							className={`${styles.formatPoints} flex flex-col gap-14.5 max-md:gap-2.5 ml-19 max-md:ml-0 mr-33.5 max-md:mr-0`}
						>
							<p className='flex items-center max-md:gap-2.75 gap-7.25 max-md:text-[8px] text-[22px] max-md:leading-3.25 leading-9 font-medium'>
								<CheckMark /> Онлайн занятия <br /> по видеосвязи
							</p>
							<p className='flex items-center max-md:gap-2.75 gap-7.25 max-md:text-[8px] text-[22px] max-md:leading-3.25 leading-9 font-medium'>
								<CheckMark /> Интерактивная <br /> доска и материалы
							</p>
							<p className='flex items-center max-md:gap-2.75 gap-7.25 max-md:text-[8px] text-[22px] max-md:leading-3.25 leading-9 font-medium'>
								<CheckMark /> Удобный график <br /> под тебя
							</p>
							<p className='flex items-center max-md:gap-2.75 gap-7.25 max-md:text-[8px] text-[22px] max-md:leading-3.25 leading-9 font-medium'>
								<CheckMark /> Записи занятий <br /> и поддержка
							</p>
						</div>
						<div
							className={`${styles.schedule} flex flex-col justify-end max-md:self-end max-md:min-h-30 max-md:min-w-full min-w-133 min-h-100.25 bg-white rounded-[20px] p-11.75 max-md:pt-4.5 max-md:pl-4.5 max-md:pb-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]`}
						>
							<h3 className='max-md:text-[10px] text-[29px] max-md:leading-3 leading-9 font-black uppercase flex items-center gap-7.25 max-md:gap-4.75'>
								<Clock /> гибкий график
							</h3>
							<p className='max-md:text-[7px] max-md:leading-3 text-[22px] font-medium max-md:mt-0 mt-8.25 max-md:mb-2.25 mb-9.75 ml-auto mr-auto max-md:ml-12.75 max-md:mr-0'>
								Занятия проходят <br /> в удобное для тебя время
							</p>
							<Time />
							<p className='max-md:text-[12px] max-md:leading-4.5 text-[22px] font-semibold font-sans max-md:mt-2.25 mt-9 ml-21 max-md:ml-12.75'>
								Пн, Вт, Ср, Чт, Пт
							</p>
						</div>
					</div>
				</div>
				<div className=''>
					<h2
						id='services'
						className='max-md:text-[13px] max-md:mt-6 max-md:mb-5 text-[40px] max-md:leading-3 leading-9 font-black flex items-center max-md:gap-1.5 gap-4.5 uppercase mt-20.25 scroll-mt-25 mb-12.75'
					>
						<span className='block w-4.5 h-4.5 max-md:w-1.25 max-md:h-1.25 bg-[#025EFF] rounded-full'></span>{' '}
						что я преподаю
					</h2>
					<div
						className={`${styles.serviceGrid} flex items-center gap-11.25 max-md:flex-col max-md:gap-4`}
					>
						<div
							className={`${styles.serviceCard} min-w-150 max-md:min-w-full max-md:max-h-34.25 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-12 pb-15 pt-6.5 rounded-[20px] max-md:pl-4.5 max-md:pt-3.5 max-md:pb-5.5`}
						>
							<h3 className='uppercase max-md:text-[14px] max-md:leading-3 text-[36px] font-bold text-[#255DC7] flex items-center gap-4.25 max-md:gap-1.75'>
								<QuotationMarks /> ИНФОРМАТИКА
							</h3>
							<div className='flex flex-col gap-3.25 mt-9.25 ml-8.25 max-md:mt-4 max-md:ml-3.5 max-md:gap-1.25'>
								<p className={styles.services}>
									<Birdie /> Программирование (Python)
								</p>
								<p className={styles.services}>
									<Birdie /> Алгоритмы и структуры данных
								</p>
								<p className={styles.services}>
									<Birdie /> Подготовка к ОГЭ и ЕГЭ
								</p>
								<p className={styles.services}>
									<Birdie /> Помощь с задачами и проектами
								</p>
							</div>
						</div>
						<div
							className={`${styles.serviceCard} min-w-150 max-md:min-w-full max-md:max-h-34.25 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-12 pb-15 pt-6.5 rounded-[20px] max-md:pl-6.75 max-md:pt-3.5 max-md:pb-5.5`}
						>
							<h3 className='uppercase max-md:text-[14px] max-md:leading-3 text-[36px] font-bold text-[#255DC7] flex items-center gap-4.25 max-md:gap-1.75'>
								<TheAmount /> математика
							</h3>
							<div className='flex flex-col gap-3.25 mt-9.25 ml-8.25 max-md:mt-4 max-md:ml-1.25 max-md:gap-1.25'>
								<p className={styles.services}>
									<Birdie /> Алгебра и геометрия
								</p>
								<p className={styles.services}>
									<Birdie /> Подготовка к ОГЭ и ЕГЭ
								</p>
								<p className={styles.services}>
									<Birdie /> Высшая математика
								</p>
								<p className={styles.services}>
									<Birdie /> Решение задач и контрольных
								</p>
							</div>
						</div>
						<img
							className='w-85 ml-auto mr-auto max-md:hidden'
							src={Thinking}
							alt=''
						/>
					</div>
				</div>
				<div>
					<h2
						id='about-me'
						className='text-[40px] max-md:text-[13px] max-md:leading-3 leading-9 font-black flex items-center gap-4.5 uppercase mt-20.25 scroll-mt-25 mb-12.75 max-md:gap-1.5 max-md:mt-6 max-md:mb-5'
					>
						<span className='block w-4.5 h-4.5 max-md:w-1.25 max-md:h-1.25 bg-[#025EFF] rounded-full'></span>{' '}
						почему со мной?
					</h2>
					<div
						className={`${styles.benefits} flex items-center gap-23.5 justify-center max-md:gap-7.75 max-md:flex-wrap`}
					>
						<p className={styles.textAboutMe}>
							<Target />
							Фокус на понимании, <br /> а не на зазубривании
						</p>
						<p className={styles.textAboutMe}>
							<Progress />
							Индустриальная <br /> программа и подход
						</p>
						<p className={styles.textAboutMe}>
							<Shield />
							Поддержка и мотивация <br /> на каждом этапе
						</p>
						<p className={styles.textAboutMe}>
							<Star />
							Реальный результат <br /> на экзаменах
						</p>
						<p className={styles.textAboutMe}>
							<Message />
							Всегда на связи, <br /> отвечу на вопросы
						</p>
					</div>
				</div>
				<div
					className={`${styles.pricing} flex justify-between items-center mt-12.75 max-md:mt-7.25 max-md:flex-wrap max-md:gap-3.75`}
				>
					<div
						className={`${styles.priceCard} bg-white pt-13 px-10.75 pb-16.25 rounded-[20px] min-w-220.5 max-md:min-w-full max-md:px-3.75 max-md:py-3.75 shadow-[0_4px_20px_rgba(0,0,0,0.08)]`}
					>
						<h3
							id='price'
							className='text-[40px] max-md:text-[13px] max-md:leading-3 mb-10 max-md:mb-8.75 font-black uppercase'
						>
							Прайс лист
						</h3>
						<div
							className={classNames(
								styles.priceRows,
								{ [styles.priceRowsExpanded]: openPrice },
								{
									['flex flex-col gap-5.25 mb-11.5 max-md:mb-0 overflow-hidden max-h-71 max-md:max-h-150 max-md:gap-1.75 transition-all']:
										!openPrice,
									['flex flex-col gap-5.25 mb-11.5 max-md:mb-0 overflow-hidden max-h-150 max-md:max-h-71 max-md:gap-1.75 transition-all']:
										openPrice,
								},
							)}
						>
							<p className={styles.priceText}>
								<span>Пробное занятие</span>
								<span className='flex-1 border-b-[3px] max-md:border-b border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>БЕСПЛАТНО</span>
							</p>
							<p className={styles.priceText}>
								<span>Подготовка к ОГЭ</span>
								<span className='flex-1 border-b-[3px] max-md:border-b border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>850 ₽</span>
							</p>
							<p className={styles.priceText}>
								<span>Подготовка к ЕГЭ</span>
								<span className='flex-1 border-b-[3px] max-md:border-b border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>950 ₽</span>
							</p>
							<p className={styles.priceText}>
								<span>Подготовка к экзамену в вузе</span>
								<span className='flex-1 border-b-[3px] max-md:border-b border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>1000 ₽</span>
							</p>
							<p className={styles.priceText}>
								<span>Повышение успеваемости</span>
								<span className='flex-1 border-b-[3px] max-md:border-b border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>800 ₽</span>
							</p>
							<p className={styles.priceText}>
								<span>Помощь с лабораторной работой</span>
								<span className='flex-1 border-b-[3px] max-md:border-b border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>700 ₽</span>
							</p>
							<p className={styles.priceText}>
								<span>Подготовка к контрольной или самостоятельной</span>
								<span className='flex-1 border-b-[3px] max-md:border-b border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>800 ₽</span>
							</p>
							<p className={styles.priceText}>
								<span>Помощь с домашней работой</span>
								<span className='flex-1 border-b-[3px] max-md:border-b border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>600 ₽</span>
							</p>
							<p className={styles.priceText}>
								<span>Помощь с решением задач</span>
								<span className='flex-1 border-b-[3px] max-md:border-b border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>700 ₽</span>
							</p>
							<p className={styles.priceText}>
								<span>Помощь с оформлением курсовой работы</span>
								<span className='flex-1 border-b-[3px] max-md:border-b border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>1000 ₽</span>
							</p>
						</div>
						<p className='text-center max-md:hidden'>
							<button
								onClick={() => setOpenPrice(prev => !prev)}
								className={styles.showPrice}
							>
								{openPrice ? <Arrow /> : 'СМОТРЕТЬ ПОЛНЫЙ ПРАЙС-ЛИСТ'}
							</button>
						</p>
					</div>
					<div
						className={`${styles.priceSide} flex flex-col gap-6.75 min-w-197.5 max-md:min-w-full max-md:gap-3.75`}
					>
						<div
							className={`${styles.duration} flex items-center gap-9.5 pl-12.75 pt-14 pb-6 max-md:px-4.25 max-md:py-3 bg-[#DEE9FC] rounded-[20px] max-md:rounded-[10px] max-w-197.5 max-md:gap-3`}
						>
							<Clock />
							<div>
								<p className={styles.lessons}>ПРОДОЛЖИТЕЛЬНОСТЬ ЗАНЯТИЯ</p>
								<img
									className='mt-5.5 mb-4 max-md:mt-2 max-md:mb-1.25 max-md:max-w-8.5 max-md:max-h-3'
									src={hour}
									alt=''
								/>
								<p className={styles.lessonsOfPeoples}>
									5 - 11 класс, студенты, взрослые
								</p>
							</div>
						</div>
						<div className={styles.questions}>
							<h3 className={styles.questionsText}>ОСТАЛИСЬ ВОПРОСЫ?</h3>
							<p className={styles.writeMe}>
								Напиши мне - отвечу <br /> и помогу подобрать формат!
							</p>
							<button
								onClick={() => setOpenModal(true)}
								className='flex items-center bg-[#0762F7] gap-2.75 pl-22.5 pr-24.75 pt-5 pb-5 max-md:px-7.5 max-md:py-2 rounded-[20px] cursor-pointer max-md:rounded-[10px] max-md:gap-1.25'
							>
								<Telegram />
								<span className='text-white leading-9 text-[22px] max-md:text-[9px] max-md:leading-3.5 uppercase font-semibold'>
									написать мне
								</span>
							</button>
						</div>
					</div>
				</div>
				<div>
					<h2
						id='reviews'
						className='text-[40px] leading-9 max-md:text-[13px] max-md:leading-3 max-md:mt-5 max-md:mb-3.75 font-black flex items-center gap-4.5 uppercase mt-20.25 scroll-mt-25 mb-12.75'
					>
						<span className='block w-4.5 h-4.5 max-md:w-1.25 max-md:h-1.25 bg-[#025EFF] rounded-full'></span>{' '}
						ОТЗЫВЫ УЧЕНИКОВ
					</h2>
					<div
						className={`${styles.reviewsGrid} flex gap-11.25 items-center max-md:gap-1.25 max-md:flex-col`}
					>
						{visible.map(obj => (
							<div
								key={obj.id}
								className={`${styles.reviewCard} bg-white max-h-71.75 w-[calc((100%-90px)/3)] max-md:w-full max-md:max-h-19 pl-8.75 pt-8.75 pr-6.5 pb-5 shrink-0 rounded-[20px] max-md:pb-3.25 max-md:px-3 max-md:pt-1.75 max-md:rounded-[10px]`}
							>
								<p className='flex items-center justify-between'>
									<Apostrophe /> <ApostropheRotate />
								</p>
								{obj.text}
								{obj.author}
							</div>
						))}
					</div>
					<div className='text-center mt-10.5 mb-6.75'>
						<button
							className='text-[40px] text-[#005CFD] mr-3.75 uppercase cursor-pointer'
							disabled={page === 0}
							onClick={() => slide(-1)}
						>
							&#8592;
						</button>
						<button
							className='text-[40px] text-[#005CFD] uppercase cursor-pointer'
							disabled={page === pagesCount - 1}
							onClick={() => slide(1)}
						>
							&#8594;
						</button>
					</div>
					<div
						className={`${styles.ctaBanner} flex items-center bg-[#005CFD] rounded-3xl pl-6.5 pt-7.75 pb-7.75 pr-24 grow-0 max-w-375 ml-auto mr-auto`}
					>
						<WhiteTelegram />
						<div className={styles.ready}>
							<p className='font-bold text-[36px] max-md:text-[8px] max-md:leading-3'>
								ГОТОВ НАЧАТЬ ПУТЬ К РЕЗУЛЬТАТУ?
							</p>
							<p className='text-[31px] mt-3.75 max-md:text-[7px] max-md:leading-3'>
								Первое занятие бесплатно - убедись сам!
							</p>
						</div>
						<button
							onClick={() => setOpenModal(true)}
							className='flex items-center bg-white gap-2.75 pl-22.5 pr-24.75 pt-5 pb-5 max-md:px-2.5 max-md:py-1.25 rounded-[20px] max-md:rounded-[10px] cursor-pointer'
						>
							<span className='text-[#005EFE] leading-9 text-[22px] max-md:text-[6px] max-md:leading-3 uppercase font-semibold'>
								написать мне
							</span>
						</button>
					</div>
				</div>
			</div>
			<Modal startShow={openModal} isClose={() => setOpenModal(false)} />
		</>
	);
}
