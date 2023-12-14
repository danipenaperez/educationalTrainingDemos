var templates = {};

templates.getAverageHTMLTemplate = function (){
    return '<div id="game_menu" class="float-right">'+
            'Racha: '+
            '<div id="averageCounter">0</div>'+
            '</div>';
}


templates.getOptionButtonHTMLTemplate = function (id){
    
    var content =  '<div class="col h-100 btn-group d-flex">'+
            '<button id="'+id+'" type="button" class="btn btn-default w-100 btn-primary"  >Left</button>'+
            '</div>';
    return content;
            // var template = document.createElement('template');
    // let html = content.trim(); // Never return a text node of whitespace as the result
    // template.innerHTML = html;
    // return template.content.firstChild;
}

templates.getInputNumberHTMLTemplate = function (id){
    
        var content =  '<div class="form-group mb-3">'+
                '<label for="'+id+'" class="form-label">Tu Respuesta:</label>'+
                '<input type="number" class="form-control" id="'+id+'"></input>'+
                // '</div>'+
                // '<div class="mb-3">'+
                '<button id="check_'+id+'_Btn" type="button" class="btn btn-default btn-primary" style="padding-top: 5;margin-top: 5px;" >Comprobar</button>'+
                '<p id="example_success" class="text-center h1"></p>' +
                '</div>';
        return content;
        
}

/**
 * Create a input text object
 * @param {*} id 
 * @param {*} options 
 * @returns 
 */
templates.createInputText = function(id, options){
        var inputObject = document.createElement("INPUT");
        inputObject.setAttribute("type", "text");
        inputObject.setAttribute("id", "inputText_"+id);
         inputObject.setAttribute("class", "form-control");
        return inputObject;
}
/**
 * Based on https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement/Option
 * @param {*} options 
 * @returns 
 */
templates.createSelect = function(id, options){
        //Create and append select list
        var selectList = document.createElement("select");
        selectList.setAttribute("id", "inputText_"+id);//old  selectList.id = id;
        // selectList.setAttribute("class", "form-select");
        // myParent.appendChild(selectList);

        //Create and append the options
        for (var i = 0; i < options.length; i++) {
                var option = document.createElement("option");
                option.value = options[i];
                option.text = options[i];
                selectList.appendChild(option);
        }
        
        return selectList;
            
}
/**
 * Create Default Check Result Button
 * @param {*} id 
 * @param {*} text 
 * @param {*} callback 
 * @returns 
 */
templates.createCheckResultsButton = function(id, text, callback){
        var button = document.createElement('button');
        button.id=id;
        button.innerHTML = text?text:'Comprobar';
        button.setAttribute("class", "btn btn-primary btn-lg btn-block");
        button.onclick = function(e){
            e.preventDefault();
            callback();
            return false;
        };  
        return button;  
}

templates.getInputTextHTMLTemplate = function (id){
    
        var content =  '<div class="form-group mb-3" id="id">'+
                // '<label for="'+id+'" class="form-label">Tu Respuesta:</label>'+
                '<input type="text" class="form-control" id="'+id+'"></input>'+
                // '</div>'+
                // '<div class="mb-3">'+
                // '<button id="check_'+id+'_Btn" type="button" class="btn btn-default btn-primary" style="padding-top: 5;margin-top: 5px;" >Comprobar</button>'+
                // '<p id="example_success" class="text-center h1"></p>' +
                '</div>';
        return content;
        
}


templates.getModalGamificationTemplate = function (id){
    
        var content =  '<div class="modal fade" id="'+id+'Long" tabindex="-1" role="dialog" aria-labelledby="'+id+'LongTitle" aria-hidden="true">'+
        '<div class="modal-dialog" role="document">'+
        '<div class="modal-content">'+
        '   <div class="modal-header">'+
        '     <h5 class="modal-title" id="'+id+'LongTitle">Modal title</h5>'+
        '     <button id="'+id+'modalCloseButtonTop" onclick="currentGame.gamificationManager.modal.onCloseModal()" type="button" class="close" data-dismiss="modal" aria-label="Close">'+
        '       <span aria-hidden="true">&times;</span>'+
        '     </button>'+
        '   </div>'+
        '   <div id="'+id+'ModalContent" class="modal-body">'+
        '     ... Los numeros son asi ii'+
        '   </div>'+
        '   <div class="modal-footer">'+
        '     <button id="'+id+'modalCloseButtonDown" onclick="currentGame.gamificationManager.modal.onCloseModal()"  type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
        '   </div>'+
        '  </div>'+
        '</div>'+
        '</div>';
        return content;
        
}
