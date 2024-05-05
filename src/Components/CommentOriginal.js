import React from 'react';
import { useSelector } from 'react-redux';

const CommentOriginal = () => {
    const comments = useSelector(store => store.mainVideo.commentResults);

    // Function to format the timestamp to relative time
    const formatRelativeTime = (timestamp) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        if (years > 0) {
            return `${years} ${years === 1 ? 'year' : 'years'} ago`;
        } else if (months > 0) {
            return `${months} ${months === 1 ? 'month' : 'months'} ago`;
        } else if (days > 0) {
            return `${days} ${days === 1 ? 'day' : 'days'} ago`;
        } else if (hours > 0) {
            return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
        } else if (minutes > 0) {
            return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
        } else {
            return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
        }
    };

    return (
        <div className=''>
            {comments?.map((s) => (
                <div className='m-3  bg-neutral-950 flex p-4' key={s.id}>
                    <div className='flex'>
                        <img src={s?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt='' className='rounded-full h-8 mr-2' />
                        

                    </div>
                    <div className='ml-3'>
                      <div className='flex '>
                        <h1 className='text-sm font-medium mb-1' >{s?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h1>
                        <h1 className='text-zinc-400 ml-2 text-sm'>{formatRelativeTime(s?.snippet?.topLevelComment?.snippet?.publishedAt)}</h1>
                        </div>
                         <h1 className='text-sm'>{s?.snippet?.topLevelComment?.snippet?.textOriginal}</h1>
                         <div className='flex items-center'>
                          <h1>    {s?.snippet?.topLevelComment?.snippet?.likeCount===0?"": <i className="fa-solid fa-heart text-[12px] text-rose-600"></i>}</h1>  
                          <h1 className=' ml-1 text-slate-500 text-[15px] mt-1'> {s?.snippet?.topLevelComment?.snippet?.likeCount===0?"":s?.snippet?.topLevelComment?.snippet?.likeCount}</h1>
  
                          

                         </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentOriginal;
