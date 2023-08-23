const quotes = [
  "If you love life, don't waste time, for time is what life is made up of. Bruce Lee",
  "There are no failures. Just experiences and your reactions to them. Tom Krause",
  "Everything that irritates us about others can lead us to an understanding of ourselves. Carl Jung",
  "Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you. Richard Bach",
  "In the end we retain from our studies only that which we practically apply. Johann Wolfgang von Goethe",
  "Can you imagine what I would do if I could do all I can? Sun Tzu",
  "They must often change, who would be constant in happiness or wisdom. Confucius",
  "There is nothing in a caterpillar that tells you it's going to be a butterfly. Buckminster Fuller",
  "Those who will play with cats must expect to be scratched. Cervantes",
  "Things turn out best for those who make the best of the way things turn out. Jack Buck",
  "I'd rather regret the things that I have done than the things that I have not done. Lucille Ball",
  "Be thankful when you don't know something for it gives you the opportunity to learn.",
  "Be the change that you want to see in the world. Mohandas Gandhi",
  "Be what you are. This is the first step toward becoming better than you are. Julius Charles Hare",
  "Silence is the true friend that never betrays. Confucius",
  "To be wronged is nothing unless you continue to remember it. Confucius",
  "Allow the world to live as it chooses, and allow yourself to live as you choose. Richard Bach",
  "Passion creates the desire for more and action fueled by passion creates a future. Byron Pulsifer",
  "Everyone smiles in the same language.",
  "It is not enough to have a good mind; the main thing is to use it well. Rene Descartes",
  "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed. Blaise Pascal",
  "To give hope to someone occurs when you teach them how to use the tools to do it for themselves. Byron Pulsifer",
  "Progress always involves risks. You can't steal second base and keep your foot on first. Frederick Wilcox",
  "It is the mark of an educated mind to be able to entertain a thought without accepting it. Aristotle",
  "Truth is generally the best vindication against slander. Abraham Lincoln",
  "The free man is he who does not fear to go to the end of his thought. Leon Blum",
  "A man is not old as long as he is seeking something. Edmond Rostand",
  "God always takes the simplest way. Albert Einstein",
  "Mistakes are always forgivable, if one has the courage to admit them. Bruce Lee",
  "Everything that irritates us about others can lead us to an understanding about ourselves. Carl Jung",
];

export function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.querySelector(".quote")!;
  quoteElement.textContent = quotes[randomIndex];
}

const generateBtn = document.querySelector(".generateBtn") as HTMLButtonElement;
generateBtn.addEventListener("click", generateQuote);

generateQuote();