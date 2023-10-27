

var placeholder= "...";

var options =[
    {word:"I "+placeholder+" watching TV.", correct: "am", example: "Yo estoy viendo la tele."},
    {word:"You "+placeholder+" doing your homework", correct: "are", example: "Tu estas haciendo tus deberes"},
    {word:"It "+placeholder+" broken", correct: "is" , example: "Eso esta roto" },
    {word:"She "+placeholder+" listening to music", correct: "is" , example: "Ella esta escuchando musica"},
    {word:"He "+placeholder+" reading a book", correct: "is", example: "El esta leyendo un libro"},
    {word:"We "+placeholder+" going to the museum.", correct: "are", example: "Nosotros estamos yendo al museo"},
    {word:"You "+placeholder+" riding a horse", correct: "are", example: "Vosotros estais montando a caballo" },
    {word:"They "+placeholder+" playing chess", correct: "are", example: "Ellos estan jugando al ajedrez"},

    {word:"I "+placeholder+" swimming.", correct: "am", example: "Yo estoy nadando."},
    {word:"You "+placeholder+" reading a book", correct: "are", example: "Tu estas leyendo un libro"},
    {word:"It "+placeholder+" broken", correct: "is" , example: "Eso esta roto" },
    {word:"She "+placeholder+" playing chess", correct: "is" , example: "Ella esta jugando al ajedrez"},
    {word:"Daniel "+placeholder+" reading a book", correct: "is", example: "Daniel esta leyendo un libro"},
    {word:"Martin and me "+placeholder+" riding a horse", correct: "are", example: "Martin y yo estamos montado a caballo"},
    {word:"You "+placeholder+" going to the museum ", correct: "are", example: "Vosotros estais yendo al museo" },
    {word:"Maria and Luis "+placeholder+" playing chess", correct: "are", example: "Maria y luis estan jugando al ajedrez"},

    {word:"I "+placeholder+" playing chess.", correct: "am", example: "Yo estoy jugando al ajedrez."},
    {word:"I "+placeholder+" going to the museum .", correct: "am", example: "Yo estoy yendo al museo."},
    {word:"I "+placeholder+" riding a horse.", correct: "am", example: "Yo estoy montado a caballo."},

    {word:"Maria and me "+placeholder+" playing chess", correct: "are", example: "Maria y yo estamos jugando al ajedrez"}
];




//Buttons
var availableOptions = 2;
var successDivId;
var successOption={"word":"", correct:""};
var averageCounter=0;
var discatedRepeatedValues =[];

function fillInitlWithRandomValues(excluded){
    resetResultStyles();
    setAverage();
    console.log("FILL INIT TIME--------------");
    if(!excluded)
        excluded =[];
    
       console.log("fillInit with "+ JSON.stringify(excluded));
    

    for(i=0;i<availableOptions;i++){
        var index = getRandomItem('excludedCorrectValues', excluded);
        excluded.push(options[index].correct);
        
        var opt = options[index];
        

        $('#opt_'+i).text(opt.correct);
        // alert("he sete ado "+opt.correct+ " en la casilla opt"+i+ "?");
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
function getRandomItem(strategy, excluded){
    console.log('entro en random item '+ strategy+ " "+ JSON.stringify(excluded));
    var candidateIndex ;
    if('excludedCorrectValues' == strategy){
        console.log('ecluded '+ JSON.stringify(excluded));
        while (true) {
            candidateIndex = Math.floor(Math.random()*options.length);
            if (!excluded.includes(options[candidateIndex].correct)){
                console.log('aceptado '+options[candidateIndex].correct+ " no existe en " + JSON.stringify(excluded));
                break;
            }else{
                console.log('sigo buscando porque ya contiene '+options[candidateIndex].correct+ " " + excluded.includes(options[candidateIndex].correct));
            }
        }
    }else if('excludedIndex' == strategy){
        while (true) {
            candidateIndex = Math.floor(Math.random()*options.length);
            if (!excluded.includes(candidateIndex)){
                break;
            }
        }
    }else{
        while (true) {
            candidateIndex = Math.floor(Math.random()*options.length);
            if (!excluded.includes(candidateIndex)){
                break;
            }
        }
    }
    return candidateIndex;
}





function reload(excluded){
    console.log("RELOAD TIME--------------");
    var opt_index = getRandomItem('excludedCorrectValues', excluded);
    
    var option = options[opt_index];

    // if(successOption && (option.correct == successOption.correct)){ //Avoid repeated
    //     fillInitlWithRandomValues([]);
    // }else{
    //     console.log("aceptado porque "+option.correct + " != "+successOption.correct+ " son distintas");
    // }

    successOption = option;
    $('#word').text(option.word);

    successDivId = Math.floor(Math.random()*availableOptions);
    // if(successDivId==0)
    //     successDivId=1;

    // alert(option.correct + "   "+ JSON.stringify(discatedRepeatedValues));
    // if(discatedRepeatedValues.includes(option.correct)){
    //     fillInitlWithRandomValues([]); 
    // }else{
    //    alert('No reseteo porque '+option.correct + "  no esta en  "+ JSON.stringify(discatedRepeatedValues)+ " y lo voy a poner en "+successDivId);
    // }

    // alert(optOkSucess + " "+ option);
    
    $('#opt_'+successDivId).text(option.correct);
    $('#opt_'+successDivId).off('click').click(function(e){
        e.preventDefault();
        applyResultStyles();
        averageCounter=averageCounter+1;
        window.setTimeout(function() {
            fillInitlWithRandomValues([]); //Excluded last success, not repeat 
        }, 5 * 500);
    
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
    var sentenceIncomplete = $('#word').text();
    $('#word').text(sentenceIncomplete.replaceAll(placeholder, successOption.correct));

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