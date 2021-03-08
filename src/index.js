import './styles.css';

const weatherWrap = () => {
  const weather = document.querySelector('.weather');
  weather.innerHTML = `
    <div class="laction">
      <div class="location" id="location"></div>
      <div class="description" id="description"></div>
    </div>
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="flexCheckChecked" checked/>
      <label class="form-check-label c" for="flexCheckChecked"></label>
    </div>
  `;
}

function getWeather(city) {
  const api = 'e5b18a07839188e5de8e8db9b8a49386';
  const iconImg = document.getElementById('icon');
  const location = document.querySelector('#location');
  const tempC = document.querySelector('.c');
  const desc = document.querySelector('.description')
  const unit = document.querySelector('#flexCheckChecked');
  const base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
  fetch(base)
  .then((response) => response.json())
  .then((data) => {
    const { temp } = data.main;
    const place = data.name;
    const { description, icon } = data.weather[0];
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    const fahrenheit = (temp * 9) / 5 + 32;
    iconImg.src = iconUrl;
    location.textContent = `${place}`;
    desc.textContent = `${description}`;
    tempC.textContent = `${temp.toFixed(2)} °C`;
    unit.addEventListener("click", function(){
      if (tempC.textContent == `${temp.toFixed(2)} °C`) {
       tempC.textContent = `${fahrenheit.toFixed(2)} °F`;
      } else if (tempC.textContent == `${fahrenheit.toFixed(2)} °F`) {
       tempC.textContent = `${temp.toFixed(2)} °C`;
      }
     });
  }).catch(() => {
    showAlert('Please enter a valid city', 'danger');
  });
}

document.querySelector('#city-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const cityName = document.querySelector('#city-name').value;
  if (cityName === '') {
    showAlert('Please fill in all the fields', 'danger');
  } else {
    weatherWrap();
    getWeather(cityName);
  }
});

function showAlert(message, className) {
  const div = document.createElement('div');
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  const alertDiv = document.querySelector('.alert-div');
  alertDiv.appendChild(div);
  setTimeout(() => document.querySelector('.alert').remove(), 3000);
}
