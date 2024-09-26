document.addEventListener('DOMContentLoaded', (event) => {
  const quotes = document.querySelectorAll('#quote-container p'); // Select all quotes
  let currentQuote = 0;

  function changeQuote() {
      // Hide the current quote
      quotes[currentQuote].classList.remove('active');
      // Move to the next quote
      currentQuote = (currentQuote + 1) % quotes.length;
      // Show the next quote
      quotes[currentQuote].classList.add('active');
  }

  setInterval(changeQuote, 5000); // Change quote every 5 seconds
});
