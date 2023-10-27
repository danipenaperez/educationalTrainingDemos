



//Options must be loaded
//var optios = []
//var placeholder= "...";
//var maxAverage =15;



//Buttons
var availableOptions = 2;
var successDivId;
var successOption={"word":"", correct:""};
var averageCounter=0;


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
        $('#opt_'+i).off('click').click(function(e){
            e.preventDefault();
            applyResultStyles('failed');
            averageCounter=0;
            window.setTimeout(function() {
                fillInitlWithRandomValues();
            }, 5 * 500);
            
        });
    }


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
    $('#word').text(option.word);

    successDivId = Math.floor(Math.random()*availableOptions);
    
    $('#opt_'+successDivId).text(option.correct);
    $('#opt_'+successDivId).off('click').click(function(e){
        e.preventDefault();
        applyResultStyles('success');
        averageCounter=averageCounter+1;
        window.setTimeout(function() {
            fillInitlWithRandomValues([]); //Excluded last success, not repeat 
        }, 5 * 500);
    
    });

    $('#opt_'+successDivId).removeClass('highlight');

}


function applyResultStyles(status){
    if("success" == status){
        alert("suces");
        $("#maincontainer").addClass('test-word').removeClass('test-word-failed');
        $("#word_content_example").addClass('test-examples').removeClass('test-examples-failed');
    }else{
        alert("failed");
        $("#maincontainer").addClass('test-word-failed').removeClass('test-word');
        $("#word_content_example").addClass('test-examples-failed').removeClass('test-examples');
    }

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
    $("#maincontainer").addClass('test-word').removeClass('test-word-failed');
    $("#word_content_example").addClass('test-examples').removeClass('test-examples-failed');
    
    $('#example_success').text("");
    
}
function setAverage(){
    $('#averageCounter').html(averageCounter);
    if(averageCounter==maxAverage){
        alert('Lo has conseguido avisa a tus papas!!!!');
        fillInitlWithRandomValues([]);
    }

}
fillInitlWithRandomValues();

