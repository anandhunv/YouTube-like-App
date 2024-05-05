import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
// import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import ChannelDetails from './ChannelDetails';
import { useDispatch, useSelector } from 'react-redux';
import VideoCard from './VideoCard';
import { COMMENTS_THREAD } from '../utils/constants';
import { addCommentsThreads } from '../utils/mainVideoSlice';
import CommentOriginal from './CommentOriginal';
import useChannelDetails from '../Hooks/useChannel';
import { toggleSide } from '../utils/displaySlice';
import useMainVideos from '../Hooks/useMainVideos';

const WatchPage = () => {
  const comments = useSelector(store => store.mainVideo.commentResults);
  const videos2 = useSelector(store => store.mainVideo.videoResults);

  const [live, setLive] = useState(true);
  const dispatch = useDispatch();
  const videos = useMainVideos();
  const [searchParams] = useSearchParams();
  

  useEffect(() => {
    dispatch(toggleSide());
  }, [dispatch]);

  useEffect(() => {
    getComments();
  }, [searchParams]);

  const videoId = searchParams.get('v');
  const cleanedVideoId = videoId.replace('/', '');

  const getComments = async () => {
    const data = await fetch(COMMENTS_THREAD + cleanedVideoId);
    const json = await data.json();
    dispatch(addCommentsThreads(json.items));
  };

  const handleLive = () => {
    setLive(!live);
  };

  return (
    <div className='md:flex md:flex-col md:mt-0 mt-5 overflow-scroll ' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className='md:m-2 md:p-2 md:flex  md:justify-evenly'>
        <div className='VideoFrame'>
          <iframe
          className='md:h-[440px] aspect-video w-full'
            
            src={`https://www.youtube.com/embed/${searchParams.get('v')}?autoplay=1`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
          <div className='mt-3'>
            <ChannelDetails data={comments && comments[0]?.snippet?.channelId} videoId={cleanedVideoId} />
          </div>
        </div>
{/* SUggestion/LiveChat */}
        <div className='#1 md:border md:border-neutral-800 rounded-lg  md:bg-neutral-950 bg-black md:mt-0 mt-2   '>
          
          <div className='Head w-full bg-neutral-950 border-b border-neutral-800 text-white  rounded-t-lg p-4 '> 
        <div className='flex justify-between'><h1>{live ? 'Video Suggestion' : 'Live Chat'}</h1>
        <button className='text-[10px] bg-zinc-800 px-2 rounded-lg' onClick={handleLive}>
                Change
              </button></div>  
        </div>

          <div className='overflow-scroll flex md:flex md:flex-col md:h-[450px] md:aspect-auto  'style={{ scrollbarWidth: 'none' }}>
          {live ? (
              videos2?.map(video => (
                <Link to={'/watch?v=/' + video?.id} key={video?.id}>
                  <VideoCard videoData={video} />
                </Link>
              ))
            ) : (
              <LiveChat />
            )}
          </div>
          
          {/* <div className='bg-neutral-950 border-b border-neutral-800 text-white w-[330px] rounded-t-lg p-2 flex justify-between'>
            <div>
              <button className='text-white p-2 '>{live ? 'Video Suggestion' : 'Live Chat'}</button>
              <button className='text-[10px] bg-zinc-800 px-2 rounded-lg' onClick={handleLive}>
                Change
              </button>
            </div>
          </div>
          <div>

            {live ? (
              videos?.map(video => (
                <Link to={'/watch?v=/' + video?.id} key={video?.id}>
                  <VideoCard videoData={video} />
                </Link>
              ))
            ) : (
              <LiveChat />
            )}
          </div> */}
        </div> {/* SUggestion/LiveChat */}


      </div>

      {/* <CommentsContainer/> */}
      <div className='h-max md:mb-20 mb-40'>
        <div className=' bg '>
          <h1 className='font-semibold text-xl'>Comments:</h1>
        </div>
        <CommentOriginal videos={videos} />
      </div>
    </div>
  );
};

export default WatchPage;