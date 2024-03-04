import Testimonial from '../../../layout/sharedLayout/testimonial/Testimonial'
import NewsLetter from '../../../layout/sharedLayout/newsletter/NewsLetter' 
import HeroSection from './content/hero/HeroSection'
const HomePage = () => {
  return (
    <div className='bg-white-200'>
      <HeroSection/>
      <Testimonial/>
      <NewsLetter/>
    </div>
  )
}

export default HomePage