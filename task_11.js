// Задача 11*

/*
Создайте функцию getZippedArrays.
У функции должно быть два параметра. Первый — массив с названиями ключей. Второй — массив со значениями этих ключей.
Функция должна собирать из этих двух массивов объект и возвращать его. Каждому элементу из массива ключей соответствует элемент из массива значений.
*/

// Первый тест. Массив ключей: 
// ["name","surname","address"]
// Массив значений: 
// ["Асисяй","Котовий","Йошкар-Ола"]
// Ожидаемый результат: 
// {"name":"Асисяй","surname":"Котовий","address":"Йошкар-Ола"}

// Второй тест. Массив ключей: 
// ["color","height","weight","depth"]
// Массив значений: 
// ["чёрный","100","50","20"]
// Ожидаемый результат: 
// {"color":"чёрный","height":"100","weight":"50","depth":"20"}

// Третий тест. Массив ключей: 
// ["country","city","month","arrivalDay","departureDay"]
// Массив значений: 
// ["Португалия","Синтра","июль","5","10"]
// Ожидаемый результат: 
// {"country":"Португалия","city":"Синтра","month":"июль","arrivalDay":"5","departureDay":"10"}

function getZippedArrays(arrKey, arrValue) {
    let obj = {};

    for (let i = 0; i < arrKey.length; i++) {
        obj[arrKey[i]] = arrValue[i];
    }

    return obj;
}

console.log(getZippedArrays(["name","surname","address"], ["Асисяй","Котовий","Йошкар-Ола"]));