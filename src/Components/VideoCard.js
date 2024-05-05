import React, { useEffect, useState } from 'react'
import { YOUTUBE_CHANNEL_API } from '../utils/constants'
import getTimeDifference from '../utils/time';
import useChannelDetails from '../Hooks/useChannel';
import formatNumber from '../utils/viewCount';

const VideoCard = ({videoData}) => {
  
  const [dp,setDp]=useState()

  const {snippet,statistics} = videoData;
  const {channelTitle,title,thumbnails,channelId,publishedAt}=snippet;

// console.log(videoData);

const channelDetails = useChannelDetails(channelId);

const formattedTimeDifference = getTimeDifference(publishedAt);





const {viewCount} = statistics;
const formattedCount = formatNumber(viewCount);


// const {url}=videoData?.snippet?.thumbnails?.high
  return (

      <div className=' w-[250px]   rounded-xl mx-5 my-5  cursor-pointer  '>

          <img src={thumbnails?.medium?.url} alt='Thumbanil' className=' rounded-xl w-[380px]'/>
          <ul className='py-2 '>
            <div className='flex justify-center'>
            {channelDetails?.map((d)=><img key={d.id} src={d?.snippet?.thumbnails?.high?.url} alt='' className='rounded-full  h-7 mr-3 ' />)}   
<div>
<li className='font-roboto-medium text-[16px] line-clamp-2 '>{title}</li>

<li className='text-sm text-zinc-600'>{channelTitle}</li>
<div className='flex'>
<li className='text-sm text-zinc-600 mr-1'>{formattedCount} views |</li>
            <li className='text-sm text-zinc-600'>{formattedTimeDifference}</li>

</div>
          

          
</div>
            </div>
        
          

          </ul>

        </div>





  )
}

export default VideoCard