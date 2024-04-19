import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='p-4 flex items-center '>
    <img src='https://yt4.ggpht.com/ytc/AIdro_mA5iYFWQWr-erQfOrpRSPi7uAL1ykOBKRSbPBDp88Z1xyBT7Je5IKp6_AckwgwsDEc-Q=s32-c-k-c0x00ffffff-no-rj' alt='user'
    
    className='rounded-3xl mr-4'
    />
    <h1 className='font-medium text-sm text-neutral-400 mr-4'>{name}</h1>
    <p className='text-sm '>{message}</p>
    </div>
  )
}

export default ChatMessage 