const ConvertTimestapToDayMonth = (timestamp) => {
  const dateTime = new Date(timestamp * 1000);
  const Day = dateTime.getDate();
  const Month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
  const dayMonth = `${Day}/${Month}`;


    return { dayMonth };
  }
  
  export default ConvertTimestapToDayMonth;
  