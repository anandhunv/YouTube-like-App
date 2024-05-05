const getTimeDifference = (publishedAt) => {
    const currentDate = new Date();
    const publishedDate = new Date(publishedAt);
    const timeDifference = currentDate - publishedDate;
    const secondsDifference = Math.floor(timeDifference / 1000);

    if (secondsDifference < 60) {
      return `${secondsDifference} seconds ago`;
    } else if (secondsDifference < 3600) {
      const minutes = Math.floor(secondsDifference / 60);
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (secondsDifference < 86400) {
      const hours = Math.floor(secondsDifference / 3600);
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (secondsDifference < 2592000) {
      const days = Math.floor(secondsDifference / 86400);
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (secondsDifference < 31536000) {
      const months = Math.floor(secondsDifference / 2592000);
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else {
      const years = Math.floor(secondsDifference / 31536000);
      return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
  };


  export default getTimeDifference