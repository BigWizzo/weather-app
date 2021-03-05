import './styles.css';

function getWeather(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e5b18a07839188e5de8e8db9b8a49386`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response.weather[0].icon)
      const temp = document.querySelector("#current-temp");
      temp.innerHTML = `
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span class="font-weight-bolder">${response.name}</span>
          </li>
          <li class="list-group-item">
            <span class="font-weight-bolder">Temperature: </span><span>${response.main.temp}</span>
          </li>
          <li class="list-group-item">
            <span class="font-weight-bolder"><img src="http://openweathermap.org/img/wn/${response.weather[0].icon}.png" alt=""></span><span>${response.weather[0].description}</span>
          </li>
        </ul>
      </div>
      `;
    });
}

function showAlert(message, className) {
  const div = document.createElement('div');
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  const alertDiv = document.querySelector('.alert-div');
  alertDiv.appendChild(div);
  setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

document.querySelector('#city-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const cityName = document.querySelector('#city-name').value;
  if (cityName === '') {
    showAlert('Please fill in all the fields', 'danger');
  } else {
      getWeather(cityName);
  }
})
