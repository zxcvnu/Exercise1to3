const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const sumTxt = document.getElementById("sum");
const differenceTxt = document.getElementById("difference");
const productTxt = document.getElementById("product");
const quotientTxt = document.getElementById("quotient");
let sum = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        difference = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        product = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        quotient = parseInt(num1Txt.value) / parseInt(num2Txt.value);

        sumTxt.innerHTML = sum;
        differenceTxt.innerHTML = difference;
        productTxt.innerHTML = product;
        quotientTxt.innerHTML = quotient;
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    sumTxt.innerHTML = "";
    differenceTxt.innerHTML = "";
    productTxt.innerHTML = "";
    quotientTxt.innerHTML = "";
    sum = 0;
}