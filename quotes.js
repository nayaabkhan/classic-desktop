const quotes = [
  {
    "body": "To dare is to lose one’s footing momentarily. Not to dare is to lose oneself.",
    "author": "Søren Kierkegaard"
  }
]

document.addEventListener('DOMContentLoaded', () => {
  const bodyElement = document.getElementById('cd-quote-body');
  const authorElement = document.getElementById('cd-quote-author');

  bodyElement.innerText = quotes[0].body;
  authorElement.innerText = quotes[0].author ?? 'Anonymous';
});
