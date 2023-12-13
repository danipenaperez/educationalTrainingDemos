var modal ={
    modalTitle: '#explanationModalLongTitle',
    modalSelector: '#explanationModalLong',
    contentSelector: '#explanationModalContent',
    current: 'hide',
    show: function(content, title){
        if(title)
            $(this.modalTitle).html(title);

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