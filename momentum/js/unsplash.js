const unsplushBtn = document.querySelector(`.select-unsplash`);
let data = 0;
async function loadImg(time) {
  const url = `https://api.unsplash.com/search/photos?query=${time}&per_page=20&client_id=HLGOyGZNCk_fLHm_pffKIJ3SIrkspDrpIl_zhdjn8pw`;
  let res = await fetch(url);
  data = await res.json();
  setLocalStoragePict(data);

  setting.photoSourceTeg = data.results[0].links.download;
  return data;
}

function setLocalStoragePict(data) {
  let strPict = JSON.stringify(data);
  localStorage.setItem('resPict', strPict);
}

function getLocalStoragePict() {
  if(localStorage.getItem('resPict')) {
    let promiseMovie = localStorage.getItem('resPict');
    let arrPict = JSON.parse(promiseMovie);
    return arrPict;
  }
}
let arrPict = getLocalStoragePict();
//console.log(arrPict);

unsplushBtn.addEventListener(`click`, setUnSplush);

function setUnSplush() {
  if (unsplushBtn.value === `unsplash`) {
//    console.log(unsplushBtn.value)
    setting.photoSource = `unsplash`;
    setLocalStorageSetting();
    setBgUnslash();
    window.location.reload();
  } else if (unsplushBtn.value === `github`){
    setting.photoSource = `github`;
    setLocalStorageSetting();
    setBg();
  }
}

function loadPic() {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 0 && hours <= 6) { // night
    loadImg(`night`);
  } else if (hours > 6 && hours <= 12) { // morning
    loadImg(`morning`);
  } else if (hours > 12 && hours <= 18) { // afternoon
    loadImg(`afternoon`);
  } else if (hours > 18 && hours <= 24) { // evening
    loadImg(`evening`);
  }
}
loadPic();