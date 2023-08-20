// Ejercicio 1 Función de expresión

const example = function (a, b, c) {
  return a + b + c;
};

// Ejercicio 2 Arrow function

const suma = (a, b) => a + b;

// Ejercicio 3

const ele = document.getElementById("ele1");
ele.style.backgroundColor = "green";

function pintar(verde, color = "green") {
  verde.style.backgroundColor = color;
}

ele.addEventListener("click", () => {
  pintar(ele, "yellow");
});

// Ejercicio 4
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");

function changeColorToBlack(event) {
  event.target.style.backgroundColor = "black";
}

color1.addEventListener("click", changeColorToBlack);
color2.addEventListener("click", changeColorToBlack);
color3.addEventListener("click", changeColorToBlack);
color4.addEventListener("click", changeColorToBlack);

// Ejercicio teclas

let key = document.getElementById("key");

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    key.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    key.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    key.style.backgroundColor = "skyblue";
  } else return;
});

const div1 = document.getElementById("div1");

document.addEventListener("keydown", (event) => {
  const createDiv = document.createElement("div");
  createDiv.style.width = "200px";
  createDiv.style.margin = "10px";
  createDiv.style.height = "200px";
  createDiv.style.backgroundColor = "white";
  createDiv.style.border = "2px solid black";

  if (event.key === "q") {
    createDiv.style.backgroundColor = "purple";
    div1.appendChild(createDiv);
  } else if (event.key === "w") {
    div1.appendChild(createDiv);
    createDiv.style.backgroundColor = "grey";
  } else if (event.key === "e") {
    div1.appendChild(createDiv);
    createDiv.style.backgroundColor = "brown";
  } else return;
});
