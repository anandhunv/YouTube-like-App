import '@fortawesome/fontawesome-free/css/all.css';
import subscription from "../images/subscriptions.png"
import { Yt_Kids, Yt_Music, Yt_shorts } from '../utils/constants';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const SideBar=()=>{
    useEffect(() => {
        // Disable scrolling when the component mounts
        document.body.style.overflow = 'hidden';
    
        // Enable scrolling when the component unmounts
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []); // Empty dependency ar

    const isMenuOpen=useSelector(store=>store.app.isMenuOpen)

    if(!isMenuOpen) return null;
  
    
    return(

        <div className='bg-opacity-75 bg-black md:w-screen h-auto md:flex flex md:justify-normal justify-end absolute  w-screen md:fixed '>
        <div className="bg-black  w-60 md:h-screen h-screen  overflow-scroll select-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>


            <div className="border-b border-gray-600 md:p-8 p-3 ">
            <Link to="/">      <h1 className=' hover:bg-neutral-800 md:p-2 p-1 rounded-lg' ><i className="fa-solid fa-house mr-5"></i>Home</h1></Link>  

                <h1 className=' hover:bg-neutral-800 md:p-2 p-1 rounded-lg'><i className="fa-solid fa-fire-flame-curved mr-5"></i>Shorts</h1>

                <h1 className='flex items-center hover:bg-neutral-800 md:p-2 p-1 rounded-lg '><img alt='sub' src={subscription} className='h-4 mr-5'/>Subscriptions</h1>

            </div>

          

            <div className="border-b border-gray-600 md:p-8 p-3">

            <h1 className='font-bold mb-2 flex '>Explore</h1>
            <ul>
          <li className=' hover:bg-neutral-800 md:p-2 p-1 rounded-lg '><i className="fa-solid fa-fire mr-5  "></i>Trending</li>
                <li className=' hover:bg-neutral-800 md:p-2 p-1 rounded-lg'><i className="fa-brands fa-shopify mr-5 "></i>Shopping</li>
                <li className=' hover:bg-neutral-800 md:p-2 p-1 rounded-lg'><i className="fa-solid fa-satellite-dish mr-5 "></i>Live</li>
                <li className=' hover:bg-neutral-800 md:p-2 p-1 rounded-lg'><i className="fa-solid fa-vest-patches mr-5"></i>Fashion&Beauty</li>
             


            </ul>
            </div>

              <div className="border-b border-gray-600 md:p-8 p-3">

            <h1 className='font-bold mb-2'>More from Youtube</h1>
            <ul>
                <li className='flex md:mb-4  hover:bg-neutral-800 md:p-2 p-1 text-nowrap rounded-lg'><i className="fa-brands fa-youtube text-red-500 mr-5"></i>Youtube Premium</li>
                <li className='flex md:mb-4  hover:bg-neutral-800 md:p-2 p-1 rounded-lg'><img src={Yt_shorts} alt='yt'className='h-4 mr-5'/>Youtube Studio</li>
                <li className='flex md:mb-4 -ml-1  hover:bg-neutral-800 md:p-2 p-1 rounded-lg'><img src={Yt_Music} alt='yt'className='h-6 mr-4 '/>Youtube Music</li>
                <li className='flex md:mb-4  hover:bg-neutral-800 md:p-2 p-1 rounded-lg'><img src={Yt_Kids} alt='yt'className='h-4 mr-5'/>Youtube Kids</li>
             


            </ul>
            </div>
            
            
            

            <div className="border-b border-gray-600 md:p-8 p-3">
                <h1 className='md:mb-4   hover:bg-neutral-800 md:p-2 p-1 rounded-lg'><i className="fa-solid fa-gear mr-5"></i>Settings</h1>

                <h1 className='md:mb-4   hover:bg-neutral-800 md:p-2 p-1 rounded-lg'><i className="fa-regular fa-flag mr-5"></i>Report History</h1>
                
                <h1 className='md:mb-4   hover:bg-neutral-800 md:p-2 p-1 rounded-lg'><i className="fa-solid fa-circle-info mr-5"></i>Help</h1>


                <h1 className='md:mb-4   hover:bg-neutral-800 md:p-2 p-1 rounded-lg'><i className="fa-solid fa-question mr-5"></i>Send Feedback</h1>

            </div>

            <div className="border-b border-gray-600 md:p-8 p-3">
            
            <h1 className="font-bold">Subscriptions</h1>
            <ul>
                <li className=' hover:bg-neutral-800 md:p-2 p-1 rounded-lg'>Music</li>
                <li className=' hover:bg-neutral-800 md:p-2 p-1 rounded-lg'>Sports</li>
                <li className=' hover:bg-neutral-800 md:p-2 p-1 rounded-lg'>Movie</li>
                <li className=' hover:bg-neutral-800 md:p-2 p-1 rounded-lg'>Gaming</li>


            </ul>
            </div>

        </div>
        </div>

    )
}


export default SideBar;