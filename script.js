const input = document.getElementById("input");
const numbers = document.querySelectorAll(".number")
const clearAll = document.getElementById("clearAll")
const backspace = document.getElementById("clearLast")
let operator = document.querySelectorAll(".operator")
const sum = document.getElementById("sum")
let num1 = 0
let num2 = 0
let operation 


input.value=""
//Change input value to match number typed in
function makeNumbers() {
    numbers.forEach(element => {
    element.addEventListener("click", ()=> {
        input.value += element.textContent;
    })
});
}

//backspace and clear field
backspace.addEventListener("click", () => {
    let number = input.textContent
    number = input.value
    let newNumber = number.substring(0, number.length - 1)
        if(newNumber.length === 0){
            input.value = ""
        }else{
            input.value = parseInt(newNumber)
        }
})

clearAll.addEventListener("click", () => {
    input.value = ""
})

makeNumbers();

//Find sum of 2 numbers based on operator

function math(num1, num2){
    if(operator === "+"){
        input.value = num1 + num2
    }if(operator === "-"){
        input.value = num1 - num2
    }if(operator === "×"){
        input.value = num1 * num2
    }if(operator === "÷"){
        input.value = num1/num2
    }
    
}


for (const element of operator) {
    element.addEventListener("click", (e) => {
        if (e.target.className = "OPERATOR"){
            num1 = parseInt(input.value)
            input.value += e.target.textContent
            operator = e.target.textContent
            console.log(operator)
            console.log(num1);
            
        }
    })
}


sum.addEventListener("click", () => {
    num2 = input.value.match(/(?!\w+(\+|-|÷|×))\w+/g)
    num2 = parseInt(num2[0])
    
    math(num1, num2)
})
