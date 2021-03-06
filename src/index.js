import './styles.css';

function getWeather(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e5b18a07839188e5de8e8db9b8a49386&units=metric`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      const temp = document.querySelector("#current-temp");
      temp.innerHTML = `
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span class="font-weight-bolder">${response.main.temp}°</span>
          </li>
          <li class="list-group-item">
          <span>${response.weather[0].description}</span><span class="font-weight-bolder"><img src="http://openweathermap.org/img/wn/${response.weather[0].icon}.png" alt=""></span>
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

const unitDiv = () => {
  const unitWrap = document.querySelector('.unit-wrap');
  unitWrap.innerHTML = `
    <div class="form-check">
      <input class="form-check-input" type="radio" name="unitRadio" id="exampleRadios1" value="metric">
      <label class="form-check-label" for="exampleRadios1">Celsius</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="unitRadio" id="exampleRadios2" value="imperial">
      <label class="form-check-label" for="exampleRadios2">Fahrenheit</label>
    </div>
  `;
}
unitDiv()

document.querySelector('#city-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const cityName = document.querySelector('#city-name').value;
  if (cityName === '') {
    showAlert('Please fill in all the fields', 'danger');
  } else {
      getWeather(cityName);
  }
})

document.querySelectorAll('input[name="unitRadio"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
      const item = event.target.value;
      return item;
    });
})
