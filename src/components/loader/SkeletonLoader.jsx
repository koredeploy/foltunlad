
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-7 '>
                <Skeleton className='rounded-lg  ' width={325} height={390} />
                <Skeleton className='rounded-lg  ' width={325} height={390} />
                <Skeleton className='rounded-lg  ' width={325} height={390} />
                <Skeleton className='rounded-lg  ' width={325} height={390} />
            </div>
  )
}

export default SkeletonLoader