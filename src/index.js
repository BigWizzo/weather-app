import './styles.css';
import getWeather from './weather';
import showAlert from './alert';

document.querySelector('#city-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const cityName = document.querySelector('#city-name').value;
  if (cityName === '') {
    showAlert('Please fill in all the fields', 'danger');
  } else {
    getWeather(cityName);
  }
});
