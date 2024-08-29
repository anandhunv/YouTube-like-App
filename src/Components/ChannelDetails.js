import useChannelDetails from "../Hooks/useChannel";
import useSingleVideo from "../Hooks/useSIngleVideo";
import formatNumber from "../utils/viewCount";

const ChannelDetails = ({ data, videoId }) => {
  const channels = useChannelDetails(data);
  const video = useSingleVideo(videoId);

  // Check if channels is null before accessing its properties
  if (!channels || !channels[0]) {
    return <div>Loading...</div>;
  }

  const subscriberCount = channels[0].statistics.subscriberCount;
  const formattedCount = formatNumber(subscriberCount);

  return (
    <div className='bg-neutral-950 p-3 rounded-lg'>
      <div>
        <h1 className='md:text-xl text-base font-medium'>{video?.items?.[0]?.snippet?.title}</h1>
        <div className='flex mt-1'>
          <div>
            <img src={channels?.[0]?.snippet?.thumbnails?.high?.url} alt='' className='bg-gray-50 md:w-12 md:h-12 w-10 h-10 rounded-full mr-4' />
          </div>
          <div className="md:mt-0 ">
            <h1 className='font-medium md:text-base text-sm'>{channels?.[0]?.snippet?.title}</h1>
            <h1 className='md:text-sm text-[14px] font-roboto text-gray-500'>{formattedCount} subscribers</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChannelDetails;
