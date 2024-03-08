
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductPageLoader = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 '>
                <Skeleton className='rounded-lg  ' width={325} height={390} />
                <Skeleton className='rounded-lg  ' width={325} height={390} />
                <Skeleton className='rounded-lg  ' width={325} height={390} />
                <Skeleton className='rounded-lg  ' width={325} height={390} />
                <Skeleton className='rounded-lg  ' width={325} height={390} />
                <Skeleton className='rounded-lg  ' width={325} height={390} />
            </div>
  )
}

export default ProductPageLoader