const quote = document.getElementById("text-to-type").innerText;
const inputField = document.getElementById("user-input");

let startTime = Date.now();
inputField.addEventListener("input", () => {
  const userInput = inputField.value;
  let correctChars = 0;
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === quote[i]) {
      correctChars++;
    }
  }
  const accuracy = (correctChars / quote.length) * 100;
  document.getElementById("accuracy").innerText = `Accuracy: ${accuracy.toFixed(
    2
  )}%`;
  const wpm = (
    userInput.split(" ").length /
    ((Date.now() - startTime) / 60000)
  ).toFixed(2);
  document.getElementById("wpm").innerText = `Words Per Minute: ${wpm}`;
});
