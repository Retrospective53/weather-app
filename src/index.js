// import './styles/main.css';

console.log('magia');


const inputCity = document.getElementById('city');
const buttonSubmit = document.getElementById('submit');
const content = document.getElementById('content');
let haha;

const cityWeather = document.getElementById('cityName');
const weatherName = document.getElementById('weatherName');
const feelsLike = document.getElementById('feelsLike');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');

const weatherInfo = document.getElementById('weather');
weatherInfo.appendChild(cityWeather);
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
        weatherName.textContent = response.weather.main;
        console.log(response.weather.main)
    })
}


{/* <h1 id="cityName"></h1>
                <h2 id="weatherName"></h2>
                <h3 id="feelsLike"></h3>
                <h3 id="wind"></h3>
                <h3 id="humidity"></h3> */}

 



// cityName('Jakarta');

buttonSubmit.addEventListener('click', () => cityName(inputCity.value));