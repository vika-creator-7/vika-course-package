import { Raleway } from 'next/font/google'
import Image from 'next/image'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel'

const raleway = Raleway({ subsets: ['latin'] })

export default function ExpertsReviews() {
	return (
		<section className='bg-white py-[50px] lg:py-[80px] 2xl:py-[100px] px-[20px] lg:px-[60px] '>
			<div className='container p-0'>
				<h2
					className={`text-[28px] max-w-[900px] 2xl:max-w-[1400px] sm:text-[36px] xl:text-[46px] 2xl:text-[65px] text-black text-center leading-[46px] font-bold 2xl:leading-[80px] uppercase m-auto mb-[20px] xl:mb-[100px] ${raleway.className}`}
				>
					Приклади експертів
				</h2>

				<div>
					<div className='flex justify-center text-center'>
						<div className='flex flex-col items-center md:w-[600px]'>
							{/* <div className='text-[30px]'>
								<h2 className='text-[28px] md:text-[40px] 2xl:text-[50px] text-[#e1a421] font-black mb-[10px] lg:mb-[20px]'>
									Айті школа
								</h2>
								<div className='text-[20px] md:text-[22px] lg:text-[26px] 2xl:text-[30px]'>
									Масштабування з 350 000 грн на 665 000 грн
									<br />
									Ми зробили переупаковку курсів і прогрів побудовний на історії
									та автентичності експерта
								</div>
							</div> */}
							{/* <Image
								src='/expert-rev-1.jpeg'
								width={500}
								height={10}
								alt='expert-rev'
								className='md:mt-[40px] mt-[10px] w-[320px] lg:w-[500px] '
							/> */}
							<div className='flex justify-between'>
								<div className='mb-[60px] flex '>
									<Carousel
										className='m-auto rounded-[40px] w-[330px] h-[330px] lg:h-[560px] lg:w-[600px] py-[20px] md:px-[30px] px-[10px]'
										opts={{
											align: 'start',
										}}
									>
										<CarouselContent className='w-[420] md:w-[550px] lg:w-[600px] '>
											<CarouselItem className='rounded-2xl '>
												<div className='text-white text-[25px] my-[10px]'>
													<Image
														src='/experts-reviews-1.jpg'
														className='w-[300px] lg:w-[500px]'
														alt='profile'
														width={300}
														height={300}
													/>
													/
												</div>
											</CarouselItem>
											<CarouselItem className='rounded-2xl '>
												<div className='text-white text-[25px] my-[10px]'>
													<Image
														src='/experts-reviews-2.jpg'
														className='lg:w-[500px]'
														alt='profile'
														width={330}
														height={300}
													/>
													/
												</div>
											</CarouselItem>
											<CarouselItem className='rounded-2xl '>
												<div className='text-white text-[25px] my-[10px]'>
													<Image
														src='/experts-reviews-3.jpg'
														className='lg:w-[500px]'
														alt='profile'
														width={300}
														height={300}
													/>
													/
												</div>
											</CarouselItem>
											<CarouselItem className='rounded-2xl '>
												<div className='text-white text-[25px] my-[10px]'>
													<Image
														src='/experts-reviews-4.jpg'
														className='lg:w-[500px]'
														alt='profile'
														width={300}
														height={300}
													/>
													/
												</div>
											</CarouselItem>
										</CarouselContent>
										<CarouselPrevious />
										<CarouselNext />
									</Carousel>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='text-[21px] md:text-[24px] lg:text-[30px] mt-[50px] font-bold  text-[#f65f0b] text-center'>
					МИ ОТРИМАЛИ КРУТІ РЕЗУЛЬТАТИ ЗАВДЯКИ ТОМУ ЩО УПАКУВАЛИ СУПЕР СИЛУ,
					ІСТОРІЮ І ДОСВІД ЕКСПЕРТА В ЗАТРЕБУВАНИЙ ПРОДУКТ
				</div>
			</div>
		</section>
	)
}
