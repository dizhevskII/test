'use strict'


let money = prompt ("Ваш бюджет на месяц", " руб")
 let  time =  prompt("Введите дату", "в формате YYYY-MM-DD");
 let question = prompt("Введите обязательную статью расходов", "пример- транспорт");
 let question1 = prompt ("Во сколько это обойдется?", "руб");
  let a = money / question1;


let appData = {
        budget: money,
        timeData: time,
        expenses : {},
        optionalExpenses:{},
         income: [],
         saving : false
    };

alert("Бюджет на день равен" + a/30 );