document.addEventListener('DOMContentLoaded', (event) => {
  // Quote rotation
  const quoteItems = document.querySelectorAll('.quote-item');
  let currentQuote = 0;
  function changeQuote() {
      quoteItems[currentQuote].classList.remove('active');
      currentQuote = (currentQuote + 1) % quoteItems.length;
      quoteItems[currentQuote].classList.add('active');
  }
  setInterval(changeQuote, 10000); // Change quote every 10 seconds

  // ... (rest of the JavaScript for neural network visualization remains the same) ...
});