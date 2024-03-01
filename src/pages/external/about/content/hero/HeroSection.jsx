import './HeroSection.scss'
import arrowDown from "../../../../../assets/icons/breadcum-icon.svg"
const HeroSection = () => {
  return (
    <div className="py-14 hero-bg flex flex-col justify-center items-center">
      <div className='py-14 md:py-11 xl:py-14 d-flex flex-col justify-center items-center responsive'>
      <h1 className='text-white-100 text-3xl text-center'>About Mediq Mart</h1>
      <span className='flex justify-center items-center pt-3'>
      <img src={arrowDown} alt="" />
      </span>
      </div>
    </div>
  )
}

export default HeroSection