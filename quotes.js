const quotes = [
  {
    body: 'To dare is to lose one’s footing momentarily. Not to dare is to lose oneself.',
    author: 'Søren Kierkegaard',
  },
  {
    body: 'Sometimes even to live is an act of courage.',
    author: 'Lucius Annaeus Seneca',
  },
  {
    body: 'We suffer more often in imagination than in reality',
    author: 'Lucius Annaeus Seneca',
  },
  {
    body: 'It is not the man who has too little, but the man who craves more, that is poor.',
    author: 'Lucius Annaeus Seneca',
  },
  {
    body: 'It is better to conquer our grief than to deceive it.',
    author: 'Lucius Annaeus Seneca',
  },
  {
    body: 'No man is more unhappy than he who never faces adversity. For he is not permitted to prove himself.',
    author: 'Lucius Annaeus Seneca',
  },
  {
    body: 'All cruelty springs from weakness.',
    author: 'Lucius Annaeus Seneca',
  },
  {
    body: 'Adversity introduces a man to himself.',
    author: 'Albert Einstein',
  },
  {
    body: 'Death smiles at us all; all we can do is smile back.',
    author: 'Marcus Aurelius',
  },
  {
    body: 'The key is to keep company only with people who uplift you, whose presence calls forth your best.',
    author: 'Epictetus',
  },
  {
    body: 'Hardships often prepare ordinary people for an extraordinary destiny.',
    author: 'C.S. Lewis',
  },
  {
    body: 'How long are you going to wait before you demand the best for yourself?',
    author: 'Epictetus',
  },
  {
    body: "Don't explain your philosophy. Embody it.",
    author: 'Epictetus',
  },
  {
    body: 'Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.',
    author: 'Epicurus',
  },
  {
    body: 'Death does not concern us, because as long as we exist, death is not here. And when it does come, we no longer exist.',
    author: 'Epicurus',
  },
  {
    body: 'I have never wished to cater to the crowd; for what I know they do not approve, and what they approve I do not know.',
    author: 'Epicurus',
  },
  {
    body: 'It is folly for a man to pray to the gods for that which he has the power to obtain by himself.',
    author: 'Epicurus',
  },
  {
    body: 'Of all the means to insure happiness throughout the whole life, by far the most important is the acquisition of friends.',
    author: 'Epicurus',
  },
  {
    body: "It is not so much our friends' help that helps us as the confident knowledge that they will help us.",
    author: 'Epicurus',
  },
]

document.addEventListener('DOMContentLoaded', () => {
  const imageElement = document.getElementById('cd-image')
  const bodyElement = document.getElementById('cd-quote-body')
  const authorElement = document.getElementById('cd-quote-author')

  const image = `./images/${Math.floor(1 + Math.random() * 12)
    .toString()
    .padStart(2, '0')}.jpg`
  // const image = `./images/12.jpg`
  imageElement.setAttribute('src', image)

  const quote = quotes[Math.floor(Math.random() * quotes.length)]
  bodyElement.innerText = `“${quote.body}”`
  authorElement.innerText = quote.author ?? 'Anonymous'
})
