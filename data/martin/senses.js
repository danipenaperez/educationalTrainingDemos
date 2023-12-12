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
    {word:"Sensitivity is our hability to detect and respond to changes in our environment. These changes are called  "+placeholder, correct: "external stimuli" },
    {word:"There are 3 organs and systems: Sense Organs , Nervous System and "+placeholder , correct: "Skeletal and muscular Systems" },
    {word:"Sense organs contains send informatio to the "+placeholder+" system.", correct: "nervous" },
    {word:"Our muscles respond by "+placeholder+" our body .", correct: "moving" },
    {word:"The nerve cells are called "+placeholder+" .", correct: "neurons" },
    {word:"The neurons body contains the nucleus and "+placeholder, correct: "organelles" },
    {word:"The "+placeholder+" are small extensions of the neuron.", correct: "dentrites" },
    {word:"The "+placeholder+" is the long part of the neuron.", correct: "axon" },
    {word:"The nervous system has two parts: Central nervous system and "+placeholder+" nervous system.", correct: "peripheral" },
    {word:"The central nervous system con sist of the brain and the "+placeholder+".", correct: "spinal cord" },
    {word:"The peripherial nervous system is made up of  "+placeholder+".", correct: "nerves" },
    {word:"The brain has 3 parts: Cerebrum, cerebellum and "+placeholder, correct: "brainstem" },
    {word:"[EYES (Vista)] The light enter throught the "+placeholder+" lent.", correct: "cornea" },
    {word:"[EYES (Vista)] nerve sense send information to the "+placeholder, correct: "brain" },
    {word:"[EAR (oido)] The "+placeholder+" detects the vibrations and send to the brain", correct: "cochlea" },
    {word:"[EAR (oido)] There "+placeholder+" is a thin membrane", correct: "eardrum" },
    {word:"[TASTE (tacto)] The "+placeholder+ " is our sense organ touch.", correct: "skin" },
    {word:"[TASTE (tacto)] A sweet taste is "+placeholder, correct: "cake" },
    {word:"[TASTE (tacto)] A salty taste is "+placeholder, correct: "chips" },
    {word:"[TASTE (tacto)] A sour taste is "+placeholder, correct: "lemon" },
    {word:"[TASTE (tacto)] A bitter taste is "+placeholder, correct: "coffe" },
    {word:"[SMELL (Olfato)] nerve sense send information to the "+placeholder, correct: "brain" },
    {word:"[SMELL (Olfato)] air passes trought the nose then "+placeholder + " receptos send information to the olfatory nerve." , correct: "epicelium" }

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