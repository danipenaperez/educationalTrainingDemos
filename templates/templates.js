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


