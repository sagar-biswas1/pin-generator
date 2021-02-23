var btn = document.getElementById("generate-button");

btn.addEventListener("click", function () {
  var randomNumber = Math.random() * 9000 + 1000;

  randomNumber = Math.round(randomNumber);
  document.getElementById("pin-display").value = randomNumber;
  if (randomNumber) {
    document.getElementById("notification").innerHTML = "";
    document.getElementById("left-try").innerText = 5;
    document.getElementById("calculator-text").value = "";
  }
});

var numberPressed = document.getElementsByClassName("button");

for (let i = 0; i < numberPressed.length; i++) {
  const element = numberPressed[i];

  element.addEventListener("click", function (e) {
    var calculatorText = document.getElementById("calculator-text");

    if (e.target.innerText == "<") {
      let num = calculatorText.value.length - 1;
      calculatorText.value = calculatorText.value.substring(0, num);
    } else {
      calculatorText.value += e.target.innerText;
    }
  });
}

function matchingPin() {
  var notify = document.getElementById("notification");
  var generatedPin = document.getElementById("pin-display").value;
  var inputedPin = document.getElementById("calculator-text").value;
  var leftTry = parseInt(document.getElementById("left-try").innerText);
  if (inputedPin == 0) {
    return null;
  }
  if (leftTry === 0) {
    generatedPin = "";
    notify.innerHTML = `<p class="notify">No try left.Please generate another pin.</p>`;
  }

  if (generatedPin == inputedPin) {
    notify.innerHTML =
      '<p class="notify">✅ Pin Matched... Secret door is opening for you</p>';

    console.log("hello,,pin matched");
  } else if (leftTry > 0) {
    leftTry--;
    document.getElementById("left-try").innerText = leftTry;
    notify.innerHTML = `<p class="notify">❌ Pin Didn't Match, Please try again</p>`;
  }
}
