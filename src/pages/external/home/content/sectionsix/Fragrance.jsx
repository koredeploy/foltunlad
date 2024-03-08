import { useContext } from 'react';
import './Fragrace.scss'
import PropTypes from 'prop-types';
import ProductContext from '../../../../../context/ProductContext';
import SkeletonLoader from '../../../../../components/loader/SkeletonLoader';

const Fragrance = ({products}) => {
  const {loading} = useContext(ProductContext)
    
  return (
    <div>
        <div className='w-11/12 mx-auto responsive pb-14'>
        <div className='flex items-baseline gap-3'>
            <h1 className='big-text'>Fragrance </h1>
            <h2 className='text-green-100 '>View All</h2>
            </div>
            {loading && <SkeletonLoader/>}
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 py-5'>
          {products?.slice(0, 4).map((product) => (
    <div key={product._id} className="small-screen flex flex-col border border-gray-300 rounded-lg p-4 items-center justify-between h-[275px] md:h-[360px] xl:h-[400px] ">
        <div className="flex flex-col justify-start w-full">
            <p className="tiny-text text-left">{product.category}</p>
            <p>{product.productName}</p>
        </div>
        <div className="my-2 max-w-[180px] max-h-[160px] md:max-w-[200px] md:max-h-[230px]">
            <img className="object-cover w-full h-full " src={product.image} alt="" />
        </div>
        <div className="bg-gray-300 w-full h-[0.5px] mx-auto "></div>
        <h1 className="text-center text-green-100 big-text">#{product.amount}</h1>
    </div>
))}
          </div>
        </div>
    </div>
  )
}

Fragrance.propTypes = {
products: PropTypes.shape({
      products: PropTypes.array.isRequired
    }).isRequired
  };
export default Fragrance