//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

let value1 = document.querySelector("p");
let value2 = document.querySelector("#first-p");
let value3 = document.querySelector("#second-p");
let value4 = document.querySelector("#third-p");
let value5 = document.querySelector("#fourth-p");
let value6 = document.querySelectorAll("p");
for (let value of value6) {
  console.log(value.textContent);
}
value6[3].textContent = "new text";

for (let value of value6) {
  value.id = "newId";
}
// for (let value of value6) {
//   console.log(value.getAttribute("id"));
// }

for (let value of value6) {
  value.setAttribute("class", "first-class");
}

value2.style.color = "rgb(12, 12, 67)";
value2.style.backgroundColor = "rgb(0, 145, 255)";
value2.style.border = "solid 2px black";
value2.style.fontSize = "20px";
value2.style.fontFamily = "";

value3.style.color = "rgb(63, 12, 67)";
value3.style.backgroundColor = "rgb(68, 0, 255)";
value3.style.border = "solid 2px black";
value3.style.fontSize = "30px";
value3.style.fontFamily = "";

value4.style.color = "rgb(12, 67, 23)";
value4.style.backgroundColor = "rgb(191, 255, 0)";
value4.style.border = "solid 2px black";
value4.style.fontSize = "20px";
value4.style.fontFamily = "";

value5.style.color = "rgb(67, 37, 12)";
value5.style.backgroundColor = "rgb(255, 242, 0)";
value5.style.border = "dotted 2px brown";
value5.style.fontSize = "40px";
value5.style.fontFamily = "";

let styles = document.querySelectorAll("p");
for (let i = 0; i < styles.length; i++) {
  styles[0].style.color = "green";
  styles[2].style.color = "green";
  styles[1].style.color = "red";
  styles[3].style.color = "red";
}
