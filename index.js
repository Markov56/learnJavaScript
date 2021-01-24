"use strict"
/*
alert("Я JavaScript!");
//2.4
let admin;
let name;
name = "Джон";
admin = name;
alert(admin);
//
let planetName;
let currentUser;

//2.6
let name = prompt('What is your name?');
alert(`Hello, ${name}!`);

//2.10
let result = prompt("Какое официальное название JavaScript", "");
if(result==="ECMAScript"){
    alert("Вы правы!")
} else {
    alert("Не знаете? ECMAScript!")
}
//
let answer = prompt("Введите число", 0);
if(answer>0){
    alert(1)
} else if (answer<0){
    alert(-1)
} else {
    alert(0)
};
//
let result1 = (a+b < 4) ? "Мало" : "Много";
//
let message;
message = (login == 'Сотрудник') ? 'Привет'
: login == 'Директор' ? 'Здравствуйте'
: (login == '') ? 'Нет логина'
: '';

//2.11
let age;
if(age >= 14 && age <= 90){
    alert('okay')
}
//
if(!(age >= 14 && age <= 90)){
    alert('okay')
}
//

let ktoTam = prompt('Кто там?', '');

if(ktoTam==='Админ'){
    
    let adminPassword = prompt('Пароль', '');
    if(adminPassword === 'Я главный'){
        alert('Здравствуйте!')
    } if (adminPassword === '' || adminPassword === null){
        alert('Отменено')
    } else {
        alert('Неверный пароль')
    }
    
} else if(ktoTam === '' || ktoTam === null){
    alert('Отменено')
} else {
    alert('Неверный пароль')
}

//2.13
for(let i = 2; i <= 10; i++){
       if(i%2==0) alert(i)
}
 
//
let i = 0;
while(i<3){
    alert(`number ${i}`)
    i++
}

//
while(true){
    let value = prompt('Введите число больше 100', '');
if(+value > 100 || value === null) break;
}

//
let n = 10;
nextIteration: for(let i = 2; i <=n; i++){
    for(let j = 2; j < i; j++){ //вопрос: почему 2 проходит
        if(i % j === 0) continue nextIteration;
    }
    console.log(i)
}


//2.14
let browser = prompt('Каким браузером вы пользуетесь?', '');
if (browser === 'Edge') {
    alert("You've got the Edge!")
} else if (browser === 'Chrome' 
           || browser === 'Firefox' 
           || browser === 'Safari' 
           || browser === 'Opera') {
    alert('Okay we support these browsers too')
} else {
    alert('We hope that this page looks ok!');
}

const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}

//2.15


function checkAge(age) {
    (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
    return( age > 18 || confirm('Родители разрешили?') )
}
//
function getMin(a, b){
    if(a === b) return "Числа равны"
   return (a > b) ? a : b;
}

console.log(getMin(3, 3))

function pow(x, n) {
    x = +prompt('Какой число нужно возвести в степень?', ''); //вопрос let
    n = +prompt('В какую степень возвести?', '')
    console.log(Math.pow(x, n))
    if(n<1){
        alert('Степень не поддерживается')
    } else {
        return Math.pow(x, n)
        }
}
*/




















