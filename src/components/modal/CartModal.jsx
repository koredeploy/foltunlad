import { Fragment, useRef, useState, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ProductContext from '../../context/ProductContext'
import comingSoon from '../../assets/backgroundImages/coming-soon.svg'
import {Link} from 'react-router-dom'
// import success from '../../assets/success.png'
// import closeModal from '../../assets/closeModal.png'

// eslint-disable-next-line react/prop-types
const CartDialog = () => {
    const {open, setOpen} = useContext(ProductContext)
    
    const cancelButtonRef = useRef(null)

  return (
    <div>
        <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black-100 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center items-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white-100 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                
                <div className="bg-white px-4 py-6 sm:p-6 sm:pb-4 flex flex-col justify-center text-center gap-5 items-center ">

                 <img src={comingSoon} alt="" />
                  <h1 className=" pb-3 text-center text-3xl">
                  Cart is unavailable. We will be able to take <span className='text-3xl text-red-200'>online orders</span> soon.
                  </h1>
                  <button onClick={()=>{
                    setOpen(false)
                  }} className='p-3 text-green-100 rounded-3xl border border-green-100 w-40 mb-2' > Go Back </button>
                 
                  
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </div>
  )
}

export default CartDialog