import MainTitle from '@/components/main-title'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from './ui/accordion'

export default function Faq() {
	return (
		<section className='bg-white py-[50px] lg:py-[80px] 2xl:py-[100px] px-[20px] lg:px-[60px]'>
			<div className='container p-0'>
				<MainTitle
					text='ВІДПОВІДІ НА ВАШІ ПИТАННЯ'
					className='text-center mb-[50px] lg:mb-[100px] text-[#e1a421] '
				/>
				<div className='flex flex-col justify-center max-w-[1100px] m-auto'>
					<Accordion type='single' collapsible>
						<AccordionItemCustom
							title='Чи зможу я упакувати свої продукти і послуги завдяки курсу?'
							descr='Так, даний курс допоможе вам знайти свій напрямок, зробити гарну упаковку та почати заробляти на запусках продуктів і послуг'
							value='item-1'
						/>
						<AccordionItemCustom
							title='Який рівень складності даного курсу? '
							descr='На курсі не буде складних формулювань та завдань, матеріал доступний для розуміння новачків.'
							value='item-2'
						/>
						<AccordionItemCustom
							title='Як зрозуміти, що мені точно треба упаковка або переупаковка продукті і послуг'
							descr=''
							value='item-3'
						/>
						<AccordionItemCustom
							title='Чи зможу я упакувати свої продукти і послуги, якщо я новачок? Боюся, що не вийде ідеально'
							descr='Краще відкинути перфекціонізм і зробити так, як ви можете прямо зараз. Коли отримаєте свої перші результати то з кожним разом будете покращувати упаковку, продукт і тд. Перфекціонізм - наслідок травми і рано чи пізно доведеться з ним попрощатися, щоб отримати свої результати.'
							value='item-4'
						/>
						<AccordionItemCustom
							title='Я вже пробував (ла) зробити самостійно упаковку, але нічого не вийшло'
							descr='Даний міні курс може стати трампліном для запуску вашого майбутнього курсу або менторства, бо містить базові речі по самопродюсуванню'
							value='item-5'
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
				className='text-[20px] md:text-[24px] xl:text-[30px] rounded-3xl bg-[#50584b] font-bold text-left px-[20px]
			h-[180px] md:h-[120px] xl:h-[140px] text-white leading-[24px] md:leading-normal'
			>
				{title}
			</AccordionTrigger>
			<AccordionContent className='xl:text-[25px] text-[18px] md:text-[20px] p-[20px] leading-normal text-[#e1a421] italic font-bold'>
				{value === 'item-3' ? (
					<>
						Вам треба упаковка, якщо ви:
						<br />
						- не можете доносити цінність своїх продуктів і послуг клієнтам
						<br />
						- не можете роками підвищити прайс на послуги і продукти
						<br />- багато знаєте і вмієте, але не заробляєте на своїй
						експертизі
					</>
				) : (
					descr
				)}
			</AccordionContent>
		</AccordionItem>
	)
}
