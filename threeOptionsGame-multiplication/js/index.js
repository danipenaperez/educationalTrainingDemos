



//Options must be loaded
//var optios = []
//var placeholder= "...";
//var maxAverage =15;



//Buttons

var successDivId;
var successOption={"word":"", correct:""};
var averageCounter=0;
var answerTextBoxId = 'answerUser';
var countDownTimeout;

function prepareMainBoard(){
    //Average Menu
    var averageTemplate = templates.getAverageHTMLTemplate();
    document.getElementById('maincontainer').innerHTML= averageTemplate + document.getElementById('maincontainer').innerHTML;
    
    //Prepare Button Options
    var buttons='';
    for(i=0;i<availableOptions;i++){
        buttons = buttons + templates.getOptionButtonHTMLTemplate('opt_'+i);
    }
    document.getElementById('optionsContainer').innerHTML = buttons;
}



prepareMainBoard();


function fillInitlWithRandomValues(excluded){
    resetResultStyles();
    setAverage();
    console.log("FILL INIT TIME--------------");
    if(!excluded)
        excluded =[];
    reload(excluded);
    
}
function getRandomItem(strategy, excluded){
    
    var candidateIndex ;
    if('excludedCorrectValues' == strategy){
        while (true) {
            candidateIndex = Math.floor(Math.random()*options.length);
            if (!excluded.includes(options[candidateIndex].correct)){
                break;
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
    var opt_index = getRandomItem('excludedCorrectValues', excluded);
    
    var option = options[opt_index];

    successOption = option;
    if(option.word!=null){
        document.getElementById('ask_content').innerHTML='<p id="ask" class="text-center h1">'+option.word+'</p>'; 
    }else if(option.image){
        document.getElementById('ask_content').innerHTML='<img id="ask" src="'+option.image+'" class="text-center" width="50%" height="50%"></img>'; 
    }

    //Input Text
    
    document.getElementById('optionsContainer').innerHTML = templates.getInputTextHTMLTemplate(answerTextBoxId);

    successDivId = Math.floor(Math.random()*availableOptions);
    
    $('#check_'+answerTextBoxId+'_Btn').off('click').click(function(e){
        e.preventDefault();
        checkResult();
    
    });




    countDownTimeout = window.setTimeout(function() {
        alert('!!Date mas prisa!!');
        // fillInitlWithRandomValues([]); //Excluded last success, not repeat 
        checkResult();
    }, 15 * 1000);
}


function checkResult(){
    if(countDownTimeout){
        clearTimeout(countDownTimeout);
    }
    var response = $('#'+answerTextBoxId).val().trim();
    if(successOption.correct == response){
        averageCounter=averageCounter+1;
        applyResultStyles('success');
        window.setTimeout(function() {
            fillInitlWithRandomValues([]); //Excluded last success, not repeat 
        }, 4 * 500);
    }else{
        averageCounter=0;
        applyResultStyles('failed');
    }
}

function applyResultStyles(status){
    if("success" == status){
        $("#maincontainer").addClass('success-opt').removeClass('test-word');
    }else{
        if(explanation)
            modal.show(explanation(successOption));
        $("#maincontainer").addClass('falied-opt').removeClass('test-word');
    }
}

function resetResultStyles(){
    $("#maincontainer").addClass('test-word').removeClass('success-opt').removeClass('falied-opt');
}
function setAverage(){
    $('#averageCounter').html(averageCounter);
    if(averageCounter==maxAverage){
        alert('Lo has conseguido avisa a tus papas!!!!');
        fillInitlWithRandomValues([]);
    }

}
fillInitlWithRandomValues();


function closedExplanationModal(){
    fillInitlWithRandomValues([]);
}