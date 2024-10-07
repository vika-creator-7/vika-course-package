import Image from 'next/image'
import MainTitle from './main-title'

export default function HowCourseGoes() {
	return (
		<section className='py-[20px] lg:py-[80px] 2xl:py-[100px] px-[20px] lg:px-[60px] bg-[#e1a421]'>
			<div className='container p-0 '>
				<MainTitle
					text='ЯК БУДЕ ПРОХОДИТИ НАВЧАННЯ?'
					className='mb-[40px] xl:mb-[100px] lg:mb-[60px] !leading-normal text-center '
				/>
				<div className='flex lg:justify-between justify-evenly flex-wrap'>
					<div className='w-[300px] lg:w-[400px] xl:h-[550px] lg:h-[520px] h-[320px] bg-slate-100 py-[30px] px-[20px] rounded-2xl xl:text-[28px] lg:text-[24px] text-[18px] lg:my-[20px] my-[10px] mx-[5px]'>
						<Image
							src='/telegram-black.png'
							className='m-auto mb-[20px] w-[50px] h-[50px] lg:w-[75px] lg:h-[75px]'
							alt='main'
							width={74}
							height={74}
						/>
						<div>
							Після оплати ти попадеш в
							<span className='text-[#e1a421] font-bold mx-[5px]'>
								закритий Telegram канал
							</span>
							предзапису і на тебе буде чекати подарунок.
						</div>
					</div>
					<div className='w-[320px] lg:w-[400px] xl:h-[550px] lg:h-[520px] h-[320px] bg-slate-100 py-[30px] px-[20px] rounded-2xl xl:text-[28px] lg:text-[24px] text-[18px] lg:my-[20px] my-[10px] mx-[5px]'>
						<Image
							src='/results.png'
							className='m-auto mb-[20px] w-[50px] h-[50px] lg:w-[75px] lg:h-[75px]'
							alt='main'
							width={74}
							height={74}
						/>
						<div>
						Перші два дні інтенсиву я буду ділитися своїм досвідом та методиками  по упаковці продуктів та послуг, які ти зможеш одразу примінити на практиці 
						</div>
					</div>
					{/* <div className='w-[320px] lg:w-[400px] xl:h-[550px] lg:h-[520px] h-[320px] bg-slate-100 py-[30px] px-[20px] rounded-2xl xl:text-[28px] lg:text-[24px] text-[18px] lg:my-[20px] my-[10px] mx-[5px]'>
						<Image
							src='/unlimited.png'
							className='m-auto mb-[20px] w-[50px] h-[50px] lg:w-[75px] lg:h-[75px]'
							alt='main'
							width={74}
							height={74}
						/>
						<div>
							Доступ до уроків зберігається
							<span className='text-[#e1a421] font-bold mx-[5px]'>
								назавжди
							</span>
						</div>
					</div> */}
					<div className='w-[320px] lg:w-[400px] xl:h-[550px] lg:h-[520px] h-[320px] bg-slate-100 py-[30px] px-[20px] rounded-2xl xl:text-[28px] lg:text-[24px] text-[18px] lg:my-[20px] my-[10px] mx-[5px]'>
						<Image
							src='/talk.png'
							className='m-auto mb-[20px] w-[50px] h-[50px] lg:w-[75px] lg:h-[75px]'
							alt='main'
							width={74}
							height={74}
						/>
						<div>
						На третій день інтенсиву буде сесія, на якій я буду розберу кейси і питання учасників
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
