import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
  <div class="container">
  <h1>Random Quote Generator</h1>
  <p class="quote"></p>
  <button class="generateBtn">Generate Quote</button>
</div>
  
`;
