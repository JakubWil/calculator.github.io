const buttons = document.querySelectorAll("button"); // Zaznaczam wszystkie elementy button
const screenDisplay = document.querySelector(".screen");
const switcher = document.getElementById("checkB");
let calcualtion = []; // pusta tablica
let accCalculation;
let temp;
let isResultDisplayed = false;

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
      isResultDisplayed = false;
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
        isResultDisplayed = true;
      }
    } else {
      if (isResultDisplayed && !isNaN(value)) {
        alert("Następnym krokiem mogą być tylko znaki.");
      } else if (
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
        alert("Nie moze byc znak po znaku");
      } else {
        calcualtion.push(value);

        accCalculation = calcualtion.join("");

        screenDisplay.textContent = accCalculation;
        isResultDisplayed = false;
      }
    }
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);

// SLIDER LIGHT/DARK MODE
// switcher.addEventListener("change", function () {
//   if (this.checked) {
//     // document.body.style.backgroundImage =
//     //   "linear-gradient(to right, #141e30, #243b55)";
//   } else {
//     document.body.style.backgroundColor = "#000";
//   }
// });

switcher.onchange = true;

switcher.onchange = () => {
  if (switcher.checked === false) {
    document.body.style.backgroundColor = "#000";

    document.querySelector(".container").style.backgroundImage =
      "linear-gradient(to right, #141e30, #243b55)";
    document.querySelector(".info").style.backgroundColor = "#243b55";
    document.querySelector(".info-h").style.color = "#fff";
    document.querySelector(".info-p").style.color = "#fff";
    document
      .querySelectorAll("button")
      .forEach((e) => (e.style.backgroundColor = "#4b617b"));

    document.querySelectorAll("button").forEach((e) => {
      e.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#845ef7";
      });
    });

    document.querySelectorAll("button").forEach((e) => {
      e.addEventListener("mouseout", function () {
        this.style.backgroundColor = "#4b617b";
      });
    });
  } else {
    document.body.style.backgroundColor = "#fff";
    document.querySelector(".container").style.backgroundImage =
      "linear-gradient(to right, #f4c4f3, #fc67fa)";
    document.querySelector(".info").style.backgroundColor = "#f4c4f3";
    document.querySelector(".info-h").style.color = "#fff";
    document.querySelector(".info-p").style.color = "#fff";
    document
      .querySelectorAll("button")
      .forEach((e) => (e.style.backgroundColor = "#e64980"));

    document.querySelectorAll("button").forEach((e) => {
      e.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#ff8787";
      });
    });

    document.querySelectorAll("button").forEach((e) => {
      e.addEventListener("mouseout", function () {
        this.style.backgroundColor = "#e64980";
      });
    });
    // document
    //   .querySelectorAll("button")
    //   .forEach((e) => (e.style.backgroundColor = "#000"));
  }
};

// !isNaN(value) sprawdza, czy wartość value nie jest typu NaN (Not a Number).
//  Funkcja isNaN zwraca wartość true, jeśli argument nie jest liczbą, a false,
//  jeśli argument jest liczbą. Operator ! neguje wynik zwracany przez funkcję
//  isNaN, więc !isNaN(value) zwróci true, jeśli value jest liczbą, a false,
//  jeśli nie jest. Można użyć tej operacji, aby sprawdzić, czy wartość jest
//  liczbą przed wykonaniem operacji arytmetycznych, aby uniknąć błędów wynikających z
//  operowania na wartości, która nie jest liczbą.
