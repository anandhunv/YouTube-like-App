import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import subscription from "../images/subscriptions.png"

const Side = () => {
  return (
    <div className='bg-neutral-950 w-20 flex flex-col items-center p-2'>
      <h1 className=' hover:bg-neutral-800 p-2 rounded-lg  text-sm flex flex-col items-center mb-10 text-[10px]' ><i className="fa-solid fa-house text-[18px] "></i>Home</h1>
      <h1 className=' hover:bg-neutral-800 p-2 rounded-lg text-sm flex flex-col items-center mb-10 text-[10px] '><i className="fa-solid fa-fire-flame-curved text-[18px]  "></i>Shorts</h1>
      <h1 className=' hover:bg-neutral-800 p-2 rounded-lg text-sm flex flex-col items-center mb-10 text-[10px]'><img alt='sub' src={subscription} className='h-4 text-[18px]  '/>Subscriptions</h1>
      <h1 className=' hover:bg-neutral-800 p-2 rounded-lg text-sm flex flex-col items-center mb-10 text-[10px]'><i className="fa-brands fa-square-youtube text-[18px]  "></i>You</h1>






    </div>
  )
}

export default Side