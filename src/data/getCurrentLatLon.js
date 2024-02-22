function getCurrentPositionAsync() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
}

async function getLatitudeLongitudeAsync() {
  try {
    const position = await getCurrentPositionAsync();
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    return { latitude, longitude };
  } catch (error) {
    console.error('Error occurred while retrieving geolocation:', error);
    throw error;
  }
}

export { getLatitudeLongitudeAsync };