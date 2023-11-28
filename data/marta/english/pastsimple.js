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
    {word:"¿Que significa el verbo arrive?", correct: "llegar" , explanation: "<strong>Arrive</strong> significa <br><strong>Llegar</strong>"},
    {word:"¿Que significa el verbo to be?", correct: "ser o estar", explanation: "<strong>to be</strong> puede significar <br><strong>Ser</strong> o <strong>Estar</strong>"},
    {word:"¿Que significa el verbo find?", correct: "encontrar", explanation: "<strong>Find</strong> significa <br><strong>Encontrar</strong>"},
    {word:"¿Que significa el verbo live?", correct: "vivir", explanation: "<strong>Live</strong> significa <br><strong>vivir</strong>" },
    {word:"¿Que significa el verbo sail?", correct: "navegar", explanation: "<strong>Sail</strong> significa <br><strong>Navegar</strong>" },
    {word:"¿Que significa el verbo start?", correct: "empezar", explanation: "<strong>Start</strong> significa <br><strong>Empezar</strong>" },
    {word:"<strong>Find</strong> significa encontrar, pero ¿como se escribe find en pasado?", correct: "found", explanation: "<strong>Find</strong> significa encontrar y se escribe en pasado <br><strong>Found</strong>" + pastVerbsResumen},
    {word:"<strong>Arrive</strong> significa llegar, pero ¿como se escribe Arrive en pasado? (Es un verbo regular)", correct: "arrived", explanation: "<strong>Arrive</strong> significa llegar y se escribe en pasado <br><strong>Arrived</strong>" + pastVerbsResumen },
    {word:"<strong>Live</strong> significa vivir, pero ¿como se escribe Live en pasado? (Es un verbo regular)", correct: "lived", explanation: "<strong>Live</strong> significa vivir y se escribe en pasado <br><strong>Lived</strong>"+ pastVerbsResumen },
    {word:"<strong>Sail</strong> significa navegar, pero ¿como se escribe Sail en pasado? (Es un verbo regular)", correct: "sailed", explanation: "<strong>Sail</strong> significa navegar y se escribe en pasado <br><strong>Sailed</strong>"+ pastVerbsResumen },
    {word:"<strong>Start</strong> significa empezar, pero ¿como se escribe Start en pasado? (Es un verbo regular)", correct: "started", explanation: "<strong>Started</strong> significa empezar y se escribe en pasado <br><strong>Started</strong>"+ pastVerbsResumen }

];

var options = main_options;



var maxAverage =15;
var availableOptions = 3;
var explanation = function(correct, wrong){
    return correct.explanation;
};