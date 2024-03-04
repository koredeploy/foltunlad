import React, { useState } from 'react'
import HeroSection from './content/hero/HeroSection'
import Products from './content/products/Products'

const AllProduct = () => {
  const [isFilter, setIsFilter] = useState("")
  const handleFilter = (filter) => {
    setIsFilter(filter)
  }
  return (
    <div>
        <HeroSection isFilter={isFilter}/>
        <Products getFilter={handleFilter} />
    </div>
  )
}

export default AllProduct