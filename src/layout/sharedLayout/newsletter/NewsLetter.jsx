import './NewsLetter.scss'
const NewsLetter = () => {
  return (
    <div className="content bg-green-100">
        <div className="text-center py-10 text-white-100">
            <h1 className=' text-4xl py-3'>Newsletter & Update</h1>
            <p className=''>Sign up for our newsletter to get up-to-date from us</p>
            <form className='flex justify-center items-center w-full py-8' >
              <input type="email" placeholder='Email Address' className='w-80 py-3 px-5 rounded-tl-3xl rounded-bl-3xl text-gray-400 placeholder-gray-400 outline-none'/>
              <button className='w-40 py-3 px-5 rounded-tr-3xl rounded-br-3xl bg-red-200 text-white-100 placeholder:text-gray-300'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default NewsLetter