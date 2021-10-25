const selectlang = document.querySelector(`.select-lang`)
let setting = {
    lang: `ru`,
    name: ``,
    photoSource: `github`,
    photoSourceTeg: ``,
    isHideWeather: false,
}

function setLocalStorageSetting() {
    let strSetting = JSON.stringify(setting);
    localStorage.setItem('strSetting', strSetting);
}
  
function getLocalStorageSetting() {
    if(localStorage.getItem('strSetting')) {
      let item = localStorage.getItem('strSetting');
      setting = JSON.parse(item); 
      setParam(); 
    }
}
window.addEventListener('load', getLocalStorageSetting);

selectlang.addEventListener(`click`, setLang);

function setLang() {
    if (setting.lang != selectlang.value) {
        setting.lang = selectlang.value;
        setLocalStorageSetting();
        setParam();
    }
}

function setParam() {
    username.value = setting.name;
    
    if (setting.lang === `ru`) {
        selectlang.value = setting.lang;
        getWeather();
        todolist.innerText = `Список задач`;
        getTimeOfDayRu();
        lang.innerText = `Язык:`;
        pictsel.innerText = `Фото из:`;
        getQuotesRu();
     } else if (setting.lang === `en`) {
        selectlang.value = setting.lang;
        getWeather();
        todolist.innerText = `ToDo List`;
        getTimeOfDayEn();
        lang.innerText = `Language:`;
        pictsel.innerText = `Photo from:`;
        getQuotesEn();
    }

    if (setting.photoSource === `github` ) {
        unsplushBtn.value = setting.photoSource;
       } else if (setting.photoSource === `unsplash`) {
        unsplushBtn.value = setting.photoSource;
    }
}







    

