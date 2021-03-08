import "./styles.css";
import getWeather from "./weather"

export default function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  const alertDiv = document.querySelector(".alert-div");
  alertDiv.appendChild(div);
  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

document.querySelector("#city-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = document.querySelector("#city-name").value;
  if (cityName === "") {
    showAlert("Please fill in all the fields", "danger");
  } else {
    getWeather(cityName);
  }
});
