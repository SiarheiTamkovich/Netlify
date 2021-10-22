const timeDom = document.querySelector('.curenttime');
const dateDom = document.querySelector(`.date`);
const greeting = document.querySelector(`.greeting`);
const name = document.querySelector(`.name`);

new Date();

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    timeDom.innerText = currentTime;
    setDateRu();
    setTimeout(() => {
        showTime();
    }, 1000);
}
showTime();

function setDateRu() {
    const date = new Date();
    const options = {month: 'long', day: 'numeric' , year: 'numeric'}; // hour: 'numeric', minute: 'numeric'timeZone: `UTC`
    const currentDate = date.toLocaleDateString('ru-RU', options); //'ru-RU', 'en-US', 'en-Br' 
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
getTimeOfDayRu();

function setLocalStorage() {
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)
  