const quote = document.querySelector(`.quote`);
const author = document.querySelector(`.author`);

async function getQuotesRu() {  
    const quotes = './assets/data/dataru.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
   
    let num = getRandomNum(0, 20);
    
    quote.innerText = `"${data[num].text}"`;
    author.innerText = data[num].author;
}

async function getQuotesEn() {  
    const quotes = './assets/data/dataen.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
   
    let num = getRandomNum(0, 10);
    
    quote.innerText = `"${data[num].text}"`;
    author.innerText = data[num].author;
}

function getQuotes(){
    
    if (setting.lang === `ru`) {
        getQuotesRu();
    } else if (setting.lang === `en`) {
        getQuotesEn();
    }
}

getQuotes()
