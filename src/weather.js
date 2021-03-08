import showAlert from './alert';

export default function getWeather(city) {
  const api = 'e5b18a07839188e5de8e8db9b8a49386';
  const imgSpan = document.querySelector('.img-span');
  const jumbotron = document.querySelector('.jumbotron');
  const location = document.querySelector('#location');
  const desc = document.querySelector('.description');
  const base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
  fetch(base)
    .then((response) => response.json())
    .then((data) => {
      const { temp } = data.main;
      const place = data.name;
      const { description, icon } = data.weather[0];
      const fahrenheit = (temp * 9) / 5 + 32;
      imgSpan.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="icon" id="icon">`;
      if (icon.slice(-1) === 'd') {
        jumbotron.className = 'jumbotron text-light p-3 rounded day';
      } else if (icon.slice(-1) === 'n') {
        jumbotron.className = 'jumbotron text-light p-3 rounded night';
      }
      location.textContent = `${place}`;
      desc.textContent = `${description}`;
      const formSwitch = document.querySelector('.form-switch');
      formSwitch.innerHTML = `
      <input class="form-check-input float-none" type="checkbox" id="flexCheckChecked" checked/>
      <label class="form-check-label c" for="flexCheckChecked"></label>
    `;
      const tempC = document.querySelector('.c');
      tempC.textContent = `${temp} °Celcius`;
      const unit = document.querySelector('#flexCheckChecked');
      unit.addEventListener('click', () => {
        if (tempC.textContent === `${temp} °Celcius`) {
          tempC.textContent = `${fahrenheit} °Fahrenheit`;
        } else if (
          tempC.textContent === `${fahrenheit} °Fahrenheit`
        ) {
          tempC.textContent = `${temp} °Celcius`;
        }
      });
    })
    .catch(() => {
      showAlert('Please enter a valid city', 'danger');
    });
}