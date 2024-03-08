import './SectionTwo.scss'
import bestSellerOne from '../../../../../assets/images/best-seller-01.svg'
import bestSellerTwo from '../../../../../assets/images/best-seller-02.svg'
import bestSellerThree from '../../../../../assets/images/best-seller-03.svg'

const SectionTwo = () => {
  return (
    <div className="bg-[#EEF8FD]">
        <div className="py-10 w-11/12 mx-auto responsive grid grid-cols-1 lg:grid-cols-3 gap-8" >
            <div className='best-seller-bg-one p-4 flex justify-evenly items-center h-[207px] md:h-[232px] rounded-xl'>
                <span><img className='h-[170px] md:h-[190px] object-cover' src={bestSellerOne} alt="" /></span>
                <div>
                <div className=" bg-orange-100 px-2 py-1 w-20 rounded-3xl mb-3">
                <p className='text-white-100 tiny-text'>Best Seller</p>
                </div>
                <h1 className='text-white-100 big-text'>Aptamil</h1>
                <p className='text-white-100 text-sm'>Quality and Affordable.</p>
                </div>
            </div>
            <div className='best-seller-bg-two p-4 justify-evenly flex items-center h-[207px] md:h-[232px]  rounded-xl'>
                <span><img className='h-[170px] md:h-[190px] object-cover' src={bestSellerTwo} alt="" /></span>
                <div>
                <div className=" bg-orange-100 px-2 py-1 w-20 rounded-3xl mb-3">
                <p className='text-white-100 tiny-text'>Best Seller</p>
                </div>
                <h1 className='text-white-100 big-text'>Fox’s Cookies</h1>
                <p className='text-white-100 text-sm'>Worth Every Bite.</p>
                </div>
            </div>
            <div className='best-seller-bg-three justify-evenly flex p-4 items-center h-[207px] md:h-[232px] rounded-xl'>
                <span><img className='h-[170px] md:h-[190px] object-cover' src={bestSellerThree} alt="" /></span>
                <div>
                <div className=" bg-orange-100 px-2 py-1 w-20 rounded-3xl mb-3">
                <p className='text-white-100 tiny-text'>Best Seller</p>
                </div>
                <h1 className='text-white-100 big-text'>5Alive Pulpy</h1>
                <p className='text-white-100 text-sm'>A Sip is all it takes.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo