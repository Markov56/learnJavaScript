'use strict'
/*
function pow(x, n) {
  let result=1;
    
  for (let i = 0; i < n; i++) {
      result*=x;
  }
  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');
if (n <= 0) {
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} else {
  alert( pow(x, n) );
}


//4.1

let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;



//Проверка на пустоту
function isEmpty(myObj) {
    for(let key in myObj){
        return false;
    }
    return true;
}
//Сумма свойств объекта

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumOfSalaries(obj){
    if(isEmpty(obj)) return 0; //использую функцию из предыдущей задачи и горжусь собой
    
     let sum = 0; 
    
    for(let key in obj){       
        sum += obj[key];        
    }
    return sum;
}
console.log(sumOfSalaries(salaries))


function multiplyNumeric(obj){
    
    for(let key in obj){        
        if(typeof obj[key] === 'number'){   
            console.log(obj[key])
            obj[key] *= 2;

        }
    }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
console.log(menu)


//4.4

//Создайте калькулятор
let calculator = {
    read() {
            this.x = +prompt('Введите x', '');
            this.y = +prompt('Введите y', '');
        },
    sum() {
        return this.x + this.y
    },
    mul() {
        return this.x * this.y
    }
}

calculator.read()


//4.5
//Создание калькулятора

function Calculator() {
    this.read = function() {
            this.x = +prompt('Введите x', '');
            this.y = +prompt('Введите y', '');
        },
    this.sum = function() {
            return this.x + this.y
        },
    this.mul = function() {
            return this.x * this.y
        }
}


//Создаем Accumulator
function Accumulator(startingValue){
    this.value = startingValue,
    this.read = function(){
        this.x = +prompt('Какое число прибавить?', '');
        this.value += this.x
    }
}

*/


    
console.log(Object.is('10', 10))









