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
import { useRef, useState } from 'react';
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
			<p className='mb-12.25 mt-3.25 text-[24px] font-medium line-clamp-3'>
				Благодаря занятиям поднял баллы <br /> по информатике с 60 до 91 на ЕГЭ.{' '}
				<br /> Объясняет просто и понятно!
			</p>
		),
		author: (
			<p className='text-[22px]'>
				<span className='font-medium'>Алексей</span>, 11 класс
			</p>
		),
	},
	{
		id: '2',
		text: (
			<p className='mb-12.25 mt-3.25 text-[24px] font-medium line-clamp-3'>
				Подготовка к ОГЭ прошла отлично, <br /> занятия интересные и
				продуктивные. <br /> Рекомндую!
			</p>
		),
		author: (
			<p className='text-[22px]'>
				<span className='font-medium'>Мария</span>, 9 класс
			</p>
		),
	},
	{
		id: '3',
		text: (
			<p className='mb-12.25 mt-3.25 text-[24px] font-medium line-clamp-3'>
				Помог с решением задач по высшей <br /> математике в университете, все
				четко <br /> и по делу.
			</p>
		),
		author: (
			<p className='text-[22px]'>
				<span className='font-medium'>Иван</span>, студент
			</p>
		),
	},
	{
		id: '4',
		text: (
			<p className='mb-12.25 mt-3.25 text-[24px] font-medium line-clamp-3'>
				Сын подтянул алгебру за полгода: с <br /> тройки перешел на твердую
				четверку, <br /> ОГЭ сдал на «хорошо».
			</p>
		),
		author: (
			<p className='text-[22px]'>
				<span className='font-medium'>Елена</span>, мама ученика 9 класса
			</p>
		),
	},
	{
		id: '5',
		text: (
			<p className='mb-12.25 mt-3.25 text-[24px] font-medium line-clamp-3'>
				Готовился к ЕГЭ по информатике всего <br /> 4 месяца, в итоге 84 балла.
				Раньше <br /> боялся 27-го задания, а на экзамене <br /> решил его без
				ошибок.
			</p>
		),
		author: (
			<p className='text-[22px]'>
				<span className='font-medium'>Дмитрий</span>, 11 класс
			</p>
		),
	},
	{
		id: '6',
		text: (
			<p className='mb-12.25 mt-3.25 text-[24px] font-medium line-clamp-3'>
				Пересдавал экзамен по мат. анализу в <br /> вузе. После месяца занятий
				сдал на <br /> "хорошо" Объяснили буквально «на <br /> пальцах». Очень
				выручили!
			</p>
		),
		author: (
			<p className='text-[22px]'>
				<span className='font-medium'>Игорь</span>, студент 2 курса
			</p>
		),
	},
];

const VISIBLE = 3;

export function Information() {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [openPrice, setOpenPrice] = useState<boolean>(false);
	const trackRef = useRef<HTMLDivElement>(null);
	const [index, setIndex] = useState(0);

	const maxIndex = REVIEWS.length - VISIBLE;

	const slide = (dir: -1 | 1) => {
		const track = trackRef.current;
		if (!track) return;

		const next = Math.min(Math.max(index + dir, 0), maxIndex);
		setIndex(next);

		const card = track.children[0] as HTMLDivElement;
		const step = card.offsetWidth + 45;

		track.scrollTo({ left: next * step, behavior: 'smooth' });
	};

	return (
		<>
			<div className={styles.container}>
				<div>
					<h2
						id='lesson-format'
						className='text-[40px] leading-9 font-black flex items-center gap-4.5 uppercase mt-20.25 scroll-mt-25 mb-12.75'
					>
						<span className='block w-4.5 h-4.5 bg-[#025EFF] rounded-full'></span>{' '}
						форма занятий
					</h2>
					<div className='flex items-center ml-9'>
						<img src={laptopWithCamera} alt='' />
						<div className='flex flex-col gap-14.5 ml-19 mr-33.5'>
							<p className='flex items-center gap-7.25 text-[22px] leading-9 font-medium'>
								<CheckMark /> Онлайн занятия <br /> по видеосвязи
							</p>
							<p className='flex items-center gap-7.25 text-[22px] leading-9 font-medium'>
								<CheckMark /> Интерактивная <br /> доска и материалы
							</p>
							<p className='flex items-center gap-7.25 text-[22px] leading-9 font-medium'>
								<CheckMark /> Удобный график <br /> под тебя
							</p>
							<p className='flex items-center gap-7.25 text-[22px] leading-9 font-medium'>
								<CheckMark /> Записи занятий <br /> и поддержка
							</p>
						</div>
						<div className='flex flex-col justify-end min-w-133 min-h-100.25 bg-white rounded-[20px] p-11.75 shadow-[0_4px_20px_rgba(0,0,0,0.08)]'>
							<h3 className='text-[29px] leading-9 font-black uppercase flex items-center gap-7.25'>
								<Clock /> гибкий график
							</h3>
							<p className='text-[22px] font-medium mt-8.25 mb-9.75 ml-auto mr-auto'>
								Занятия проходят <br /> в удобное для тебя время
							</p>
							<Time />
							<p className='text-[22px] font-semibold font-sans mt-9 ml-21'>
								Пн, Вт, Ср, Чт, Пт
							</p>
						</div>
					</div>
				</div>
				<div className='mt-12'>
					<h2
						id='services'
						className='text-[40px] leading-9 font-black flex items-center gap-4.5 uppercase mt-20.25 scroll-mt-25 mb-12.75'
					>
						<span className='block w-4.5 h-4.5 bg-[#025EFF] rounded-full'></span>{' '}
						что я преподаю
					</h2>
					<div className='flex items-center gap-11.25'>
						<div className='min-w-150 min-h-9 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-12 pb-15 pt-6.5 rounded-[20px]'>
							<h3 className='uppercase text-[36px] font-bold text-[#255DC7] flex items-center gap-4.25'>
								<QuotationMarks /> ИНФОРМАТИКА
							</h3>
							<div className='flex flex-col gap-3.25 mt-9.25 ml-8.25'>
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
						<div className='min-w-150 min-h-9 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-12 pb-15 pt-6.5 rounded-[20px]'>
							<h3 className='uppercase text-[36px] font-bold text-[#255DC7] flex items-center gap-4.25'>
								<TheAmount /> математика
							</h3>
							<div className='flex flex-col gap-3.25 mt-9.25 ml-8.25'>
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
						<img className='w-85' src={Thinking} alt='' />
					</div>
				</div>
				<div>
					<h2
						id='about-me'
						className='text-[40px] leading-9 font-black flex items-center gap-4.5 uppercase mt-20.25 scroll-mt-25 mb-12.75'
					>
						<span className='block w-4.5 h-4.5 bg-[#025EFF] rounded-full'></span>{' '}
						почему со мной?
					</h2>
					<div className='flex items-center gap-23.5 justify-center'>
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
				<div className='flex justify-between items-center mt-12.75'>
					<div className='bg-white pt-13 px-10.75 pb-16.25 rounded-[20px] min-w-220.5'>
						<h3 id='price' className='text-[40px] mb-10 font-black uppercase'>
							Прайс лист
						</h3>
						<div
							className={classNames({
								['flex flex-col gap-5.25 mb-11.5 overflow-hidden max-h-71 transition-all']:
									!openPrice,
								['flex flex-col gap-5.25 mb-11.5 overflow-hidden max-h-150 transition-all']:
									openPrice,
							})}
						>
							<p className={styles.priceText}>
								<span>Пробное занятие</span>
								<span className='flex-1 border-b-[3px] border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>БЕСПЛАТНО</span>
							</p>
							<p className={styles.priceText}>
								<span>Подготовка к ОГЭ</span>
								<span className='flex-1 border-b-[3px] border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>850 ₽</span>
							</p>
							<p className={styles.priceText}>
								<span>Подготовка к ЕГЭ</span>
								<span className='flex-1 border-b-[3px] border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>950 ₽</span>
							</p>
							<p className={styles.priceText}>
								<span>Подготовка к экзамену в вузе</span>
								<span className='flex-1 border-b-[3px] border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>1000 ₽</span>
							</p>
							<p className={styles.priceText}>
								<span>Повышение успеваемости</span>
								<span className='flex-1 border-b-[3px] border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>800 ₽</span>
							</p>
							<p className={styles.priceText}>
								<span>Помощь с лабораторной работой</span>
								<span className='flex-1 border-b-[3px] border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>700 ₽</span>
							</p>
							<p className={styles.priceText}>
								<span>Подготовка к контрольной или самостоятельной</span>
								<span className='flex-1 border-b-[3px] border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>800 ₽</span>
							</p>
							<p className={styles.priceText}>
								<span>Помощь с домашней работой</span>
								<span className='flex-1 border-b-[3px] border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>600 ₽</span>
							</p>
							<p className={styles.priceText}>
								<span>Помощь с решением задач</span>
								<span className='flex-1 border-b-[3px] border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>700 ₽</span>
							</p>
							<p className={styles.priceText}>
								<span>Помощь с оформлением курсовой работы</span>
								<span className='flex-1 border-b-[3px] border-dotted border-[#b6c6e3]'></span>
								<span className='text-[#0762F7] font-bold'>1000 ₽</span>
							</p>
						</div>
						<p className='text-center'>
							<button
								onClick={() => setOpenPrice(prev => !prev)}
								className={styles.showPrice}
							>
								{openPrice ? <Arrow /> : 'СМОТРЕТЬ ПОЛНЫЙ ПРАЙС-ЛИСТ'}
							</button>
						</p>
					</div>
					<div className='flex flex-col gap-6.75 min-w-197.5'>
						<div className='flex items-center gap-9.5 pl-12.75 pt-14 pb-6 bg-[#DEE9FC] rounded-[20px] max-w-197.5'>
							<Clock />
							<div>
								<p className={styles.lessons}>ПРОДОЛЖИТЕЛЬНОСТЬ ЗАНЯТИЯ</p>
								<img className='mt-5.5 mb-4' src={hour} alt='' />
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
								className='flex items-center bg-[#0762F7] gap-2.75 pl-22.5 pr-24.75 pt-5 pb-5 rounded-[20px] cursor-pointer'
							>
								<Telegram />
								<span className='text-white leading-9 text-[22px] uppercase font-semibold'>
									написать мне
								</span>
							</button>
						</div>
					</div>
				</div>
				<div>
					<h2
						id='reviews'
						className='text-[40px] leading-9 font-black flex items-center gap-4.5 uppercase mt-20.25 scroll-mt-25 mb-12.75'
					>
						<span className='block w-4.5 h-4.5 bg-[#025EFF] rounded-full'></span>{' '}
						ОТЗЫВЫ УЧЕНИКОВ
					</h2>
					<div
						ref={trackRef}
						className='flex gap-11.25 items-center overflow-x-hidden'
					>
						{REVIEWS.map(obj => (
							<div
								id={obj.id}
								className='bg-white max-h-71.75 w-[calc((100%-95px)/3)] pl-8.75 pt-8.75 pr-6.5 pb-5 shrink-0 rounded-[20px]'
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
							disabled={index === 0}
							onClick={() => slide(-1)}
						>
							&#8592;
						</button>
						<button
							className='text-[40px] text-[#005CFD] uppercase cursor-pointer'
							disabled={index === maxIndex}
							onClick={() => slide(1)}
						>
							&#8594;
						</button>
					</div>
					<div className='flex items-center bg-[#005CFD] rounded-3xl pl-6.5 pt-7.75 pb-7.75 pr-24 grow-0 max-w-375 ml-auto mr-auto'>
						<WhiteTelegram />
						<div className={styles.ready}>
							<p className='font-bold text-[36px]'>
								ГОТОВ НАЧАТЬ ПУТЬ К РЕЗУЛЬТАТУ?
							</p>
							<p className='text-[31px] mt-3.75'>
								Первое занятие бесплатно - убедись сам!
							</p>
						</div>
						<button
							onClick={() => setOpenModal(true)}
							className='flex items-center bg-white gap-2.75 pl-22.5 pr-24.75 pt-5 pb-5 rounded-[20px] cursor-pointer'
						>
							<span className='text-[#005EFE] leading-9 text-[22px] uppercase font-semibold'>
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
