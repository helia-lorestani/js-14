/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/
const colors = ["red", "aqua", "orange", "purple", "lightgreen"];

let word = document.querySelector("#word");
let text = prompt("Enter a text:");

function colorful(userText) {
  let result = "";
  for (letter of userText.split("")) {
    let colorRandom = colors[Math.floor(Math.random() * 5)];
    result += `<span style="color: ${colorRandom}">${letter}</span>`;
  }
  return result;
}
word.innerHTML = colorful(text);
