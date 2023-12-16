var modal ={
    id:null,
    modalTitle: null,
    modalSelector: null,
    contentSelector: null,
    current: 'hide',
    currentCallBack:null,
    show: function(content, title, next){
        if(title)
            $(this.modalTitle).html(title);
        
        this.currentCallBack=next;
        if(content)
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
        $('#'+this.id+'Long').modal('hide');
        $(document.body).removeClass('modal-open');
        $('.modal-backdrop').remove();

        
        if(this.currentCallBack)
            this.currentCallBack();
        else
            alert("No hay definico callback on close");

        // $(".modal").on('hide.bs.modal', function (e) {
        //     $(document.body).removeClass('modal-open');
        //     $('.modal-backdrop').remove();
        // });

    }

}