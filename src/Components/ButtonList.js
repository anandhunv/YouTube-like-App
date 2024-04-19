import React from 'react'
import Buttons from './Buttons'

const ButtonList = () => {
const   list=[ "ALL","Comedy","MohanLal","Mammoty","Vijay","Ipl","Rohith Sharma","Cristiano Ronaldo","Lionel Messi","Agriculture","React","JavaSript","Namaste React"," Cloudinary","Actions" ,"Movies",]

  return (
    <div className='flex overflow-scroll  p-2 w-full  bg-black ' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

{list.map((item,key)=><Buttons name={item} key={key}/> )}

    
    </div>
  
  )
}

export default ButtonList