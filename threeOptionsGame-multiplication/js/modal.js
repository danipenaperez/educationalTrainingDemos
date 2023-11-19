var modal ={
    modalSelector: '#explanationModalLong',
    contentSelector: '#explanationModalContent',
    current: 'hide',
    show: function(content){
        $(this.contentSelector).html(content);
        $(this.modalSelector).modal('show');
        
    },
    hide: function(){
        $(this.modalSelector).modal('hide');
        
    },
    toogle: function(){
        $(this.modalSelector).modal('toggle');
        
    },
    init: function(content){
        $(this.contentSelector).html(content);

    }
}