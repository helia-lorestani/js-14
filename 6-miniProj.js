//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red

const colors = ["red", "aqua", "orange", "purple", "lightgreen"];

function changeColor() {
  let h1 = document.querySelector("h1");
  let colorRandom = colors[Math.floor(Math.random() * 5)];
  let change = `<span style="color:${colorRandom}">2020</span>`;
  h1.innerHTML = h1.innerHTML.replace("2020", change);
}
let backgroundColors = document.querySelectorAll("li");

setInterval(() => {
  console.clear();
  changeColor();
}, 1000);

backgroundColors.forEach((item) => {
  if (item.textContent.includes("Done")) {
    item.style.backgroundColor = "green";
  } else if (item.textContent.includes("Ongoing")) {
    item.style.backgroundColor = "yellow";
  } else if (item.textContent.includes("Coming")) {
    item.style.backgroundColor = "red";
  }
});
