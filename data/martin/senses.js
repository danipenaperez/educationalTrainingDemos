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
    {word:"Sense organs send information to the "+placeholder+" system.", correct: "nervous" },
    {word:"The nerve cells are called "+placeholder+" .", correct: "neurons" },
    {word:"[NEURONS] The neurons have three parts "+placeholder+ "  dendrites and axon", correct: "body" },
    {word:"[NEURONS] The neurons have three parts body ,"+placeholder+ " and axon", correct: "dendrites" },
    {word:"[NEURONS] The neurons have three parts body , dendrites and "+placeholder, correct: "axon" },
    {word:"The "+placeholder+" are small extensions of the neuron.", correct: "dendrites" },
    {word:"The "+placeholder+" is the long part of the neuron.", correct: "axon" },
    {word:"The nervous system has two parts: Central nervous system and "+placeholder+" nervous system.", correct: "peripheral" },
    {word:"The central nervous system consist of the brain and the "+placeholder+".", correct: "spinal cord" },
    {word:"The peripherial nervous system is made up of  "+placeholder+".", correct: "nerves" },
    {word:"[BRAIN] The brain has 3 parts: "+placeholder+", cerebellum and "+placeholder, correct: "Cerebrum" },
    {word:"[BRAIN] The brain has 3 parts: Cerebrum, cerebellum and "+placeholder, correct: "brainstem" },
    {word:"[BRAIN] The brain has 3 parts: Cerebrum, "+placeholder+" and "+placeholder, correct: "cerebellum" },
    {word:"[EYES (Vista)] The light enter throught the "+placeholder+" lent.", correct: "cornea" },
    {word:"[EYES (Vista)] The light enter throught the "+placeholder+" then the light pass throught the pupil and the retina detects the light and optic nerve send information to the brain .", correct: "cornea" },
    {word:"[EYES (Vista)] The light enter throught the cornea them the light pass throught the "+placeholder+" and the retina detects the light and optic nerve send information to the brain .", correct: "pupil" },
    {word:"[EYES (Vista)] The light enter throught the cornea them the light pass throught the pupil and the "+placeholder+" detects the light and optic nerve send information to the brain .", correct: "retina" },
    {word:"[EYES (Vista)] The light enter throught the cornea them the light pass throught the pupil and the retina detects the light and "+placeholder+" nerve send information to the brain .", correct: "optic" },
    {word:"[EYES (Vista)] nerve sense send information to the "+placeholder, correct: "brain" },
    {word:"[EAR (oido)] The "+placeholder+" vibrates and send to the brain", correct: "cochlea" },
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