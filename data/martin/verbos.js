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
    {word:"Begin "+placeholder+" Begun : empezar", correct: "began" , explanation: "Begin Began Begun : empezar"},
    {word:placeholder+" Began Begun : empezar", correct: "begin" , explanation: "Begin Began Begun : empezar"},
    {word:"Begin Began "+placeholder+ "  : empezar", correct: "begun" , explanation: "Begin Began Begun : empezar"},
    {word:"El verbo Begin significa "+placeholder, correct: "empezar" , explanation: "Begin Began Begun : empezar"},

    {word:"Break "+placeholder+" broken : romper", correct: "broke" , explanation: "Break Broke Broken : romper"},
    {word:placeholder+" Broke Broken : romper", correct: "break" , explanation: "Break Broke Broken : romper"},
    {word:"Break Broke "+placeholder+ ": romper", correct: "broken" , explanation: "Break Broke Broken : romper"},
    {word:"El verbo Break significa "+placeholder, correct: "romper" , explanation: "Break Broke Broken : romper"},

    {word:"Bring "+placeholder+" brought : traer o llevar", correct: "brought" , explanation: "Bring brought brought : traer o llevar"},
    {word:placeholder+" brought brought : traer o llevar", correct: "bring" , explanation: "Bring brought brought : traer o llevar"},
    {word:"Bring brought "+placeholder+ ": traer o llevar", correct: "brought" , explanation: "Bring brought brought : traer o llevar"},
    {word:"El verbo Bring significa "+placeholder, correct: "traer o llevar" , explanation: "Bring brought brought : traer o llevar"},

    {word:"Build "+placeholder+" built : construir", correct: "built" , explanation: "Build built built : construir"},
    {word:placeholder+" built built : construir", correct: "build" , explanation: "Build built built : construir"},
    {word:"Build built "+placeholder+ ": construir", correct: "built" , explanation: "Build built built : construir"},
    {word:"El verbo Build significa "+placeholder, correct: "construir" , explanation: "Build built built : construir"},

    {word:"Buy "+placeholder+" bought : comprar", correct: "bought" , explanation: "Buy bought bought : comprar"},
    {word:placeholder+" bought bought : comprar", correct: "Buy" , explanation: "Buy bought bought : comprar"},
    {word:"Buy bought "+placeholder+ ": comprar", correct: "bought" , explanation: "Buy bought bought : comprar"},
    {word:"El verbo Build significa "+placeholder, correct: "comprar" , explanation: "Buy bought bought : comprar"},

    {word:"Can "+placeholder+" could : poder saber o ser capaz", correct: "could" , explanation: "Can could could : poder saber o ser capaz"},
    {word:placeholder+" could could : poder saber o ser capaz", correct: "Can" , explanation: "Can could could : poder saber o ser capaz"},
    {word:"Can could "+placeholder+ ": poder saber o ser capaz", correct: "could" , explanation: "Can could could : poder saber o ser capaz"},
    {word:"El verbo Can significa "+placeholder, correct: "poder saber o ser capaz" , explanation: "Can could could : poder saber o ser capaz"},

    {word:"Catch "+placeholder+" cought : coger o atrapar", correct: "cought" , explanation: "Catch cought cought : coger o atrapar"},
    {word:placeholder+" cought cought : coger o atrapar", correct: "Catch" , explanation: "Catch cought cought : coger o atrapar"},
    {word:"Catch cought "+placeholder+ ": coger o atrapar", correct: "cought" , explanation: "Catch cought cought : coger o atrapar"},
    {word:"El verbo Catch significa "+placeholder, correct: "coger o atrapar" , explanation: "Catch cought cought : coger o atrapar"},

    {word:"Choose "+placeholder+" chosen : elegir o escoger", correct: "chose" , explanation: "Choose chose chosen : elegir o escoger"},
    {word:placeholder+" chose chosen : elegir o escoger", correct: "Choose" , explanation: "Choose chose chosen : elegir o escoger"},
    {word:"Choose chose "+placeholder+ ": elegir o escoger", correct: "chosen" , explanation: "Choose chose chosen : elegir o escoger"},
    {word:"El verbo Choose significa "+placeholder, correct: "elegir o escoger" , explanation: "Choose chose chosen : elegir o escoger"},

    {word:"Come "+placeholder+" come : venir", correct: "came" , explanation: "Come came come : venir"},
    {word:placeholder+" came come : venir", correct: "Come" , explanation: "Come came come : venir"},
    {word:"Come came "+placeholder+ ": venir", correct: "Come" , explanation: "Come came come : venir"},
    {word:"El verbo Come significa "+placeholder, correct: "venir" , explanation: "Come came come : venir"}


];

var options = main_options;



var maxAverage =15;
var availableOptions = 3;
var explanation = function(correct, wrong){
    return correct.explanation;
};