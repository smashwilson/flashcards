const options = [
  '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0',
];

function randomOption() {
  const ind = Math.floor(Math.random() * options.length);
  console.log(`ind = ${ind}`)
  return options[ind];
}

window.onload = function() {
  const cardElement = document.getElementById("current-card");
  cardElement.innerHTML = randomOption();

  document.body.onclick = function () {
    cardElement.innerHTML = randomOption();
  };
}
