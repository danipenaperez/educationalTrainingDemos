

var options =[
    {word:"active", correct: "activo"},
    {word:"clever", correct: "inteligente"},
    {word:"funny", correct: "divertido"},
    {word:"kind", correct: "amable"},
    {word:"messy", correct: "desordenado"},
    {word:"naughty", correct: "travieso"},
    {word:"outgoing", correct: "extrovertido"},
    {word:"serious", correct: "serio"},
    {word:"shy", correct: "timido"},
    {word:"tidy", correct: "ordenado"}
    
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
            }, 4 * 1000);
            
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
        }, 4 * 1000);
    
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