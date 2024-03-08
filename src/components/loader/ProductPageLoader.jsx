
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductPageLoader = () => {
  return (
    <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-7 '>
                <Skeleton className='rounded-lg w-full lg:w-[210px]  xl:w-[300px] h-[370px] ' />
                <Skeleton className='rounded-lg  w-full lg:w-[210px]  xl:w-[300px] h-[370px]' />
                <Skeleton className='rounded-lg w-full lg:w-[210px]  xl:w-[300px] h-[370px] ' />
                <Skeleton className='rounded-lg w-full lg:w-[210px]  xl:w-[300px] h-[370px] ' />
                <Skeleton className='rounded-lg w-full lg:w-[210px]  xl:w-[300px] h-[370px] ' />
                <Skeleton className='rounded-lg w-full lg:w-[210px]  xl:w-[300px] h-[370px] ' />
            </div>
  )
}

export default ProductPageLoader