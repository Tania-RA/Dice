let rand1 = Math.floor((Math.random() * 6) + 1);
console.log(rand1);

let rand2 = Math.floor((Math.random() * 6) + 1);
console.log(rand2);

let image1 = `dice${rand1}.png`;
console.log(image1);

let image2 = `dice${rand2}.png`;
console.log(image2);

let img1 = document.getElementById("img1");
//console.log(img1);
img1.src = `images/${image1}`;


let img2 = document.getElementById("img2");
//console.log(img1);
img2.src = `images/${image2}`;

let winner = document.createElement("h3");
winner.setAttribute("class", "winner");
let container = document.querySelector("h1");
if (rand1 === rand2) {
  winner.innerText = "It's a TIE!";
  container.appendChild(winner);
} else if (rand1 > rand2) { 
  winner.innerText = "Player 1 WINS!";
  container.appendChild(winner);
} else {
  winner.innerText = "Player 2 WINS"
  container.appendChild(winner);
}