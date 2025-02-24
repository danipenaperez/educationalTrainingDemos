/**
 * store checkbox value to hidden div.
 * if(check unchecked, remove value)
 * @param {*} check 
 */
function storeCheckValueToDiv(check){
    var current = document.getElementById('selectResult').innerHTML;
    if(check.checked){
        current = current+check.value;
    }else{
        current = current.replace(check.value,'');
    }
    document.getElementById('selectResult').innerHTML=current;
}


/**
 * Used to fetch content from other files. 
 * Synch blocking execution
 * @param {*} url 
 * @param {*} callback 
 */
function fetchRemoteContent(url, callback){
    var response = '';
    $.ajax({ type: "GET",   
             url: url,   
             async: false,
             success : function(text)
             {
                 response = text;
                 callback(text);
             }
    });
    
   //sync success alert(response);
}


var answerOneTimeQuestion ;
var answerOneTimeQuestion_callback;
function storeOneTimeQuestion(question, callback){
    answerOneTimeQuestion=question;
    answerOneTimeQuestion_callback=callback;
}

function checkOneTimeQuestion(_answerOneTimeValue, imageMapDiv){
    answerOneTimeQuestion_callback(answerOneTimeQuestion.correctAnswer ==_answerOneTimeValue);
}