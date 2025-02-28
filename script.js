const formQuoteCreation = document.getElementById('quoteCreation')
const submitButton = document.getElementById('submit');
const authorName = document.getElementById('name');
const quotePosted = document.getElementById('citation');
const divQuotes = document.getElementById('quote-list');
let quoteCount = 0;


formQuoteCreation.addEventListener('submit', () => {
    for (addQuote(quotePosted, authorName){
        quoteCount +=1;
    })
});

function addQuote(quote, author){
    const title_h_trois = getElementById('quoteCount')
    title_h_trois.innerText = quoteCount

    const p = document.createElement('p')
    p.setAttribute('class', 'text')
    div.appendChild(p)

    const p_deux = document.createElement('p')
    p_deux.setAttribute('class', 'text')
    div.appendChild(p_deux)

    let div = document.createElement("div");
    div.classList.add('quote')
    divQuotes.appendChild(div)
}
