const apiKey = "255821d81118cf10e6a03a1af643fd74"; // Replace with your actual API key

document.querySelector("button").addEventListener("click", () => {
  const city = document.querySelector("input").value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      // Display the weather details container
      document.getElementById("weather-details").style.display = "block";

      // Update city name, temperature, humidity, and wind speed
      document.querySelector(".city").textContent = data.name;
      document.querySelector(".temp").textContent = `${Math.round(
        data.main.temp
      )}°c`;
      document.querySelector(
        ".humidity"
      ).textContent = `${data.main.humidity}%`;
      document.querySelector(".wind").textContent = `${data.wind.speed} Km/h`;

      // Update weather icon based on weather conditions
      const weather = data.weather[0].main.toLowerCase();
      let weatherIcon = "sun.png"; // Default icon

      switch (weather) {
        case "clouds":
          weatherIcon = "cloudy.png"; // Cloudy weather
          break;
        case "rain":
        case "drizzle":
          weatherIcon = "rain.png"; // Rainy weather
          break;
        case "snow":
          weatherIcon = "snow.png"; // Snowy weather
          break;
        case "thunderstorm":
          weatherIcon = "cloudy (1).png"; // Thunderstorm
          break;
        case "clear":
          weatherIcon = "sun.png"; // Clear weather
          break;
        case "mist":
        case "fog":
          weatherIcon = "windy.png"; // Mist or fog
          break;
        default:
          weatherIcon = "sun.png"; // Default to sunny
      }

      // Set the weather icon image
      document.querySelector(".weather-icon").src = `pictures/${weatherIcon}`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("City not found! Please enter a valid city name.");
      // Hide the weather details on error
      document.getElementById("weather-details").style.display = "none";
    });
});
