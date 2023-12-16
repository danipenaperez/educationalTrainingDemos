var gamification_provider = {
    mediaFilesPathSucces:null,
    mediaFilesPathFail:null,
    gameName:null,
    modal:null,
    providerName: 'Ganon_',
    userName: '',
    configure: function(args){
        this.gameName=args.gameName;
        this.mediaFilesPathSucces='images/games/'+args.gameName+'/success';
        this.mediaFilesPathFail='images/games/'+args.gameName+'/fail';
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
        let candidateIndex = Math.floor(Math.random()*6)+1;
        let currentPhrase;
        if(this.gameName =='zelda'){
            var phrases = [
                'La furia de '+this.userName,
                this.userName + " acabará contigo!!",
                "!!TODOPODEROSO "+this.userName+ " !!",
                "EL BIEN ACABARA CON EL MAL!",
                "No ...soy...un ... bebéeee!!",
                "Mi poder no tiene final!"
            ];
            currentPhrase= phrases[candidateIndex];
        }else{
            var phrases = [
                'BIENNN',
                'Te voy a rascar la barriga '+this.userName,
                "¿" +this.userName + " quieres un masajito ??",
                "Me como las preguntas, tienes mas??",
                this.userName + " te traigo un regalito por haberlo hecho tan bien!!",
                "Mas preguntas, mas preguntas ya!!!!!",
                "¿Quien me quiere , quien me quiere??"
            ];
            currentPhrase= phrases[candidateIndex];

        }


        this.modal.show('<img src="'+this.mediaFilesPathSucces+'/'+ candidateIndex+'.gif" style="max-width:350px;width:100%" ></img>', 
            currentPhrase, 
            function(){
                callback();
            }
        );
    },
    onFailed: function(average,callback){
        let candidateIndex = Math.floor(Math.random()*6);
        let currentPhrase;
        if(this.gameName =='zelda'){
            var phrases = [
                'Eres un perdedor '+this.userName,
                this.userName + "no puedes luchar contra mi inteligencia superior",
                "rebota rebota y en tu culo explota",
                "Yo tengo el poder y tu no!",
                "!! Acabare contigo "+ this.userName +" !!",
                "Hasta la cacho pega mas fuerte que tú jajajjaaj"
            ];
            currentPhrase= phrases[candidateIndex];
        }else{
            var phrases = [
                'Ohhh pobrecilla',
                this.userName + " anda mejor, Dame un masajito",
                "Jiiii que mal lo haces "+this.userName+ " !!",
                "Tu papá es mucho mas guapo que tu!!",
                "JAJAJA que mal lo haces!!",
                "No tienes ni idea ajjajaja!!"
            ];
            currentPhrase= phrases[candidateIndex];

        }


        this.modal.show('<img src="'+this.mediaFilesPathFail+'/'+ candidateIndex+'.gif" style="max-width:350px;width:100%" ></img>', 
            currentPhrase, 
            function(){
                callback();
            }
        );
    },
    onFinish: function(){
        alert("lo has conseguido");
    },


}