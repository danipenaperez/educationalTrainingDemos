var login_provider = {
    modal:null,
    loginModalName: 'loginModal',
    userName: '',
    onLoginCallBack:null,
    configure: function(args){
        this.userName=args.userName;
    },
    init: function(args){
        var html = templates.getModalLoginTemplate(this.loginModalName);
        document.body.innerHTML += html;
        //Configure modal
        this.modal =  Object.create(modal);
        this.modal.id= this.loginModalName;
        this.modal.modalTitle= '#'+this.loginModalName+'LongTitle';
        this.modal.modalSelector= '#'+this.loginModalName+'Long';
        this.modal.contentSelector= '#'+this.loginModalName+'ModalContent';
        this.modal.current= 'hide';
        this.onLoginCallBack =args.onLoginCallBack;
        this.onstart(null);
    },

    onstart: function( callback){
        this.modal.show(null, 
            "!!! LOGIN!!!", 
            function(){
                alert("gracias por hacer login");
            }
        );
    },
    onLogin: function(gameName){
        let userName = document.getElementById('loginName').value;
        this.modal.destroy();
        this.onLoginCallBack({userName:userName, gameName:gameName});
    },
    onFinish: function(){
        alert("lo has conseguido");
    }

}