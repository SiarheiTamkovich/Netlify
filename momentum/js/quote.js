const quote = document.querySelector(`.quote`);
const author = document.querySelector(`.author`);

async function getQuotes() {  
    const quotes = './assets/data/dataru.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
   
    let num = getRandomNum(0, 20);
    
    quote.innerText = `"${data[num].text}"`;
    author.innerText = data[num].author;
}
getQuotes();
