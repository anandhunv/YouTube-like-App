import React from 'react'

const VideoCard = ({videoData}) => {


// console.log(videoData);

const {snippet,statistics} = videoData;
const {channelTitle,title,thumbnails}=snippet;


function formatNumber(number) {
  const billion = 1e9;
  const million = 1e6;
  const thousand = 1e3;

  if (number >= billion) {
    return (number / billion).toFixed(1) + 'B';
  } else if (number >= million) {
    return (number / million).toFixed(1) + 'M';
  } else if (number >= thousand) {
    return (number / thousand).toFixed(1) + 'K';
  } else {
    return number.toString();
  }
}

const {viewCount} = statistics;
const formattedCount = formatNumber(viewCount);


// const {url}=videoData?.snippet?.thumbnails?.high
  return (

      <div className=' w-[250px]   rounded-xl mx-5 my-5  cursor-pointer  '>

          <img src={thumbnails?.medium?.url} alt='Thumbanil' className=' rounded-xl w-[380px]'/>
          <ul className='py-2 '>
          <li className='font-bold text-[16px] line-clamp-2 '>{title}</li>
            <li className='text-sm text-zinc-600'>{channelTitle}</li>
            <li className='text-sm text-zinc-600'>{formattedCount} views</li>

          </ul>

        </div>





  )
}

export default VideoCard