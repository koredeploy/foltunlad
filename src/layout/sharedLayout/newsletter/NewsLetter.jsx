import './NewsLetter.scss'
const NewsLetter = () => {
  return (
    <div className="content bg-green-100">
        <div className="text-center py-10 text-white-100 w-11/12 mx-auto responsive">
            <h1 className=' text-3xl lg:4xl py-3'>Newsletter & Update</h1>
            <p className='text-white-100'>Sign up for our newsletter to get up-to-date from us</p>
            <form className='flex justify-center items-center w-11/12 lg:w-2/5 mx-auto py-8' >
              <input type="email" placeholder='Email Address' className='w-3/5 py-3 px-5 rounded-tl-3xl rounded-bl-3xl text-gray-400 placeholder-gray-400 outline-none'/>
              <button className='w-2/5 py-3 px-2 lg:px-5 rounded-tr-3xl rounded-br-3xl bg-orange-100 text-white-100 placeholder:text-gray-300 outline-none border-0 cursor-pointer'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default NewsLetter