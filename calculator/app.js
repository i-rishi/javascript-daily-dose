window.onload = () => {
  const buttons = document.querySelectorAll(".numbers");
  const screen = document.querySelector("#screen");
  const equals = document.querySelector("#btn-equals");
  const clear = document.querySelector("#btn-clear");
  // on click
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      screen.value += e.target.innerHTML;
    });
  });

  //on keypress
  document.addEventListener("keypress", (e) => {
    const key = e.key;
    const acceptedKeys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "+",
      "-",
      "*",
      "/",
      "Enter",
      "c",
    ];

    if (acceptedKeys.includes(key)) {
      if (key === "=" || key === "Enter") {
        equalExpressions();
      } else if (key === "c") {
        screen.value = "";
      } else {
        screen.value += key;
      }
    }
  });

  equals.addEventListener("click", () => {
    equalExpressions();
  });

  clear.addEventListener("click", () => {
    screen.value = "";
  });

  const equalExpressions = () => {
    if (!screen.value) {
      screen.value = "Enter value";
    } else {
      screen.value = eval(screen.value);
    }
  };
};
