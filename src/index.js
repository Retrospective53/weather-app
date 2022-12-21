// import './styles/main.css';

console.log('magia');


fetch('https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=ead3c9fd9ec85ca18a16b7bac31e0a80', {mode: 'cors'})
.then(function(response) {
    console.log(response.json());
})
