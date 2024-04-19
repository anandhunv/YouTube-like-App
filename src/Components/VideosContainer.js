import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import {YOUTUBE_CHANNEL_API, YOUTUBE_VIDEO_API} from "../utils/constants"
import { Link } from 'react-router-dom'
 
const VideosContainer = () => {
const [videos,setVideos]=useState([])

useEffect(()=>{
  getVideos();
  getChannel()
},[])

const getVideos=async()=>{
  const data=await fetch(YOUTUBE_VIDEO_API);

  const json= await data.json()
  console.log(json.items);
  setVideos(json.items)
}

const getChannel=async()=>{
  const data=await fetch(YOUTUBE_CHANNEL_API);

  const json= await data.json()
  console.log(json);
}

  return (    
    <div className='px-2 flex flex-wrap     '>

      {videos.map((video)=>
  <Link to={"/watch?v=/"+video?.id} key={video?.id}>    <VideoCard videoData={video}  /> </Link>
      )}
     
    </div>
  )
}

export default VideosContainer