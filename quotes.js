const quotes = [
  {
    body: "To dare is to lose one’s footing momentarily. Not to dare is to lose oneself.",
    author: "Søren Kierkegaard"
  },
  {
    body: "Sometimes even to live is an act of courage.",
    author: "Lucius Annaeus Seneca"
  },
  {
    body: "We suffer more often in imagination than in reality",
    author: "Lucius Annaeus Seneca"
  },
  {
    body: "It is not the man who has too little, but the man who craves more, that is poor.",
    author: "Lucius Annaeus Seneca"
  },
  {
    body: "It is better to conquer our grief than to deceive it.",
    author: "Lucius Annaeus Seneca"
  },
  {
    body: "No man is more unhappy than he who never faces adversity. For he is not permitted to prove himself.",
    author: "Lucius Annaeus Seneca"
  },
  {
    body: "All cruelty springs from weakness.",
    author: "Lucius Annaeus Seneca"
  }
]

document.addEventListener('DOMContentLoaded', () => {
  const imageElement = document.getElementById('cd-image');
  const bodyElement = document.getElementById('cd-quote-body');
  const authorElement = document.getElementById('cd-quote-author');

  const image = `./images/${Math.floor(1 + Math.random() * 12).toString().padStart(2, '0')}.jpg`;
  imageElement.setAttribute('src', image);

  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  bodyElement.innerText = quote.body;
  authorElement.innerText = quote.author ?? 'Anonymous';
});
