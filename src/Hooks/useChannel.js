import { useState, useEffect } from 'react';
import { YOUTUBE_CHANNEL_API } from '../utils/constants';

const useChannelDetails = (channelId) => {
  const [channelDetails, setChannelDetails] = useState(null);

  useEffect(() => {
    const getChannelDetails = async () => {
      try {
        const response = await fetch(YOUTUBE_CHANNEL_API + channelId);
        const data = await response.json();
        setChannelDetails(data.items);
      } catch (error) {
        console.error('Error fetching channel details:', error);
      }
    };

    if (channelId) {
      getChannelDetails();
    }
  }, [channelId]);

  return channelDetails;
};

export default useChannelDetails;
