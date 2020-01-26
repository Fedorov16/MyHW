"use strict";

/*
function calc(){
    let a = 5, b = 6;
    return(a+b);
    
};
let bla = calc();
console.log(bla);

// по новому стандарту
let calc2 = (a,b) => a+b;
console.log(calc2(3,4));

// длинна
let str = "text";
console.log(str.length);

// округление
let twelve = "12.2ph";
console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));

*/
                                // Работа с объектами
/*
let options = {
    width: 1024,
    hight: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};
delete options.bool;
console.log(options);

for (let key in options){
    console.log("Свойство " + key + " имеет значение " + options[key]);
}
console.log(Object.keys(options).length);*/
                        // Работа с массивами
// let arr = [1, 2, "five", 7];
/*arr.pop();              //удалить последнее значение
arr.push("5");          // добавить элемент
arr.shift();            //Удалить первое значение
arr.unshift(6);         //добавить в начало*/
// for(i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass){
//     console.log(i + ": " + item + " (массив: " + mass + ")");
// });
// console.log(arr);

// let mass = [1, 4, 6, 7];
// for(let key of mass){
//     console.log(key);

// }

// let ans = prompt("",""),
//     arr = [];
// arr = ans.split(",");
// console.log(arr);


// let arr = ["asdf", "asdffdfh", "erty"];
// let i = arr.join(", ");
// console.log(i);


// let arr = ["esdf", "asdffdfh", "erty"];
// let i = arr.sort();
// console.log(arr);


//                  создаем новый элемент
// let div = document.createElement('div'),
//     text = document.createTextNode("Something");

// div.classList.add('black');
// document.body.appendChild(div);
//     console.log(div);


/* задержка по времени
let timerID = setTimeout(sayHello, 3000);
// используется, чтобы остановить setTimeout и он перестает работать
clearTimeout(timerID);

function sayHello(){
    alert("Hello, world");
}*/

/*повторение действия каждые 3 сек
let timerID = setInterval(sayHello, 3000);
// clearTimeout(timerID);

function sayHello(){
    console.log("Hello, world");
}*/
/*
рекурсивный вызов setTimeout лучше, чем setInterval, т.к. он сначала запустит функцию, и лишь потом запустит ее снова. 
В случае с интервалом, функция например 5-сек не успеет отработать, а интервал 3 секунды попытается запустить ее еще раз 
let timerID = setTimeout(function letsay(){
    console.log("работает через 2 сек");
    setTimeout(letsay, 2000);
})
*/


