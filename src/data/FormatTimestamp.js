function FormatTimestamp(time) {
  let currentTime = new Date(time);
  let hours12 = currentTime.getHours() % 12 || 12;
  let amPm = currentTime.getHours() < 12 ? 'AM' : 'PM';

  let formattedTime = `${hours12}:00${amPm}`;
  return formattedTime;
}

export default FormatTimestamp;