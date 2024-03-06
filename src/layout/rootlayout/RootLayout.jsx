
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { ProductProvider } from '../../context/ProductContext'

const RootLayout = () => {
  return (
    <div>
      <ProductProvider>
        <Navbar/>
        <Outlet /> 
        <Footer/>
      </ProductProvider>
    </div>
  )
}

export default RootLayout