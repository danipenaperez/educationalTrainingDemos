var modal ={
    modalTitle: '#explanationModalLongTitle',
    modalSelector: '#explanationModalLong',
    contentSelector: '#explanationModalContent',
    current: 'hide',
    currentCallBack:null,
    show: function(content, title, next){
        if(title)
            $(this.modalTitle).html(title);
        
        this.currentCallBack=next;

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

    },
    onCloseModal:function(){
        if(this.currentCallBack)
            this.currentCallBack();
        else
            alert("No hay definico callback on close");
    }

}