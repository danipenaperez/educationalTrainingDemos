

var options =[
    {word:"body-building food", correct: "alimentos constructores"},
    {word:"diet", correct: "dieta"},
    {word:"energy food", correct: "comida energetica"},
    {word:"exercise", correct: "ejercicio"},
    {word:"food", correct: "comida"},
    {word:"food groups", correct: "grupos de alimentos"},
    {word:"health", correct: "salud"},
    {word:"healthy food", correct: "comida saludable"},
    {word:"healthy habits", correct: "habitos saludables"},
    {word:"medical check-up", correct: "revision medica"},
    {word:"mental health (control emotions)", correct: "salud mental"},
    {word:"physical health", correct: "salud fisica"},
    {word:"posture", correct: "postura corporal"},
    {word:"processed food", correct: "comida procesada"},
    {word:"sugar", correct: "azucar (comida procesada)"},
    {word:"natural food (no extra ingredients, not processed)", correct: "comida natural"},
    {word:"pulses", correct: "legumbres"},
    {word:"vaccination", correct: "vacuna"},
    {word:"vegetable oil", correct: "aceite vegetal"},
    {word:"oil", correct: "aceite"},
    {word:"wholegrain food", correct: "alimentos integrales"}
    
];

//Buttons
var availableOptions = 3;
var successDivId;
var averageCounter=0;

function fillInitlWithRandomValues(excluded){
    resetResultStyles();
    setAverage();
    if(!excluded)
        excluded =[];
    
    for(i=0;i<availableOptions;i++){
        var index = getRandomItem(excluded);
        excluded.push(index);
        
        var opt = options[index];
        $('#opt_'+i).text(opt.correct);
        $('#opt_'+i).off('click').click(function(e){
            e.preventDefault();
            applyResultStyles();
            averageCounter=0;
            window.setTimeout(function() {
                fillInitlWithRandomValues();
            }, 3 * 1000);
            
        });
    }
    reload(excluded);
    
}
function getRandomItem(excludedIndexs){
    var candidate ;
    while (true) {
        var candidate = Math.floor(Math.random()*options.length);
        if (!excludedIndexs.includes(candidate)){
            break;
        }
    }
    return candidate;
}
function reload(excluded){
    
    var opt_index = getRandomItem(excluded);
    var option = options[opt_index];
    $('#word').text(option.word);

    successDivId = Math.floor(Math.random()*availableOptions);
    
    // alert(optOkSucess + " "+ option);
    $('#opt_'+successDivId).text(option.correct);
    $('#opt_'+successDivId).off('click').click(function(e){
        e.preventDefault();
        applyResultStyles();
        averageCounter=averageCounter+1;
        window.setTimeout(function() {
            fillInitlWithRandomValues([opt_index]); //Excluded last success, not repeat 
        }, 2 * 1000);
    
    });

    $('#opt_'+successDivId).removeClass('highlight');

}


function applyResultStyles(){
    for(i=0;i<availableOptions;i++){
        if(i!=successDivId){
            $('#opt_'+i).removeClass('btn-primary');
            $('#opt_'+i).removeClass('btn-success');
            $('#opt_'+i).addClass('btn-danger');
        }else{
            $('#opt_'+i).removeClass('btn-danger');
            $('#opt_'+i).removeClass('btn-primary');
            $('#opt_'+i).addClass('btn-success');
        }
        
    }

}
function resetResultStyles(){
    for(i=0;i<availableOptions;i++){
        $('#opt_'+i).removeClass('btn-danger');
        $('#opt_'+i).removeClass('btn-success');
        $('#opt_'+i).addClass('btn-primary');
    }
}
function setAverage(){
    $('#averageCounter').html(averageCounter);
    if(averageCounter==15)
     alert('Lo has conseguido avisa a tus papas!!!!');
}

fillInitlWithRandomValues();

// reload();