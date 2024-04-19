import React, { useEffect,useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName } from '../utils/helper'
import { makeid } from '../utils/helper'

const LiveChat = () => {

  const [liveMessage,setLiveMessage]=useState("");
  const dispatch=useDispatch()
  const chatMessages= useSelector(store=>store.chat.messages)

    useEffect(()=>{
        const i=setInterval(()=>{
          // api polling
            console.log('App Polling ');
            dispatch(addMessage({
              name:generateRandomName(),
              message:makeid(Math.random()*20),
            }))

        },1500)

        return ()=>clearInterval(i)
    },[])
    

    const handleSendMessage = () => {
      if (liveMessage !== '') { // Check if liveMessage is not empty
        dispatch(
          addMessage({
            name: 'Anandhu',
            message: liveMessage,
          })
        );
        setLiveMessage('');
      }
    };
    

  return (
    <div>
       <div className='border-b border-zinc-700 p-4 static '>Live Chat</div> 
       <div className='overflow-y-scroll h-[450px] flex flex-col-reverse 'style={{ scrollbarWidth: 'thin', msOverflowStyle: 'scrollbar' }}>
     
     {chatMessages.map((c,index)=> <ChatMessage name={c.name+index} message={c.message} key={index}/>)}
     
     
     


        </div>
        <form className='border-t border-zinc-800 p-3 flex items-center justify-center ' 
        onSubmit={(e)=>{
          e.preventDefault();

         handleSendMessage()
        }}>
          <div className=''>
      <input type='text' placeholder='chat as a subscriber...'  className=' text-wrap mt-1 bg-neutral-800  outline-none h-11   px-4 '  

      value={liveMessage}
      onChange={(e)=>{
        setLiveMessage(e.target.value); 
      }}
      />
      </div> 
      <div className='mt-1 bg-neutral-800  outline-none h-11   px-4 text-lime-400   '>
      <i className="fa-regular fa-paper-plane mt-3  " onClick={handleSendMessage} ></i>
     </div>
     </form>
                </div>

  )
}

export default LiveChat