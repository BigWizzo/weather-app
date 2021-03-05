function getWeather(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e5b18a07839188e5de8e8db9b8a49386`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      temperature = response.main.temp
      const temp = document.querySelector('#temp');
      temp.textContent = temperature;
    });
}

document.querySelector('#city-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const cityName = document.querySelector('#city-name').value;
  console.log(cityName);
  if (cityName === '') {
    return alert('Please fill in all the fields', 'danger');
  } else {
      getWeather(cityName);
  }
})
