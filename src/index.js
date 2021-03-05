import './styles.css';

function getWeather(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e5b18a07839188e5de8e8db9b8a49386`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response.main.temp)
      document.querySelector("#current-temp").textContent = response.main.temperature;
      console.log(response.main)
    });
}

document.querySelector('#city-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const cityName = document.querySelector('#city-name').value;
  if (cityName === '') {
    return alert('Please fill in all the fields', 'danger');
  } else {
      getWeather(cityName);
  }
})
