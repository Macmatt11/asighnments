// addition
function sum (num1,num2){
   return num1 + num2 
};
const formAdd = document.addForm  
formAdd.addEventListener('submit',function(event){
event.preventDefault();
const number1Add = parseInt(formAdd.addNum1.value);
formAdd.addNum1.value = '';
const number2Add = parseInt(formAdd.addNum2.value);
formAdd.addNum2.value = '';
const sumResult= document.getElementById('resultAdd');
sumResult.textContent = sum(number1Add,number2Add)
});

//subtraction

function subtract (num1,num2){
   return num1 - num2 
};
const formSubtract = document.subtractForm  
formSubtract.addEventListener('submit',function(event){
event.preventDefault();
const number1Sub = parseInt(formSubtract.subNum1.value);
formSubtract.subNum1.value ='';
const number2Sub = parseInt(formSubtract.subNum2.value);
formSubtract.subNum2.value = '';
const subResult= document.getElementById('resultSub');
subResult.textContent = subtract(number1Sub,number2Sub)

});


//multiplication

function multiply (num1,num2){
   return num1 * num2 
};
const formMultiply = document.multiplyForm  
formMultiply.addEventListener('submit',function(event){
event.preventDefault();
const number1Mult = parseInt(formMultiply.multNum1.value);
formMultiply.multNum1.value = '';
const number2Mult = parseInt(formMultiply.multNum2.value);
formMultiply.multNum2.value = '';
const multResult= document.getElementById('resultMult');
multResult.textContent = multiply(number1Mult,number2Mult)
});

