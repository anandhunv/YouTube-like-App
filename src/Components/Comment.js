import React from 'react'

const Comment = ({data}) => {
    const {name,text}=data
  return (
    <div className='flex  my-4   p-2 rounded-2xl '>
 <i className="fa-regular fa-circle-user text-sky-500  text-[25px] mr-4"></i>
        <div className=''>
        <h1>{name}:</h1>
        <h2>{text}</h2>
        
    </div>
    
    </div>
    
    

  )
}




export default Comment