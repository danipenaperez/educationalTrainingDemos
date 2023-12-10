var placeholder= "...";




var pastVerbsResumen = 
"<table border=1>"+
"<tr><th> Present (presente)</th><th>Past (pasado) </th><th>Traduccion</th></tr>" +
"<tr><td> Arrive</td><td>Arrived</td><td>LLegar</td></tr>" +
"<tr><td> Find</td><td>Found</td><td>Encontrar</td></tr>" +
"<tr><td> Live</td><td>Lived</td><td>Vivir</td></tr>" +
"<tr><td> Sail</td><td>Sailed</td><td>Navegar</td></tr>" +
"<tr><td> Start</td><td>Started</td><td>Empezar</td></tr>" +
"</table>";



var main_options = [
    {word:"Roots absorb "+placeholder+" and minerals from the ground.", correct: "water" },
    {word:"Roots absorb water and "+placeholder+" from the ground.", correct: "minerals" },
    {word:"The mixture of water and minerals is called the "+placeholder+".", correct: "raw sap" },
    {word:"The raw sap goes up the "+placeholder+" and into the leaves .", correct: "stem" },
    {word:"The raw sap goes up the stem and into the "+placeholder+" .", correct: "leaves" },
    {word:"The leaves absor "+placeholder+" and carbon dioxe.", correct: "sunlight" },
    {word:"The leaves absor sunlight and "+placeholder+".", correct: "carbon dioxe" },
    {word:"The leaves absor sunlight and carbon dioxe throught the "+placeholder+".", correct: "stomata" },
    {word:"The plant transform raw sap into "+placeholder+".", correct: "elaborated sap" },
    {word:"Plants produce their own "+placeholder+".", correct: "food" },
    {word:"Plants produce their own food throught a process called "+placeholder+".", correct: "photosyntesis" },
    {word:"The plant expells "+placeholder+" into the air.", correct: "oxygen" },
    {word:"The raw sap travels to the leaves throught  "+placeholder+" .", correct: "vessels" },
    {word:"¿Que significa Roots?", correct: "raices" },
    {word:"¿Que significa leaves?", correct: "hojas" },
    {word:"¿Que significa stem?", correct: "tallo" }
];

var options = main_options;



var maxAverage =15;
var availableOptions = 3;
var explanation = function(correct, wrong){
    if(correct.explanation){
        return correct.explanation;
    }else{
        return correct.correct;
    }
};