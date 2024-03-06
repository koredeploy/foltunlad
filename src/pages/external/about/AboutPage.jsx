
import Testimonial from '../../../layout/sharedLayout/testimonial/Testimonial'
import NewsLetter from '../../../layout/sharedLayout/newsletter/NewsLetter'
import HeroSection from './content/hero/HeroSection'
import SectionOne from './content/sectionone/SectionOne'
import SectionTwo from './content/sectiontwo/SectionTwo'

const AboutPage = () => {
  return (
    <div>
        <div className='pt-[5.5rem] md:pt-[6.5rem] lg:pt-[8.5rem]' >
        <HeroSection/>
        <SectionOne/>
        <SectionTwo/>
        <Testimonial/>
        <NewsLetter/>
        </div>
    </div>
  )
}

export default AboutPage