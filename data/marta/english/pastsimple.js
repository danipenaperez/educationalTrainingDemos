var placeholder= "...";


var table2= "2"




var main_options = [
    {word:"¿Que significa el verbo arrive?", correct: "llegar" , explanation: "<strong>Arrive</strong> significa <br><strong>Llegar</strong>"},
    {word:"¿Que significa el verbo to be?", correct: "ser o estar", explanation: "<strong>to be</strong> puede significar <br><strong>Ser</strong> o <strong>Estar</strong>"},
    {word:"¿Que significa el verbo find?", correct: "encontrar", explanation: "<strong>Find</strong> significa <br><strong>Encontrar</strong>"},
    {word:"¿Que significa el verbo live?", correct: "vivir", explanation: "<strong>Live</strong> significa <br><strong>vivir</strong>" },
    {word:"¿Que significa el verbo sail?", correct: "navegar", explanation: "<strong>Sail</strong> significa <br><strong>Navegar</strong>" },
    {word:"¿Que significa el verbo start?", correct: "empezar", explanation: "<strong>Start</strong> significa <br><strong>Empezar</strong>" },
    {word:"Find significa encontrar, pero ¿como se escribe find en pasado?", correct: "found", explanation: "<strong>Find</strong> significa encontrar y se escribe en pasado <br><strong>Found</strong>" }

];

var options = main_options;



var maxAverage =15;
var availableOptions = 3;
var explanation = function(correct, wrong){
    return correct.explanation;
};