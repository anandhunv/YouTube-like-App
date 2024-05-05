import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useSearchParams,  } from 'react-router-dom';
import SearchCard from './SearchCard';
import { toggleSide } from '../utils/displaySlice';

const SearchResults = () => {
    const videos = useSelector(store => store.display.data);
    const side=useSelector(store=>store.display.side)
    const dispatch=useDispatch()

    const [SearchResults]=useSearchParams()
    console.log(SearchResults.get("search_query"));

  

    const location = useLocation();
  
    

    useEffect(()=>{
        dispatch(toggleSide(true));


    },[dispatch,location])
    

    

    return (    
        
        <div className='md:px-4 px-5 py-3 pb-24 flex flex-col flex-nowrap   overflow-scroll md:w-full w-screen md:mb-0 mb-28  md:border-b md:border-blue-50  justify-start bg-black mr-96 ' style={{scrollbarWidth:'none'}}>
    
          {videos?.map((video)=>
      <Link to={"/watch?v=/"+video?.id.videoId} key={video.id.videoId}>    <SearchCard videoData={video}  /> </Link>
          )}
         
        </div>
      
      )
}

export default SearchResults;
