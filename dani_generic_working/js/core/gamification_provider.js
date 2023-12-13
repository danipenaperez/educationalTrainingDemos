var gamification_provider = {
    mediaFilesPathSucces:null,
    mediaFilesPathFail:null,
    modal:null,
    providerName: 'Ganon_',
    configure: function(args){
        this.mediaFilesPathSucces=args.mediaFilesPath+'/success';
        this.mediaFilesPathFail=args.mediaFilesPath+'/fail';
    },
    init: function(){
        var html = templates.getModalGamificationTemplate(this.providerName);
        document.body.innerHTML += html;
        //Configure modal
        this.modal =  Object.create(modal);
        this.modal.modalTitle= '#'+this.providerName+'LongTitle';
        this.modal.modalSelector= '#'+this.providerName+'Long';
        this.modal.contentSelector= '#'+this.providerName+'ModalContent';
        this.modal.current= 'hide';
        this.modal.currentCallBack=null;
    },

    onSuccess: function(average, callback){
        this.modal.show('<img src="'+this.mediaFilesPathSucces+'/'+ average+'.gif" style="max-width:350px;width:100%" ></img>', 
            "La furia de Martin", 
            function(){
                callback();
            }
        );
    },
    onFailed: function(average,callback){
        this.modal.show('<img src="'+this.mediaFilesPathFail+'/'+ average+'.gif" style="max-width:350px;width:100%"></img>', 
            "Perdedor", 
            function(){
                callback();
            }
        );
    },
    onFinish: function(){
        alert("lo has conseguido");
    }

}