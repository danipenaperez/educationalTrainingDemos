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
                "!!Bien!!" + 'La furia de '+this.userName,
                "!!Bien!!" +this.userName + " acabará contigo!!",
                "!!Bien!!" +"!!TODOPODEROSO "+this.userName+ " !!",
                "!!Bien!!" +"EL BIEN ACABARA CON EL MAL!",
                "!!Bien!!" +"No ...soy...un ... bebéeee!!",
                "!!Bien!!" +"Mi poder no tiene final!"
            ];
            currentPhrase= phrases[candidateIndex];
        }else{
            var phrases = [
                "!!Bien!!" +'BIENNN',
                "!!Bien!!" +'Te voy a rascar la barriga '+this.userName,
                "!!Bien!!" +"¿" +this.userName + " quieres un masajito ??",
                "!!Bien!!" +"Me como las preguntas, tienes mas??",
                "!!Bien!!" +this.userName + " te traigo un regalito por haberlo hecho tan bien!!",
                "!!Bien!!" +"Mas preguntas, mas preguntas ya!!!!!",
                "!!Bien!!" +"¿Quien me quiere , quien me quiere??"
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
    onFailed: function(average,callback, explanation){
        let candidateIndex = Math.floor(Math.random()*6);
        let currentPhrase;
        if(this.gameName =='zelda'){
            var phrases = [
                "!!Mal!!" +'Eres un perdedor '+this.userName,
                "!!Mal!!" +this.userName + "no puedes luchar contra mi inteligencia superior",
                "!!Mal!!" +"rebota rebota y en tu culo explota",
                "!!Mal!!" +"Yo tengo el poder y tu no!",
                "!!Mal!!" +"!! Acabare contigo "+ this.userName +" !!",
                "!!Mal!!" +"Hasta la cacho pega mas fuerte que tú jajajjaaj"
            ];
            currentPhrase= phrases[candidateIndex];
        }else{
            var phrases = [
                "!!Mal!!" +'Ohhh pobrecilla',
                "!!Mal!!" +this.userName + " anda mejor, Dame un masajito",
                "!!Mal!!" +"Jiiii que mal lo haces "+this.userName+ " !!",
                "!!Mal!!" +"Tu papá es mucho mas guapo que tu!!",
                "!!Mal!!" +"JAJAJA que mal lo haces!!",
                "!!Mal!!" +"No tienes ni idea ajjajaja!!"
            ];
            currentPhrase= phrases[candidateIndex];

        }

        let content = ' <br/><br/><img src="'+this.mediaFilesPathFail+'/'+ candidateIndex+'.gif" style="max-width:350px;width:100%" ></img>';
        if(explanation)
            content = '<b>'+explanation+'</b>' +content;

        this.modal.show(content, 
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