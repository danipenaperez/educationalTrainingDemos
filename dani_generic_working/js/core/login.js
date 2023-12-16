var login_provider = {
    modal:null,
    loginModalName: 'loginModal',
    userName: '',
    configure: function(args){
        this.userName=args.userName;
    },
    init: function(){
        var html = templates.getModalLoginTemplate(this.loginModalName);
        document.body.innerHTML += html;
        //Configure modal
        this.modal =  Object.create(modal);
        this.modal.id= this.loginModalName;
        this.modal.modalTitle= '#'+this.loginModalName+'LongTitle';
        this.modal.modalSelector= '#'+this.loginModalName+'Long';
        this.modal.contentSelector= '#'+this.loginModalName+'ModalContent';
        this.modal.current= 'hide';
        this.modal.currentCallBack=null;
        this.onstart(null);
    },

    onstart: function( callback){
        this.modal.show(null, 
            "!!! LOGIN!!!", 
            function(){
                alert("gracias por hacer login")
            }
        );
    },
    onLogin: function(gameName){
        alert('has elegido '+gameName + " "+ $('#loginName').val());
        console.log(document.getElementById('loginName'));
        let userName = document.getElementById('loginName').value;
        alert('has elegido '+userName);
    },
    onFinish: function(){
        alert("lo has conseguido");
    }

}