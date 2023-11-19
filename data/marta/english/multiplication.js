var placeholder= "...";


var table2= "2"




var main_options = [
    {word:"2 X 1", correct: "2"},
    {word:"2 X 2", correct: "4"},
    {word:"2 X 3", correct: "6"},
    {word:"2 X 4", correct: "8"},
    {word:"2 X 5", correct: "10"},
    {word:"2 X 6", correct: "12"},
    {word:"2 X 7", correct: "14"},
    {word:"2 X 8", correct: "16"},
    {word:"2 X 9", correct: "18"},
    {word:"2 X 10", correct: "20"},


    {word:"3 X 1", correct: "3"},
    {word:"3 X 2", correct: "6"},
    {word:"3 X 3", correct: "9"},
    {word:"3 X 4", correct: "12"},
    {word:"3 X 5", correct: "15"},
    {word:"3 X 6", correct: "16"},
    {word:"3 X 7", correct: "21"},
    {word:"3 X 8", correct: "24"},
    {word:"3 X 9", correct: "27"},
    {word:"3 X 10", correct: "30"},

    {word:"4 X 1", correct: "4"},
    {word:"4 X 2", correct: "8"},
    {word:"4 X 3", correct: "12"},
    {word:"4 X 4", correct: "16"},
    {word:"4 X 5", correct: "20"},
    {word:"4 X 6", correct: "24"},
    {word:"4 X 7", correct: "28"},
    {word:"4 X 8", correct: "32"},
    {word:"4 X 9", correct: "36"},
    {word:"4 X 10", correct: "40"},

    {word:"5 X 1", correct: "5"},
    {word:"5 X 2", correct: "10"},
    {word:"5 X 3", correct: "15"},
    {word:"5 X 4", correct: "20"},
    {word:"5 X 5", correct: "25"},
    {word:"5 X 6", correct: "30"},
    {word:"5 X 7", correct: "35"},
    {word:"5 X 8", correct: "40"},
    {word:"5 X 9", correct: "45"},
    {word:"5 X 10", correct: "50"},

    {word:"6 X 1", correct: "6"},
    {word:"6 X 2", correct: "12"},
    {word:"6 X 3", correct: "18"},
    {word:"6 X 4", correct: "24"},
    {word:"6 X 5", correct: "30"},
    {word:"6 X 6", correct: "36"},
    {word:"6 X 7", correct: "42"},
    {word:"6 X 8", correct: "48"},
    {word:"6 X 9", correct: "54"},
    {word:"6 X 10", correct: "60"},

    {word:"7 X 1", correct: "7"},
    {word:"7 X 2", correct: "14"},
    {word:"7 X 3", correct: "21"},
    {word:"7 X 4", correct: "28"},
    {word:"7 X 5", correct: "35"},
    {word:"7 X 6", correct: "42"},
    {word:"7 X 7", correct: "49"},
    {word:"7 X 8", correct: "56"},
    {word:"7 X 9", correct: "63"},
    {word:"7 X 10", correct: "70"},

    {word:"8 X 1", correct: "8"},
    {word:"8 X 2", correct: "16"},
    {word:"8 X 3", correct: "24"},
    {word:"8 X 4", correct: "32"},
    {word:"8 X 5", correct: "40"},
    {word:"8 X 6", correct: "48"},
    {word:"8 X 7", correct: "56"},
    {word:"8 X 8", correct: "64"},
    {word:"8 X 9", correct: "72"},
    {word:"8 X 10", correct: "80"},

    {word:"9 X 1", correct: "9"},
    {word:"9 X 2", correct: "18"},
    {word:"9 X 3", correct: "27"},
    {word:"9 X 4", correct: "36"},
    {word:"9 X 5", correct: "45"},
    {word:"9 X 6", correct: "54"},
    {word:"9 X 7", correct: "63"},
    {word:"9 X 8", correct: "72"},
    {word:"9 X 9", correct: "81"},
    {word:"9 X 10", correct: "90"}
    



];

var options = [];
let tablas = prompt("Escribe las tablas a practicar");
const tableIndexs = tablas.split(',');
for(i=0;i<tableIndexs.length;i++){
    let selectedTable = main_options.filter(op => op.word.startsWith(tableIndexs[i]));
    for(f=0;f<selectedTable.length;f++){
        options.push(selectedTable[f]);
    }
}
console.log(options);
alert('he metido '+ options);

var maxAverage =15;
var availableOptions = 3;
var explanation = function(correct, wrong){
    let currentTable = options.filter(op => op.word.startsWith(correct.word.charAt(0)));
    let expla = "";
    currentTable.forEach(entry=> expla = expla + "<br/> "+ entry.word+ " = "+ entry.correct);
    return expla;
};