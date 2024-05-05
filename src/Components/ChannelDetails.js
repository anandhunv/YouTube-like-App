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
        <h1 className='text-xl font-medium'>{video?.items?.[0]?.snippet?.title}</h1>
        <div className='flex mt-1'>
          <div>
            <img src={channels?.[0]?.snippet?.thumbnails?.high?.url} alt='' className='bg-gray-50 w-12 h-12 rounded-full mr-4' />
          </div>
          <div>
            <h1 className='font-medium text-base'>{channels?.[0]?.snippet?.title}</h1>
            <h1 className='text-sm font-roboto text-gray-500'>{formattedCount} subscribers</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChannelDetails;
