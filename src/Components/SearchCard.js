import React from 'react';
import getTimeDifference from '../utils/time';
import useChannel from '../Hooks/useChannel';
import useChannelDetails from '../Hooks/useChannel';

const SearchCard = ({ videoData }) => {
  const { snippet } = videoData;
  const { channelTitle, title, thumbnails, description, publishedAt,channelId } = snippet;

  // Function to calculate the time difference
// useChannel()  
const channelDetails = useChannelDetails(channelId);


  const formattedTimeDifference = getTimeDifference(publishedAt);

  return (
    <div className='w-full rounded-xl md:my-5 my-0   cursor-pointer md:flex flex flex-col md:flex-row bg p-1     '>
      <div className='md:p-2 p-1 mr-3'>
    
        <img src={thumbnails?.medium?.url} alt='Thumbnail' className='rounded-xl w-[300px]   ' />
      </div>
      <ul className='py-2'>
        <li className='font-roboto-medium md:text-[16px] text-sm line-clamp-2 '>{title}</li>
       
        <div className='flex mt-2 mb-2 items-center'>
        {channelDetails?.map((d)=><img key={d.id} src={d?.snippet?.thumbnails?.high?.url} alt='' className='md:rounded-full rounded-full border w-7  h-7 mr-3 ' />)}   

<li className='text-sm text-zinc-600 mt-1 '>{channelTitle}</li>
<li className='text-sm md:text-[0px] ml-2 mt-2  text-zinc-600 font-roboto mb-1'>{formattedTimeDifference}</li>

        </div>
        <li className='md:text-sm text-[0px] text-zinc-600  font-roboto mb-1'>{formattedTimeDifference}</li>

       
        <li className='font-roboto md:text-[10px] text-[0px] line-clamp-1 text-zinc-400'>{description}</li>
      </ul>
    </div>
  );
};

export default SearchCard;
