document.addEventListener('DOMContentLoaded', (event) => {
  const quotes = document.querySelectorAll('#quote-container p');
  let currentQuote = 0;

  function changeQuote() {
      quotes[currentQuote].classList.remove('active');
      currentQuote = (currentQuote + 1) % quotes.length;
      quotes[currentQuote].classList.add('active');
  }

  setInterval(changeQuote, 5000); // Change quote every 5 seconds
});