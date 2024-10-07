import MainTitle from '@/components/main-title'
import Image from 'next/image'

export default function AboutMe() {
	return (
		<section className='bg-white py-[50px] lg:py-[80px] 2xl:py-[100px] px-[20px] lg:px-[60px]  '>
			<div className='container p-0'>
				<div className='flex justify-between flex-col lg:flex-row items-center'>
					<div className='2xl:max-w-[760px] lg:max-w-[450px] xl:max-w-[580px] flex flex-col lg:order-none order-3'>
						<div className='lg:flex hidden flex-col'>
							<MainTitle
								text='Мене звати Віка Мірча,'
								className='text-[#E1A421] mb-[30px]'
							/>
							<div className='2xl:text-[42px] text-[28px] xl:text-[32px] font-bold uppercase leading-[35px] xl:leading-[45px]'>
								Я продюсерка та менторка експертів{' '}
							</div>
						</div>
						<div className='lg:mt-[40px] text-[18px] lg:text-[23px] 2xl:text-[28px]'>
							Я займаюся продюсуванням 3 роки. Працювала з різними нішами і
							експертами. Памятаю свій перший кейс, ми з партнером переупакували
							курс і з першого вібінару
							<span className='text-[#E1A421] ml-[5px]'>
								зробили запуск на $5000 + з нуля.
							</span>{' '}
							Тоді це було вау, бо ми не знали, що це тільки початок і згодом
							даний курс буде приносити експерту від 700 000 грн на місяць.
						</div>
						{/* <div className='mt-[30px] xl:mt-[60px] text-[18px] lg:text-[23px] 2xl:text-[28px] italic'>
							<span className='text-[#E1A421] mr-[8px]'>Моя міссія</span>
							допомагати експертам реалізовувати свій потенціал
						</div> */}
					</div>
					<div className='lg:hidden lg:order-none order-1'>
						<MainTitle
							text='Мене звати Віка Мірча,'
							className='text-[#E1A421] mb-[10px]'
						/>
						<div className='text-[24px] font-bold uppercase leading-[35px]'>
							Я продюсерка та менторка експертів{' '}
						</div>
					</div>
					<Image
						src='/about-me.jpg'
						width={500}
						height={600}
						alt='me'
						className='2xl:w-[550px] w-[320px] lg:w-[400px] xl:w-[450px] h-auto  my-[30px] lg:ml-[30px] xl:my-0 lg:order-none order-2'
					/>
				</div>
			</div>
		</section>
	)
}
