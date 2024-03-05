import { useState } from "react"
import {useNavigate} from "react-router-dom"
import blackSearch from "../../assets/icons/search-black.svg"
import graySearch from "../../assets/icons/search-gray.svg"


const Search = ({setIsSearch}) => {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    

    const handleSearch = (e) => {
        e.preventDefault()
        window.scrollTo(0, 0)
        const encodedSearch = encodeURIComponent(search);
        navigate(`/products/?search=${encodedSearch}`)
        setIsSearch(false)
        window.location.reload()
    } 

    
  return (
    <div className="absolute z-40 bg-white-100 max-w-[1200px] w-full mx-auto h-[404px] p-6 lg:top-[-2px] top-[84px] lg:-left-[0px] right-[0px] rounded-none lg:rounded-3xl shadow-2xl border-2 border-gray-300">
        <div className="flex flex-col gap-7">
            <div>
                <form className="flex gap-3 items-center relative" onSubmit={handleSearch}>
                <img src={blackSearch} alt="" className="absolute left-3" />
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full text-xl px-12 border-x-0 border-t-0 border-b-2 border-gray-300 outline-none h-12" />
                </form>
            </div>

            <div className="flex gap-3 items-center text-gray-300"><img src={graySearch} alt="" /> <p className="text-gray-300 cursor-pointer" onClick={() => setSearch("All")}>All</p></div>
            {/* <div className="flex gap-3 items-center text-gray-300"><img src={graySearch} alt="" /> <p className="text-gray-300 cursor-pointer" onClick={() => setSearch("Supplements")}>Supplements</p></div> */}
            <div className="flex gap-3 items-center text-gray-300"><img src={graySearch} alt="" /> <p className="text-gray-300  cursor-pointer" onClick={() => setSearch("Provisions")}>Provisions</p></div>
            <div className="flex gap-3 items-center text-gray-300"><img src={graySearch} alt="" /> <p className="text-gray-300 cursor-pointer" onClick={() => setSearch("Wines")}>Wines</p></div>
            <div className="flex gap-3 items-center text-gray-300"><img src={graySearch} alt="" /> <p className="text-gray-300 cursor-pointer" onClick={() => setSearch("Cosmetics")}>Cosmetics</p></div>
            <div className="flex gap-3 items-center text-gray-300"><img src={graySearch} alt="" /> <p className="text-gray-300 cursor-pointer" onClick={() => setSearch("Fragrances")}>Fragrances</p></div>

        </div>
    </div>
  )
}

export default Search