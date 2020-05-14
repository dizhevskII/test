'use strict'
let money, time;


function start() {
  money = +prompt("Ваш бюджет на месяц", " руб");
  time = prompt("Введите дату", "в формате YYYY-MM-DD");

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет на месяц", " руб");
  }


};
start();





let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: false
};

let a1 = prompt("Введите обязательную статью расходов", "пример- транспорт");
let a2 = prompt("Во сколько это обойдется?", "руб");
let a3 = prompt("Введите обязательную статью расходов", "пример- транспорт");
let a4 = prompt("Во сколько это обойдется?", "руб");



function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов", "пример- транспорт");
    let b = prompt("Во сколько это обойдется?", "руб");

    if ((typeof (a)) === 'string' && typeof (a) != null && a != '' &&
      b != '' && a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
    } else {
      i = i - 1;
      alert("ошибка! введите корректные данные");
    }
  }
};

chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed(1);

alert("Бюджет на день равен " + appData.moneyPerDay);

if (appData.moneyPerDay > 1000) {
  alert("Вы средняк");
} else if (appData.moneyPerDay > 2000) {
  alert("вам есть куда расти! ");
} else if (appData.moneyPerDay < 1000) {
  alert(" ЛУЗЕР!!!");
} else {
  alert("Ты хорошая партия!!!!")
};

function checkSavings () {
   let save = +prompt("какова сумма ваших накоплений?"),
        percent = +prompt( "Под какой процент годовых?" );
appData.montheInCome = save/100/12*percent;
alert (" Ваш доход в месяц " + appData.montheInCome);
};
checkSavings();