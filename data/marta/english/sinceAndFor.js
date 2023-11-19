var placeholder= "...";


var table2= "2"


var options = [
    {word:"I have been living in Guadarrama "+placeholder+" 2019.", correct: "since (desde)", explanation: " He estado viviendo en guadarrama desde 2019"},
    {word:"We have been playing football "+placeholder+" 2 hours.", correct: "for (durante)", explanation: "Nosotros hemos estado jugando al fubtol durante 2 horas."},
    {word:"I have been waiting at the bus stop "+placeholder+" ten minutes", correct: "for (durante)", explanation: "He estado esperando el autobus durante 10 minutos."},
    {word:"I have been waiting at the bus stop "+placeholder+" 9:30am", correct: "since (desde)", explanation: "He estado esperando el autobus desde las 9:30 "},
    {word:"I have lived in this country "+placeholder+" five years", correct: "for (durante)", explanation: "HE vivido en este pais durante 5 años"},
    {word:"They played tennis "+placeholder+" five hours today", correct: "for (durante)", explanation: "Ellos han estado jugando al tenis durante 5 horas hoy."},
    {word:"Sally has been sleeping "+placeholder+" 8 hours", correct: "for (durante)", explanation: "Sally ha estado durmiendo desde ayer a las 8 "},
    {word:"I have been living in Japan "+placeholder+" 1990", correct: "since (desde)", explanation: "Sally ha estado durmiendo desde ayer a las 8 "},
    {word:"Liam has been playing tennis "+placeholder+" 10 hours", correct: "for (durante)", explanation: "Liam ha estado jugando al tenis durante 10 horas. "}
    

    
    
];
var maxAverage =15;
var availableOptions = 2;
var explanation = function(correct, wrong){
    let currentTable = options;
    let expla = "";
    //currentTable.forEach(entry=> expla = expla + "<br/> "+ entry.correct+ " = "+ entry.explanation);

    expla = successOption.word.replaceAll(placeholder, successOption.correct) ;
    return expla;
};