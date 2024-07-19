const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const location = input.value;
  getWeather(location);
});

function getWeather(location) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      showWeather(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      alert('Failed to fetch weather data. Please try again.');
    });
}

function showWeather(data) {
  locationElement.textContent = data.name;
  temperatureElement.textContent = `Temperature: ${data.main.temp} °C`;
  descriptionElement.textContent = `Description: ${data.weather[0].description}`;
}
