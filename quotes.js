const quotes = [
  {
    "body": "To dare is to lose one’s footing momentarily. Not to dare is to lose oneself."
  }
]

document.addEventListener('DOMContentLoaded', () => {
  const quoteElement = document.getElementById('cd-quote');

  quoteElement.innerText = quotes[0].body;
});
