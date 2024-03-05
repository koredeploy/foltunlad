import {useContext} from 'react'
import Testimonial from '../../../layout/sharedLayout/testimonial/Testimonial'
import NewsLetter from '../../../layout/sharedLayout/newsletter/NewsLetter' 
import HeroSection from './content/hero/HeroSection'
import LatestProducts from './content/sectionone/LatestProducts'
import ProductContext from '../../../context/ProductContext'
const HomePage = () => {
  const { latestProduct, provisions, fragrance, wineAndDrinks, costmeticsAndToiletries  } = useContext(ProductContext)
  console.log(latestProduct)
  console.log(provisions)
  console.log(fragrance)
  console.log(wineAndDrinks)
  console.log(costmeticsAndToiletries)

  return (
    <div className='bg-white-200'>
      <HeroSection/>
      <LatestProducts/>
      <Testimonial/>
      <NewsLetter/>
    </div>
  )
}

export default HomePage