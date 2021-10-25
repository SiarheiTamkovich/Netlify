const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const windSpeed = document.querySelector(`.wind`);
const humidity = document.querySelector(`.humidity`)
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const err = document.querySelector(`.weather-error`);

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${setting.lang}&appid=dc39d1fe382c37ae2ad0e7d140d117ab&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  
  if (data.cod == 200){
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)} °C`;
    weatherDescription.textContent = data.weather[0].description;
    if (setting.lang === `en`) {
      windSpeed.textContent = `Wind speed ${data.wind.speed.toFixed(0)} m/s`;
      humidity.textContent = `Humidity ${data.main.humidity}%`;
    } else if (setting.lang === `ru`) {
      windSpeed.textContent = `Скорость ветра ${data.wind.speed.toFixed(0)} м/cек`;
      humidity.textContent = `Влажность ${data.main.humidity}%`;
    }
    err.textContent = ``;
  } else if (data.cod == 400) {
    err.textContent = `${data.message}`;
    weatherIcon.className = 'weather-icon';
    temperature.textContent = `error`;
    weatherDescription.textContent = `code 400`;
    windSpeed.textContent = ``;
    humidity.textContent = ``;
  } else if (data.cod == 404) {
    err.textContent = `${data.message}`;
    weatherIcon.className = 'weather-icon';
    temperature.textContent = `error`;
    weatherDescription.textContent = `code 404`;
    windSpeed.textContent = ``;
    humidity.textContent = ``;
  }
}

function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
    localStorage.setItem('city', city.value)
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

if (localStorage.getItem('city')) {
  city.value = localStorage.getItem('city');
    city.oninput = () => {
      localStorage.setItem('city', city.value)
  };
}
