import quotes from "./quotes.json";
export const attachEvents = () => {
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.querySelector(".quote")!;
    quoteElement.textContent = quotes[randomIndex];
  }

  const generateBtn = document.querySelector(
    ".generateBtn"
  ) as HTMLButtonElement;
  generateBtn.addEventListener("click", generateQuote);

  generateQuote();
};
