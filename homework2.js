// Чуприн Максим Игоревич - ЭМ-73 - Домашняя работа №2
// Пункт первый
function task1(a,b){
  console.log('Задачка под номером 1:');
  let n;
  if (a > b){
    n = a - b;
    console.log(`Число ${a} > ${b} на ${n}`);
  }
  else if (b > a){
    n = b - a;
    console.log(`Число ${b} > ${a} на ${n}`);
  }
  else{
    console.log("Как выяснилось, a равно b");
  }
}  

task1(73,87);

// Пункт второй

let arrayofnames = ["Саша", "Андрей", "Олег","Юлия", "Ксения", "Артём"];
function task2(a){
  console.log('Задачка под номером 2:');
  console.log(arrayofnames.sort());
}

task2(arrayofnames);

// Пункт третий

let arrayofnum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
function task3(arr){
  console.log('Задачка под номером 3:');
  let n = arrayofnum.length;
  for(let i = 0; i < n; i++){
    if(Math.pow(arrayofnum[i],2) > 20 && Math.pow(arrayofnum[i],2) < 100){
    arrayofnum.push(arrayofnum[i]);
    }
  }
  arrayofnum.splice(0,n);
  console.log(arrayofnum);
}

task3(arrayofnum);

// Пункт четвёртый

function task4(a){
  console.log('Задачка под номером 4:');
  for(let i = 1; i < 26; i++){
    console.log(`${a} ${i}`);
  }
}

task4("Я номер");

// Пункт пятый

let numarray5 = [10,20,30,40,50,60,70];
function task5(numarray5){
  console.log('Задачка под номером 5:');
  let min = numarray5[0];
  for(let i = 0; i < numarray5.length; i++){
    for(let j = i+1; j < numarray5.length; j++){
      if(numarray5[j]>numarray5[i]){
         min = numarray5[j];
         numarray5[j] = numarray5[i];
         numarray5[i] = min;
      }
    }
  }
  console.log("Вернули из исходного массива: " + numarray5);
}

task5(numarray5);

// Пункт шестой

let name6 = "Саша";
function task6(arr6){
  console.log('Задачка под номером 6:');
  newname6 = name6.split('');
  console.log(newname6);
}

task6(name6);

// Пункт седьмой

let numarray7 = [1,2,3,4];
function task7(numarray7){
  console.log('Задачка под номером 7:');
  let sum = 0;
  for(let i = 0; i < numarray7.length; i++){
    sum+=numarray7[i];
  }
  console.log("Выход = " + sum);
}

task7(numarray7);

// Пункт восьмой

let text8 = "Faculty of mechatronics and automation";
function task8(text8){
  console.log('Задачка под номером 8:');
  console.log(`Строка - |Faculty of mechatronics and automation| имеет ${text8.length} символов`);
}

task8(text8);

// Пункт девятый

let text9 = "Maxim Chuprin";
function task9(name,n){
  console.log('Задачка под номером 9:');
  for(let i = 0; i < n; i++){
    console.log(name);
  }
}
task9(text9,4);
