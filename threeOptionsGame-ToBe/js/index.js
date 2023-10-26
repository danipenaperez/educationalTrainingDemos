


var options =[
    {word:"I ... watching TV.", correct: "am"},
    {word:"You ... doing your homework", correct: "are", example: "Tu estas haciendo tus deberes"},
    {word:"It ... broken", correct: "is" , example: "Eso esta roto" },
    {word:"She ... listen to music", correct: "is" , example: "Ella esta escuchando musica"},
    {word:"He ... reading a book", correct: "is", example: "El esta leyendo un libro"},
    {word:"We ... going to museum TV", correct: "are", example: "Nosotros estamos yendo al museo"},
    {word:"You ... riding a horse", correct: "are", example: "Vosotros estais montando a caballo" },
    {word:"They ... playing chess", correct: "are", example: "Ellos estan jugando al ajedrez"}
];

//Buttons
var availableOptions = 2;
var successDivId;
var successOption;
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
    successOption = option;
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
    var currentText = $('#word').text();
    $('#example_success').text(successOption.example);

}
function resetResultStyles(){
    for(i=0;i<availableOptions;i++){
        $('#opt_'+i).removeClass('btn-danger');
        $('#opt_'+i).removeClass('btn-success');
        $('#opt_'+i).addClass('btn-primary');
    }
    $('#example_success').text("");
}
function setAverage(){
    $('#averageCounter').html(averageCounter);
    if(averageCounter==15)
     alert('Lo has conseguido avisa a tus papas!!!!');
}
fillInitlWithRandomValues();

// reload();