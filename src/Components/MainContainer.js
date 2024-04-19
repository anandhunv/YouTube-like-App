import { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideosContainer from "./VideosContainer";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";

const MainContainer=()=>{

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(closeMenu())

    },[dispatch])
    return(
        <div className="overflow-scroll "style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
    
    <ButtonList/>
    <div className="flex">
    <VideosContainer/>


    </div>

            </div>
    )

}

export default MainContainer;