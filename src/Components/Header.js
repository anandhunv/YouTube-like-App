
import '@fortawesome/fontawesome-free/css/all.css';
import { Logo, YOUTUBE_SEARCH_API } from '../utils/constants';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { cacheResults } from '../utils/searchSlice';

const Header=()=>{

    const [searchQuery,setSearchQuery]=useState("");

    const [suggestion,setSuggestion]=useState([]);

    const [showSuggestion,setShowSuggestion]=useState(false);

    const searchCache=useSelector(store=>store.search )
    const dispatch=useDispatch()



    useEffect(()=>{

 const timer=setTimeout(()=>{

    if(searchCache[searchQuery]){
        setSuggestion(searchCache[searchQuery])
    }else{
        getSearchSuggestion()
    }
    },200)  
 

 return()=>{
    clearTimeout(timer)
 }
    },[searchQuery])

    const getSearchSuggestion=async()=>{
        console.log(searchQuery);
        const data=await fetch(YOUTUBE_SEARCH_API+searchQuery)
        const json=await data.json();
        // console.log(json);
        setSuggestion(json[1])

        dispatch(cacheResults({
            [searchQuery]:json[1]
        }))

    }




   const  toggleMenuHandler=()=>{

    dispatch(toggleMenu())

   }
    return(
        <div className='p-4  grid grid-flow-col  '>

            <div className='left flex col-span-2 '>
            <i className="fa-solid fa-bars text-[20px] mr-8 text-white cursor-pointer" onClick={()=>toggleMenuHandler()}></i>
            <img src={Logo} className='h-6' alt='Logo'/>
            </div>

            <div className='middle bg-neutral-600 flex items-start rounded-2xl h-[45px]  col-span-6  '> 
            <input type='text' placeholder='search' className='w-full h-[45px] outline-none  border  border-neutral-700  rounded-l-2xl  bg-black text-slate-100 px-5'
            
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}

            />



            <button className='p-3 flex items-center bg-neutral-700 rounded-r-2xl '><i className="fa-solid fa-magnifying-glass text-[21px] text-gray-200 font-extralight"></i></button>

            </div>
           { showSuggestion && <div className='fixed flex bg-neutral-800 w-[650px] mx-72 rounded-lg pt-3     mt-[47px]  '>
                <ul className=' text-gray-50 flex flex-col   w-full ' >
                    {suggestion.map((s,key)=>(
                    <li key={key} className=' mb-3 hover:bg-neutral-600 p-1 cursor-pointer'><i className="fa-solid fa-magnifying-glass mr-5  "></i>
                    {s}
                    </li>
                    ))}
                    
                </ul>
            </div>
}

            <div className='right flex col-span-2 px-5 justify-end '> 
            {/* <i class="fa-solid fa-ellipsis-vertical text-zinc-300 text-lg"></i> */}
            <div className='flex rounded-3xl border border-solid border-neutral-700 p-2 justify-center items-center'>
            <i className="fa-regular fa-circle-user text-sky-500  text-[25px]"></i>
            <h1 className='text-cyan-600 ml-4'>Sign-In</h1>
            </div>   

                    </div>

        </div>
    )

}

export default Header;