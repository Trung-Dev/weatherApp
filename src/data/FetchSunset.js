import { getLatitudeLongitudeAsync } from "./getCurrentLatLon";

async function getSunriseSunset(latitude, longitude, date) {
  const apiUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${date}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === "OK") {
      const sunrise = new Date(`${date} ${data.results.sunrise}`);
      const sunset = new Date(`${date} ${data.results.sunset}`);
      return { sunrise, sunset };
    } else {
      throw new Error("Failed to fetch sunrise and sunset data.");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function getSunMoonValue() {
  try {
    const data = await getLatitudeLongitudeAsync();
    const latitude = data.latitude;
    const longitude = data.longitude;

    const date = new Date();
    const currentHour = date.getHours();
    const formattedDate = date.toISOString().split("T")[0];

    const { sunrise, sunset } = await getSunriseSunset(latitude, longitude, formattedDate);

    if (currentHour < sunrise.getHours() || currentHour >= sunset.getHours()) {
      return "moon";
    } else {
      return "sun";
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export { getSunMoonValue };
