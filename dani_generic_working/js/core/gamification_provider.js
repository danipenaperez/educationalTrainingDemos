var gamification_provider = {
    mediaFilesPathSucces:null,
    mediaFilesPathFail:null,
    modal:null,
    providerName: 'Ganon_',
    userName: '',
    configure: function(args){
        this.mediaFilesPathSucces=args.mediaFilesPath+'/success';
        this.mediaFilesPathFail=args.mediaFilesPath+'/fail';
        this.userName=args.userName;
    },
    init: function(){
        var html = templates.getModalGamificationTemplate(this.providerName);
        document.body.innerHTML += html;
        //Configure modal
        this.modal =  Object.create(modal);
        this.modal.id= this.providerName;
        this.modal.modalTitle= '#'+this.providerName+'LongTitle';
        this.modal.modalSelector= '#'+this.providerName+'Long';
        this.modal.contentSelector= '#'+this.providerName+'ModalContent';
        this.modal.current= 'hide';
        this.modal.currentCallBack=null;
    },

    onSuccess: function(average, callback){
        this.modal.show('<img src="'+this.mediaFilesPathSucces+'/'+ average+'.gif" style="max-width:350px;width:100%" ></img>', 
            "!!! La furia de "+this.userName + "!!!", 
            function(){
                callback();
            }
        );
    },
    onFailed: function(average,callback){
        this.modal.show('<img src="'+this.mediaFilesPathFail+'/'+ average+'.gif" style="max-width:350px;width:100%"></img>', 
            this.userName+ " eres un perdedor!!!", 
            function(){
                callback();
            }
        );
    },
    onFinish: function(){
        alert("lo has conseguido");
    }

}