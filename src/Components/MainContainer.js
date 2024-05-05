import { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideosContainer from "./VideosContainer";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { toggleSide } from "../utils/displaySlice";
import { useLocation } from "react-router-dom";

const MainContainer=()=>{
    const side=useSelector(store=>store.display.side)

    const dispatch=useDispatch()
    const location = useLocation();

    

    useEffect(()=>{
        dispatch(closeMenu())
        dispatch(toggleSide(true));


    },[dispatch,location])
    return(
        <div className="overflow-scroll md:mb-20 mb-52 md:mt-0 mt-5  "style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
    
    <ButtonList/>
    <div className="flex">
    <VideosContainer/>


    </div>

            </div>
    )

}

export default MainContainer;