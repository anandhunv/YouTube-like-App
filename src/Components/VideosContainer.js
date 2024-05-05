import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import {YOUTUBE_VIDEO_API} from "../utils/constants"
import { Link } from 'react-router-dom'
import useChannel from '../Hooks/useChannel'
import { useDispatch, useSelector } from 'react-redux'
import { addVideos } from '../utils/mainVideoSlice'
import useMainVideos from '../Hooks/useMainVideos'
 
const VideosContainer = () => {


  const videos=useMainVideos()
  
  useChannel()


  return (    
    <div className='px-2 flex flex-wrap md:justify-normal justify-center   '>

      {videos?.map((video)=>
  <Link to={"/watch?v=/"+video?.id} key={video?.id}>    <VideoCard videoData={video}  /> </Link>
      )}
     
    </div>
  )
}

export default VideosContainer