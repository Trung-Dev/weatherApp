const ConvertTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  let hour = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  let period = 'AM';

  if (hour >= 12) {
    period = 'PM';
    if (hour > 12) {
      hour -= 12;
    }
  }

  return { hour, minutes, period };
  }
  
  export default ConvertTimestamp;
  