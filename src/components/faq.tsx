import MainTitle from '@/components/main-title'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from './ui/accordion'

export default function Faq() {
	return (
		<section className='bg-white py-[50px] lg:py-[80px] 2xl:py-[100px] px-[20px] lg:px-[60px] mt-[-1px]'>
			<div className='container p-0'>
				<MainTitle
					text='ВІДПОВІДІ НА ВАШІ ПИТАННЯ'
					className='text-center mb-[50px] lg:mb-[100px] text-[#e1a421] '
				/>
				<div className='flex flex-col justify-center max-w-[1100px] m-auto'>
					<Accordion type='single' collapsible>
						<AccordionItemCustom
							title='Чи зможу я запустити свій продукт або послугу завдяки інтенсивy?'
							descr='Так, даний інтенсив мість базові інструменти, які допоможуть тобі зробити запуск з нуля'
							value='item-1'
						/>
						<AccordionItemCustom
							title='Який рівень складності даного інтенсиву?'
							descr='На інтенсиві не буде складних формулювань та завдань, матеріал доступний для розуміння новачків'
							value='item-2'
						/>
						<AccordionItemCustom
							title='Чи зможу я самостійно запустити свій продукт, якщо я новачок?'
							descr='Програма побудована так, щоб будь-який новачок зміг розібратися - інструменти і рішення прості і доступні для розуміння. Для перших запусків цього буде достатньо.'
							value='item-3'
						/>
						<AccordionItemCustom
							title='Як зрозуміти, що мені точно треба робити запуск самостійно, а не шукати продюсера'
							descr=''
							value='item-4'
						/>
					</Accordion>
				</div>
			</div>
		</section>
	)
}

type AccordionItemCustomProps = {
	title: string
	descr: string
	value: string
}

function AccordionItemCustom({
	title,
	descr,
	value,
}: AccordionItemCustomProps) {
	return (
		<AccordionItem value={value} className='md:mb-[30px] mb-[15px] '>
			<AccordionTrigger
				className='text-[18px] md:text-[24px] xl:text-[30px] rounded-3xl bg-[#50584b] font-bold text-left px-[20px]
			h-[165px] md:h-[120px] xl:h-[140px] text-white leading-[24px] md:leading-normal'
			>
				{title}
			</AccordionTrigger>
			<AccordionContent className='xl:text-[25px] text-[18px] md:text-[18px] p-[20px] leading-normal text-[#e1a421] italic font-bold'>
				{value === 'item-4' ? (
					<>
						- якщо це ваш перший запуск і вам треба протестувати продукт
						<br />
						- якщо у вас немає бюджету на команду
						<br />
						- якщо у вас немає кейсів клієнтів і вам треба їх напрацювати
						<br />
						- якщо ви робили запуски з продюсером, але ви зрозуміли, що не хочете
						ділити дохід з кимось і готові взяти відповідальність на себе за
						свій проект
					</>
				) : (
					descr
				)}
			</AccordionContent>
		</AccordionItem>
	)
}
