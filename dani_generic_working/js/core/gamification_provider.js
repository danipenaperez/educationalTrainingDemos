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

        //Voy por aqui
        //Dynamic loading
        // gamificationData = gamifications[randomIntFromInterval(0,gamifications.size)];
        // this.gameName=gamificationData.id;
        // this.mediaFilesPathSucces=gamificationData.sourceURL+'/success';
        // this.mediaFilesPathFail=gamificationData.sourceURL+'/fail';
        // this.userName=args.userName;
        // alert("Bienvenido "+ this.userName+" "+ gamificationData.name );

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
    /**
     * Si la respuesta tiene el campo explanation, se muestra 
     * Si no lo tiene saltan las frases tontas con las imagenes del juego
     * @param {*} average 
     * @param {*} callback 
     * @param {*} question 
     */
    onFailed: function(average,callback, question){
        
        if(question){
            let modalExplanationContent = sentenceResolver.assemble(question.explanation);
            if(question.explanationExtended){
                modalExplanationContent= modalExplanationContent + "<br>"+question.explanationExtended;
            }
            if(question.explanationVideoURL){
                modalExplanationContent= modalExplanationContent + '<br><iframe width="430" height="185" src="'+question.explanationVideoURL+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
            }
            this.modal.show(modalExplanationContent, 
                "<div style=\"color:red\">Repasa con Atencion:</div>", 
                function(){
                    callback();
                }
            );
        }else{
            let candidateIndex = Math.floor(Math.random()*6);
            let currentPhrase;
            if(this.gameName =='zelda'){
                var phrases = [
                    "!!Mal!!" +'Eres un perdedor '+this.userName,
                    "!!Mal!!" +this.userName + "no puedes luchar contra mi inteligencia superior",
                    "!!Mal!!" +"rebota rebota y en tu culo explota",
                    "!!Mal!!" +"Yo tengo el poder y tu no!",
                    "!!Mal!!" +"!! Acabare contigo "+ this.userName +" !!",
                    "!!Mal!!" +"Hasta brigitte pega mas fuerte que tú jajajjaaj"
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

            this.modal.show('<img src="'+this.mediaFilesPathFail+'/'+ candidateIndex+'.gif" style="max-width:350px;width:100%" ></img>', 
                currentPhrase, 
                function(){
                    callback();
                }
            );
        }
        
    },
    
    onFinish: function(){
        alert("lo has conseguido");
    }


}