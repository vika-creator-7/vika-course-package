import Course from '@/components/course'
import CourseFor from '@/components/course-for'
import ExpertsReviews from '@/components/experts-reviews'

import AboutMe from '@/components/about-me'
import Benefits from '@/components/benefits'
import BuyCourse from '@/components/buy-course'
import Faq from '@/components/faq'
import FirstScreen from '@/components/first-screen'
import Footer from '@/components/footer'
import HowCourseGoes from '@/components/how-course-goes'
import MyActivities from '@/components/my-activities'
import Popup from '@/components/popup'
import Program from '@/components/program'
import Reviews from '@/components/reviews'

export default function Home() {
	return (
		<main className=''>
			<FirstScreen />
			<Benefits />
			<Course />
			<MyActivities />
			<AboutMe />
			<Program />
			<ExpertsReviews />
			{/* <Reviews /> */}
			<HowCourseGoes />
			<Faq />
			<CourseFor />
			<BuyCourse />
			<Footer />
			<Popup />
		</main>
	)
}
