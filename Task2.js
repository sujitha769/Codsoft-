let buttons = document.getElementsByTagName('button');
let result = document.getElementById('result');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    let input = this.innerText;
    updateDisplay(input);
  };
}

function updateDisplay(input) {
  let currentDisplay = result.innerText;

  if (currentDisplay == '0') {
    if (input != 'C' && input != 'Del' && input != '=') {
      result.innerText = input;
    }
  } else {
    if (input == 'Del') {
      result.innerText = currentDisplay.substring(0, currentDisplay.length - 1);
      if (result.innerText == "") {
        result.innerText = "0";
      }
    } else if (input == "C") {
      result.innerText = "0";
    } else if (input == "=") {
      let display = result.innerText;
      display = display.replace(/%/g, "%");  
      result.innerText = eval(display);
    } else {
      result.innerText += input;
    }
  }
}
