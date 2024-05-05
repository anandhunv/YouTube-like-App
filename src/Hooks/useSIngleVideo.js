import { useEffect, useState } from "react"
import { YOUTUBE_SINGLE_VIDEO_SEARCH_API } from "../utils/constants"


const useSingleVideo=(videoId)=>{

    const [video, setVideo] = useState(null);


    useEffect(()=>{

        getVideo()

    },[videoId])

    const getVideo=async()=>{
        const data =await fetch(YOUTUBE_SINGLE_VIDEO_SEARCH_API+videoId)      
          const json=await data.json();

        setVideo(json)


    }

    return video

}

export default useSingleVideo


