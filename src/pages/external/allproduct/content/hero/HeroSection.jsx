import React, { useEffect, useState } from 'react'
import "./HeroSection.scss"
import arrowDown from "../../../../../assets/icons/breadcum-icon.svg"
import dotIcon from "../../../../../assets/icons/dot-icon.svg"

const HeroSection = ({isFilter}) => {
  const [filter, setFilter] = useState("")

  useEffect(() => {
    setFilter(isFilter)
  
  }, [isFilter])
  return (
    <div className='all-product-bg h-[300px] md:h-[400px] lg:h-[430px]'>
        <div className='responsive flex flex-col h-full justify-center items-center py-14'>
            <h1 className='flex items-center gap-3 text-white-100 sm:text-5xl text-3xl text-center '>Products <span><img src={dotIcon} alt="" /> </span> {filter ? `${filter}` : "All"}</h1>

            <span className='flex justify-center items-center pt-3'>
                <img src={arrowDown} alt="" />
            </span>
        </div>
    </div>
  )
}

export default HeroSection