const fs = require("fs");

const options = JSON.parse(fs.readFileSync("./slides.json"));

function randomOption() {
  const ind = Math.floor(Math.random() * options.length);
  console.log(`ind = ${ind}`)
  return options[ind];
}

window.onload = function() {
  const cardElement = document.getElementById("current-card");
  cardElement.innerHTML = randomOption();

  document.body.onclick = function () {
    const current = cardElement.innerHTML;

    let next = randomOption();
    while (next === current) {
      next = randomOption();
    }

    cardElement.innerHTML = next;
  };
}
