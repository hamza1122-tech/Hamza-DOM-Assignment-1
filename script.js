const heading = document.querySelector("#heading");
heading.textContent = "Wellcome to Javascript DOM";

let para = document.getElementById("para");
let btn = document.getElementById("btn");
btn.onclick = function () {
  para.textContent = "Paragraph text changed";
};

let changBackground = document.querySelector("#btn2");
changBackground.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightBlue";
});

let showAlert = document.getElementById("btn3");
showAlert.onclick = function () {
  alert("DOM is working");
};

let input = document.getElementById("input");
let updateText = document.querySelector("#btn4");
let paragraph = document.querySelector("#para2");
updateText.onclick = function () {
  paragraph.textContent = input.value;
};
