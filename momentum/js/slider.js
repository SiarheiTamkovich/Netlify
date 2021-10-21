let rNom = getRandomNum(1, 20)
setBg();

function setBg() {
    const date = new Date();
    const img = new Image();
    const hours = date.getHours();

    let rNomStr = String(rNom); 
    rNomStr = rNomStr.padStart(2, "0"); 

    //   console.log(rNom);
    if (hours > 0 && hours <= 6) { // night
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/` + rNomStr + `.jpg`;
        img.addEventListener('load', function (e) {
             body.style.backgroundImage = `url(` + img.src + `)`;
        });
    } else if (hours > 6 && hours <= 12) { // morning
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/` + rNomStr + `.jpg`;
        img.addEventListener('load', function (e) {
             body.style.backgroundImage = `url(` + img.src + `)`;
        });
    } else if (hours > 12 && hours <= 18) { // afternoon
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/` + rNomStr + `.jpg`;
        img.addEventListener('load', function (e) {
             body.style.backgroundImage = `url(` + img.src + `)`;
        });
    } else if (hours > 18 && hours <= 24) { // evening
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/` + rNomStr + `.jpg`;
        img.addEventListener('load', function (e) {
             body.style.backgroundImage = `url(` + img.src + `)`;
        });
    }
}

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function getSlideNext(){
//    console.log(rNom);
    if (rNom < 20) {
        setBg();
        rNom++;
    } else {
        setBg();
        rNom = 1;
    }
}

function getSlidePrev(){
//    console.log(rNom);
    if (rNom > 1) {
        setBg();
        rNom--;
    } else {
        setBg();
        rNom = 20;
    }
}
