const formQuoteCreation = document.getElementById('quoteCreation');
const submitButton = document.getElementById('submit');
const quotesUpdate = document.getElementById('quoteCount');

let quoteCount = 0;

formQuoteCreation.addEventListener('submit', (event) => {
    event.preventDefault();

    const authorName = document.getElementById('name').value;
    const quotePosted = document.getElementById('citation').value;

    addQuote(quotePosted, authorName);
    authorName.value= ''
    
    quoteCount++;
    quotesUpdate.innerText = quoteCount;

    

});

function addQuote(quote, author){
    let quoteDiv = document.createElement("div");
    quoteDiv.classList.add('quote');

    const divQuotes = document.getElementById('quote-list');

    const pQuote = document.createElement('p');
    pQuote.setAttribute('class', 'text');
    pQuote.innerText = quote;

    const pAuthor = document.createElement('p');
    pAuthor.setAttribute('class', 'author');
    pAuthor.innerText = "- " + author;

    quoteDiv.appendChild(pQuote);
    quoteDiv.appendChild(pAuthor);
    divQuotes.appendChild(quoteDiv);
}
