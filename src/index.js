import './styles/main.css';

console.log('magia');


const inputCity = document.getElementById('city');
const buttonSubmit = document.getElementById('submit');
const content = document.getElementById('content');
let haha;

const cityWeather = document.getElementById('cityName');
const mainWeather = document.getElementById('mainWeather');
const weatherName = document.getElementById('weatherName');
const feelsLike = document.getElementById('feelsLike');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');

const weatherInfo = document.getElementById('weather');
weatherInfo.appendChild(cityWeather);
weatherInfo.appendChild(mainWeather);
weatherInfo.appendChild(weatherName);
weatherInfo.appendChild(feelsLike);
weatherInfo.appendChild(wind);
weatherInfo.appendChild(humidity);

function cityName(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ead3c9fd9ec85ca18a16b7bac31e0a80`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        haha = response;
        console.log(typeof response)
        console.table(response)     
        cityWeather.textContent = response.name;
        mainWeather.textContent = response.weather[0].main;
        weatherName.textContent = response.weather[0].description;
        feelsLike.textContent = `Feels Like ${response.main.feels_like} °F`;
        wind.textContent = `Humidity ${response.main.humidity}%`;
        console.log(response.weather)
    })
}

 
cityName('Jakarta');

buttonSubmit.addEventListener('click', () => cityName(inputCity.value));