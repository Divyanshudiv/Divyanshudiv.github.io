document.addEventListener('DOMContentLoaded', (event) => {
  const quotes = document.querySelectorAll('#quote-container p');
  let currentQuote = 0;

  function rotateQuotes() {
    quotes.forEach((quote, index) => {
        quote.classList.toggle('active', index === currentQuote);
    });
    currentQuote = (currentQuote + 1) % quotes.length;
}

  setInterval(changeQuote, 5000); // Change quote every 5 seconds
});

