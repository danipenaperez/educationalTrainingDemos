// var modulea = require('./js/modulea');
// console.log('soy yo');
// console.log(modulea);

$('#opt_1').click(function(){
    alert("Fallo");
});
$('#opt_2').click(function(){
    alert("Fallo");
});
$('#opt_3').click(function(){
    alert("fallo");
});


var options =[
    {word:"I", correct: "Yo"},
    {word:"You", correct: "Tu o Vosotros"},
    {word:"It", correct: "Eso"},
    {word:"She", correct: "Ella"},
    {word:"He", correct: "El"},
    {word:"We", correct: "Nosotros"},
    {word:"They", correct: "Ellos"}
    
];

//Buttons
var availableOptions = 3;
var successDivId;

function fillInitlWithRandomValues(excluded){
    resetResultStyles();
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
            window.setTimeout(function() {
                fillInitlWithRandomValues();
            }, 5 * 500);
            
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
        
        window.setTimeout(function() {
            fillInitlWithRandomValues([opt_index]); //Excluded last success, not repeat 
        }, 5 * 1000);
    
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

fillInitlWithRandomValues();

// reload();