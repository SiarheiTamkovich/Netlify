const quote = document.querySelector(`.quote`);
const author = document.querySelector(`.author`);

async function getQuotes() {  
    const quotes = './assets/data/dataru.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    console.log(data);
   
    let num = getRandomNum(0, 20);
    console.log(num);
    quote.innerText = `"${data[num].text}"`;
    author.innerText = data[num].author;
}
getQuotes();
