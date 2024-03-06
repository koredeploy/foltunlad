import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
// import success from '../../assets/success.png'
// import closeModal from '../../assets/closeModal.png'

// eslint-disable-next-line react/prop-types
const CartDialog = ({open, setOpen}) => {
    

    const cancelButtonRef = useRef(null)

  return (
    <div>
        <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
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
                    {/* <img onClick={()=>{
                        setOpen(false)
                    }} src={closeModal} alt="" className=' absolute top-3 right-4' />
                  <img src={success} className='w-1/3 pt-3' alt="" /> */}
                  <h1 className="text-2xl font-bold">
                  Sent Successfully
                  </h1>
                  <p className=" pb-10 ">
                  Your request has been sent successfully! We will be in touch with you shortly to address your needs and provide top-notch service.
                  </p>
                 
                  
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