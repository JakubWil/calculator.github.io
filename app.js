const buttons = document.querySelectorAll("button"); // Zaznaczam wszystkie elementy button
const screenDisplay = document.querySelector(".screen");
const switcher = document.getElementById("checkB");

let calcualtion = []; // pusta tablica
let accCalculation;
let temp;

function calculate(button) {
  const value = button.textContent;

  if (
    screenDisplay.textContent.length == 0 &&
    (value == "+" || value == "/" || value == "*")
  ) {
    alert("Nie moze byc pierwszy znak, zacznij od liczby");
  } else {
    if (value === "CLEAR") {
      calcualtion = [];
      temp = 0;

      screenDisplay.textContent = "";
    } else if (value === "=") {
      if (
        (calcualtion[calcualtion.length - 1] == "+" ||
          calcualtion[calcualtion.length - 1] == "-" ||
          calcualtion[calcualtion.length - 1] == "/" ||
          calcualtion[calcualtion.length - 1] == "*") &&
        value == "="
      ) {
        alert("Niedokończone równanie");
      } else {
        calcualtion = [];

        temp = eval(accCalculation);

        screenDisplay.textContent = temp;
        calcualtion.push(temp);
      }
    } else {
      if (
        (calcualtion[calcualtion.length - 1] == "+" ||
          calcualtion[calcualtion.length - 1] == "-" ||
          calcualtion[calcualtion.length - 1] == "/" ||
          calcualtion[calcualtion.length - 1] == "*" ||
          calcualtion[calcualtion.length - 1] == ".") &&
        (value == "+" ||
          value == "-" ||
          value == "/" ||
          value == "*" ||
          value == ".")
      ) {
        console.log(calcualtion);
        alert("Nie moze byc znak po znaku");
      } else {
        calcualtion.push(value);

        accCalculation = calcualtion.join("");

        screenDisplay.textContent = accCalculation;
      }
    }
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);

// SLIDER LIGHT/DARK MODE
switcher.onchange = (e) => {
  if (switcher.checked === true) {
    document.querySelector(".container").style.backgroundColor = "#fff";
    document.querySelector(".info").style.backgroundColor = "#fff";
    document
      .querySelectorAll("button")
      .forEach((e) => (e.style.backgroundColor = "#000"));
  } else {
    document.querySelector(".container").style.backgroundColor = "#fff";
    document.querySelector(".info").style.backgroundColor = "#fff";
    document
      .querySelectorAll("button")
      .forEach((e) => (e.style.backgroundColor = "#000"));
  }
};

// button.addEventListener('mouseover', function() {
//   this.style.backgroundColor = 'red';
// });

// button.addEventListener('mouseout', function() {
//   this.style.backgroundColor = ''; // przywróć domyślny kolor tła
// });
