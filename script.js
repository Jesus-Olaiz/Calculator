const calcBody = document.querySelectorAll(".calcBody");
let inputArea = document.getElementById('input');
const numbers = document.querySelectorAll("#number");
const maths = document.querySelectorAll("#function");

let result = 0;
let math;
let num1 = {value:0};
let num2 = {value:0};
input.value = "";




function typeNumbers() {
  if (input.value === ""){
  numbers.forEach((item) => {
    item.addEventListener("click", e => {
      inputArea.value += parseInt(item.textContent);
      return console.log(parseInt(inputArea.value));
    });
  });
}
}



function showMath() {
maths.forEach((item) => {
    item.addEventListener("click", e => {
      inputArea.value = ""
      inputArea.value += item.textContent;
      math = item.textContent;
      return math;
    })
  });
}

function calc() {
 do {
   num1.value = typeNumbers()
   showMath()
 } while (input.value.length > 0);
}

calc();
