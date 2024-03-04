import './HeroSection.scss'
import heroImg from '../../../../../assets/images/image-1.webp'
import wholesaleIcon from '../../../../../assets/icons/wholesales-icon.svg'
import retailIcon from '../../../../../assets/icons/retail-icon.svg'
import householdIcon from '../../../../../assets/icons/household-needs-icon.svg'
import pefImg from '../../../../../assets/images/perfume-img.svg'

const HeroSection = () => {
  return (
    <div >
        <div className='hero-section'>
        <div className='w-11/12 mx-auto grid  grid-cols-1 lg:grid-cols-2 justify-center items-center responsive py-14'>
            <div className='text-white-100 flex flex-col justify-center items-center lg:items-start gap-9 w-full lg:w-5/6'>
                <h1 className='text-2xl lg:text-6xl text-white-100'>Grocery Varieties <span className='fw-normal  text-xl lg:text-5xl' >Made Available Just</span> For You.</h1>
                <p className='text-white-100 fw-light '>Lorem ipsum dolor sit amet, consetetur adipiscing elit. Dignissim lvinar placerat nulla ipsum pretium curabitur enim tortor neqcorper in que dolor orci. Nisl pretium in ut viverra nibh duis quis. Non auctor in pharetra ultricies augue enim.</p>
                <button className='px-4 py-3 w-48 rounded-full bg-green-100 text-white-100' >Explore Products</button>
            </div>
            <div className='pb-16'>
                <img className='w-full items-end' src={heroImg} alt="" />
            </div>
        </div>
    </div>
    <div className='w-11/12 mx-auto  -translate-y-32 z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 '>
        <div className='bg-white-200 flex flex-col gap-3 items-center justify-center text-center p-8 rounded-lg shadow-md'>
            <img src={wholesaleIcon} alt="" />
            <h1>Wholesale</h1>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque eleifend orci consec.</p>
        </div>
        <div className='bg-white-200 flex flex-col gap-3 items-center justify-center text-center p-8 rounded-lg shadow-md'>
            <img src={retailIcon} alt="" />
            <h1>Wholesale</h1>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque eleifend orci consec.</p>
        </div>
        <div className='bg-white-200 flex flex-col gap-3 items-center justify-center text-center p-8 rounded-lg shadow-md'>
            <img src={householdIcon} alt="" />
            <h1>Wholesale</h1>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque eleifend orci consec.</p>
        </div>
        <div className='bg-green-100 flex flex-col gap-3 items-start justify-center text-start p-8 rounded-lg shadow-md'>
            <div className='bg-red-200 rounded-3xl p-2'>
                <p className='text-white-100 text-sm'>35% Off Promo</p>
            </div>
        
            <h1 className='text-white-100'>OudTouch Frank Olivier</h1>
            <p className='text-white-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque eleifend orci consec.</p>
            <p className='text-white-100'>Learn More</p>
            <img src={pefImg} alt="" className='translate-x-5 z-20 absolute -bottom-20 -right-0' />
        </div>

    </div>
    </div>
  )
}

export default HeroSection