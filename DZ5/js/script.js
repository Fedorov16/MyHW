"use strict";
// Создаем элемент li
let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByTagName('li'),
    body = document.getElementsByTagName('body'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    OutPrompt = document.querySelector('#prompt'),
    menuItemLi = document.createElement('li');

    // элемент с индексом 2 поставить на место элемента с инд 1
menu.insertBefore(menuItem[2], menuItem[1]);
// создаем новый элемент
menuItemLi.classList.add('menu-item');
menuItemLi.textContent = ('Пятый пункт');
menu.appendChild(menuItemLi);
// заменили фон
document.body.style.backgroundImage = "url('../img/apple_true.jpg')";
// меняем текст
title.textContent = ('Мы продаем только подлинную технику Apple');
// удаляем рекламу
adv.remove();
// мнение пользователя
let ask = prompt('ваше отношение к технике apple')
OutPrompt.textContent = ask;
