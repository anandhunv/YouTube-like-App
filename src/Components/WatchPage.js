import React from 'react'
import { useSearchParams } from 'react-router-dom'
;
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import ChannelDetails from './ChannelDetails';
const WatchPage = () => {

  const [searchParams]=useSearchParams()
  console.log(searchParams.get("v"));
  return (
    <div className='flex flex-col overflow-scroll 'style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
    <div className='m-2 p-2 flex' >
      <div>
    <iframe
  width="830"
  height="400"
  src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
<div className='mt-6'>
  <ChannelDetails/>
</div>
</div>
<div className='mx-5 border border-zinc-800 rounded-lg w-full h-auto bg-neutral-900 '>

  <LiveChat/>

</div>
</div>

<CommentsContainer/>
</div >
  )
}

export default WatchPage