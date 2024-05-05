import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"

import Side from "./Side"
import Header from "./Header"
import { useState } from "react"
import Login from "./Login"
import { useSelector } from "react-redux"

const Body=()=>{

    const side=useSelector(store=>store.display.side)
    


 

  
    return(
        <>
        <Header/>


        
        <div className="grid grid-flow-col   bg-black h-screen">

     {   side   &&    <Side/> }

            <SideBar/>
            <Outlet/>
            

        </div>
        </>
    )
}


export default Body