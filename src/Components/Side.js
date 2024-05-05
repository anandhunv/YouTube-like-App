import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import subscription from "../images/subscriptions.png"
import { Link } from 'react-router-dom';

const Side = () => {
  return (
    <div className='bg-black md:mr-2 md:w-20 w-full justify-evenly md:flex flex  md:relative absolute md:flex-col md:items-center md:p-2 md:mt-0 mt-[550px]'>
   <Link to={"/"}>  <div className=' hover:bg-neutral-800 p-2 rounded-lg  text-sm flex flex-col items-center mb-10 ' ><i className="fa-solid fa-house  text-[24px]"></i><h1 className='text-[11px]'>Home</h1></div></Link> 
      <div className=' hover:bg-neutral-800 p-2 rounded-lg  text-sm flex flex-col items-center mb-10 ' ><i className="fa-solid fa-fire-flame-curved  text-[24px]"></i><h1 className='text-[11px]'>Shorts</h1></div>
     <Link to={"/history"}> <div className=' hover:bg-neutral-800 p-2 rounded-lg  text-sm flex flex-col items-center mb-10 ' ><img alt='sub' src={subscription} className='h-6 text-[24px]  '/><h1 className='text-[11px]'>History</h1></div></Link>
      <div className=' hover:bg-neutral-800 p-2 rounded-lg  text-sm flex flex-col items-center mb-10 ' ><i className="fa-brands fa-square-youtube text-[24px]  "></i><h1 className='text-[11px]'>You</h1></div>

      {/* <h1 className=' hover:bg-neutral-800 p-2 rounded-lg text-sm flex flex-col items-center mb-10 text-[10px]'></i>You</h1> */}






    </div>
  )
}

export default Side