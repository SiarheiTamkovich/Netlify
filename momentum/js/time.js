const timeDom = document.querySelector('.curenttime');
const dateDom = document.querySelector(`.date`);
const greeting = document.querySelector(`.greeting`);
const name = document.querySelector(`.name`);

new Date();

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    timeDom.innerText = currentTime;
    if (setting.lang === `ru`) {
        setDateRu();
    } else if (setting.lang === `en`) {
        setDateEn();
    }
    setTimeout(() => {
        showTime();
    }, 1000);
}
showTime();

function setDateRu() {
    const date = new Date();
    const options = {month: 'long', day: 'numeric' , year: 'numeric'}; // hour: 'numeric', minute: 'numeric'timeZone: `UTC`
    let currentDate = date.toLocaleDateString('ru-RU', options); //'ru-RU', 'en-US', 'en-Br' 
    dateDom.innerText = currentDate;
}

function setDateEn() {
    const date = new Date();
    const options = {month: 'long', day: 'numeric' , year: 'numeric'}; // hour: 'numeric', minute: 'numeric'timeZone: `UTC`
    let currentDate = date.toLocaleDateString('en-US', options); //'ru-RU', 'en-US', 'en-Br' 
    dateDom.innerText = currentDate;
}

function getTimeOfDayRu(){
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 0 && hours <= 6) {
       greeting.innerText = `Доброй ночи,`
    } else if (hours > 6 && hours <= 12) {
       greeting.innerText = `Доброе утро,`
    } else if (hours > 12 && hours <= 18) {
        greeting.innerText = `Добрый день,`
    } else if (hours > 18 && hours <= 24) {
        greeting.innerText = `Добрый вечер,`
    }
}

function getTimeOfDayEn(){
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 0 && hours <= 6) {
       greeting.innerText = `Goodnight,`
    } else if (hours > 6 && hours <= 12) {
       greeting.innerText = `Good morning,`
    } else if (hours > 12 && hours <= 18) {
        greeting.innerText = `Good day,`
    } else if (hours > 18 && hours <= 24) {
        greeting.innerText = `Good evening,`
    }
}

if (setting.lang === `ru`) {
    getTimeOfDayRu();
} else if (setting.lang === `en`) {
    getTimeOfDayEn();
}

function setLocalStorage() {
    localStorage.setItem('name', name.value);
    setting.name = name.value;
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('name')) {
      setting.name = localStorage.getItem('name');
      name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)
  