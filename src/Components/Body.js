import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"

// import Side from "./Side"

const Body=()=>{


 

  
    return(
        <div className="grid grid-flow-col   bg-black h-screen">
            {/* <Side/> */}
            <SideBar/>
            <Outlet/>
            

        </div>
    )
}


export default Body