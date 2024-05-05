import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { addVideos } from "../utils/mainVideoSlice";

const useMainVideos = () => {


    const [videos,setVideos]=useState([])

const dispatch=useDispatch()

useEffect(()=>{
  getVideos();

},[])

const getVideos=async()=>{
  const data=await fetch(YOUTUBE_VIDEO_API);

  const json= await data.json()
  setVideos(json.items)
  dispatch(addVideos(json.items))
}


return videos
}
 

export default useMainVideos