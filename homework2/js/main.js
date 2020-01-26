'use strict';
let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checksavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;

expensesItemBtn.disabled = true;
expensesItemBtn.style.opacity = '0.5';
optionalexpensesBtn.disabled = true;
optionalexpensesBtn.style.opacity = '0.5';
countBudgetBtn.disabled = true;
countBudgetBtn.style.opacity = '0.5';
startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == "" || money == null || money < 0) {
        money = +prompt("Введите верное значение: Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    expensesItemBtn.disabled = false;
    expensesItemBtn.style.opacity = '1';
    optionalexpensesBtn.disabled = false;
    optionalexpensesBtn.style.opacity = '1';
    countBudgetBtn.disabled = false;
    countBudgetBtn.style.opacity = '1';
});

expensesItemBtn.addEventListener('click', function () {
    let sum = 0
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log("Некорректное значение");
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function(){
    for (let i = 0; i <= optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function(){
    if (appData.budget != undefined){
        appData.moneyPerDay = (appData.budget - +expensesValue.textContent / 30).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
        levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent = "Высокий уровень достатка";
    } else {
        levelValue.textContent = "Ошибка";
    };
    } else{
        daybudgetValue.textContent = 'ошибка'
    }
});

chooseIncome.addEventListener('input', function(){
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checksavings.addEventListener('click', function(){
    if (appData.savings == true){
    appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +chooseSum.value,
            persent = +choosePercent.value;
        appData.mounthIncome = sum / 100 / 12 * persent;
        appData.yearIncome = sum / 100 * persent;

        monthsavingsValue.textContent = appData.mounthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +chooseSum.value,
            persent = +choosePercent.value;
    appData.mounthIncome = sum / 100 / 12 * persent;
    appData.yearIncome = sum / 100 * persent;

    monthsavingsValue.textContent = appData.mounthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};