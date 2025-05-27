var gamification_provider = {
    mediaFilesPathSucces:null,
    mediaFilesPathFail:null,
    gameName:null,
    modal:null,
    providerName: 'Ganon_',
    userName: '',
    configure: function(args){
        //Fetch database
        let that = this;
        fetchRemoteContent('./database_gamification.json', function(content){
            let selected = randomElementFromArray(content);
            alert("Bienvenido a "+ selected.name);
            that.gameName=selected.name;
            that.mediaFilesPathSucces=selected.success;
            that.mediaFilesPathFail=selected.fail;
        });
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
        let selected = randomElementFromArray(this.mediaFilesPathSucces); //Math.floor(Math.random()*6)+1;
        let currentImage = selected.image;
        let currentPhrase =selected.phrase;
        currentPhrase = currentPhrase.replaceAll("<%=name%>", this.userName);
        this.modal.show('<img src="'+currentImage+'" style="max-width:350px;width:100%" ></img>', 
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
        var that = this;
        if(question){
            this.showFailedExplanation(question,average,callback);
        }else{
            this.showGamificationFailed(callback);
        }
        
    },
    /**
     * Show a video to show question explanations
     * @param {*} type 
     * @param {*} videoURL 
     * @param {*} callback 
     */
    showQuestionPreExplanation: function(type, videoURL, callback){
        var html = templates.getVideoLocalTemplate(videoURL);
        this.modal.show(html, 
            "EXPLICACION DEL TEMA", 
            function(){
                if(callback){
                    callback();
                }
                
            }
        );
    },
    showFailedExplanation: function(question, average, callback){
        let modalExplanationContent = sentenceResolver.assemble(question.explanation);
        if(question.explanationExtended){
            modalExplanationContent= modalExplanationContent + "<br>"+question.explanationExtended;
        }
        if(question.explanationVideoURL){
            modalExplanationContent= modalExplanationContent + '<br><iframe width="430" height="185" src="'+question.explanationVideoURL+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        }
        var that = this;
        this.modal.show(modalExplanationContent, 
            "<div style=\"color:red\">Repasa con Atencion:</div>", 
            function(){
                setTimeout(function() {
                    that.showGamificationFailed(average,callback);
                }, 200);
            }
        );
    },
    showGamificationFailed: function(average,callback){

        let selected = randomElementFromArray(this.mediaFilesPathFail); //Math.floor(Math.random()*6)+1;
        let currentImage = selected.image;
        let currentPhrase =selected.phrase;
        currentPhrase = currentPhrase.replaceAll("<%=name%>", this.userName);
        this.modal.show('<img src="'+currentImage+'" style="max-width:350px;width:100%" ></img>', 
            currentPhrase, 
            function(){
                callback();
            }
        );
    },
    
    onFinish: function(){
        alert("lo has conseguido");
    }


}