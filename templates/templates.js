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

templates.getInputTextHTMLTemplate = function (id){
    
        var content =  '<div class="form-group mb-3">'+
                '<label for="'+id+'" class="form-label">Tu Respuesta:</label>'+
                '<input type="text" class="form-control" id="'+id+'"></input>'+
                // '</div>'+
                // '<div class="mb-3">'+
                '<button id="check_'+id+'_Btn" type="button" class="btn btn-default btn-primary" style="padding-top: 5;margin-top: 5px;" >Comprobar</button>'+
                '</div>';
        return content;
        
}
