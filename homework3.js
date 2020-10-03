//Домашняя работа №3 - Чуприн М.И. ЭМ-73
//Сортировка выбором
let arr = [
    { title: 'кек', count: 8 },
    { title: 'ну', count: 75 },
    { title: 'блин', count: 14 },
    { title: 'это', count: 123 },
    { title: 'лол', count: 54 },
    { title: 'короче', count: 198 },
];
function SelectionSort(arr)       
{                               
    var n = arr.length;
    for (var i = 0; i < n-1; i++)
     { var min = i;
       for (var j = i+1; j < n; j++)
        { if (arr[j].count < arr[min].count) min = j; } 
       var t = arr[min].count; arr[min].count = arr[ i ].count; arr[ i ].count = t;
     }             
    return arr;
}
console.log('Сортировка паразитов выбором:')
console.log(SelectionSort(arr))