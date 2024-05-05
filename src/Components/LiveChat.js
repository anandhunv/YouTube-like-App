import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeid } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('');
  const dispatch = useDispatch();
  const chatMessages = useSelector(store => store.chat.messages);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeid(Math.random() * 20),
        })
      );
    }, 1500);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const handleSendMessage = () => {
    if (liveMessage.trim() !== '') {
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
    <div className='w-full'>
      <div className='overflow-y-scroll h-[400px] w-full flex flex-col-reverse -mt-[8px] line-clamp-2' style={{ scrollbarWidth: 'none', msOverflowStyle: 'scrollbar' }}>
        {chatMessages.map((message, index) => (
          <ChatMessage key={index} name={message.name} message={message.message} />
        ))}
      </div>
      <div>
        <form
          className='border-t border-zinc-800 p-3 flex items-center static justify-center'
          onSubmit={e => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <div>
            <input
              type='text'
              placeholder='Chat as a subscriber...'
              className='text-wrap mt-1 bg-neutral-800 outline-none h-11 px-4'
              value={liveMessage}
              onChange={e => setLiveMessage(e.target.value)}
            />
          </div>
          <div className='mt-1 bg-neutral-800 outline-none h-11 px-2 text-lime-400'>
            <i className='fa-regular fa-paper-plane mt-3' onClick={handleSendMessage}></i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
