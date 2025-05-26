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
/**
 * Import dinamically a js or css file
 * @param {*} filename 
 * @param {*} filetype 
 */
function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
    } else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }

    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref);
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

/**
 * Shuffle an reorder an array
 * @param {*} array 
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomElementFromArray(array) { // min and max included 
  let randomIndex = randomIntFromInterval(0, array.length-1);
  return array[randomIndex];
}

/**
 * Add style class to element
 * @param {*} element 
 * @param {*} className 
 * @returns 
 */
function addClass (element, className) {
    if (element.classList) {
      return element.classList.add(className)
    } else {
      element.className += ' ' + className
    }
  }

/**
 * Remove style class from element
 * @param {*} element 
 * @param {*} className 
 * @returns 
 */
function removeClass (element, className) {
    if (element.classList) {
      return element.classList.remove(className)
    } else {
      element.className = element.className.replace(new RegExp(className + ' *', 'g'), '')
    }
  }