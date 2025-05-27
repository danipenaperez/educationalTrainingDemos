var core = {
    questionProvider: null,
    timeManager: null,
    apperanceManager: null,
    averageManager: null,
    timeManager:null,
    gamificationManager:null,
    dashboard:{
        countDownWrapperId: "example_success"
    },
    gameBehaviour:{
        maxAverage:15
    },

    configure:function(args){
        this.timeManager=args.timeManager;
        this.questionProvider=args.questionProvider;
        this.apperanceManager=args.apperanceManager;
        this.averageManager = args.averageManager;
        this.averageManager.callBackMaxAverage=this.onEndGame;
        this.loginManager=args.loginManager;
        this.gamificationManager=args.gamificationManager;
        // this.loginManager.init({
        //     onLoginCallBack: this.configureUser
        // });

        let sign = prompt("¿Como te llamas?");

        currentGame.gamificationManager.configure({
            userName:sign,
        });
        currentGame.gamificationManager.init();
        
    },
    
    /**
     * Load current question
     */
    loadQuestion:function(question, callbackResult){
        instance = this;
        console.log(question);

        var checkResultFunction = null;
        var showhHelpQuestionFunction = null;
        
        //CREATE QUESTION
        //Title if added
        if(question.sentence_title){
            document.getElementById('ask_title').innerHTML='<h2 class="text-center">'+question.sentence_title+'</h2>'; 
        }
        
        
        
        /**
         * Each type question has the responsability to create the ask and create the answer mode
         */
        if(question.sentence){
            
            var assembledSentence = sentenceResolver.assemble(question.sentence);
            document.getElementById('ask_content').innerHTML=
            '<div id="ask_content_internal" class="row h-25 justify-content-center align-items-center">'
            +    '<p id="ask" class="text-center">'+assembledSentence+'</p>'
            +'</div>'; 
            
            var divToCheckAnswer = "ask";

            if(question.selectChecks){
                var assembledChecks = sentenceResolver.assemble(question.selectChecks);
                document.getElementById('ask_content').innerHTML = 
                    document.getElementById('ask_content').innerHTML +
                    assembledChecks+
                    '<div id="selectResult" style="display: none;"></div>'
                    ;
                divToCheckAnswer = "selectResult";    
            }

            if(question.image){
                let image = templates.createImageHelpOnQuestionButton("",question.image);
                document.getElementById('ask_content').appendChild(image);
            }


            if(question.preExplanation){
                currentGame.gamificationManager.showQuestionPreExplanation(null,null,null);
            }


            //CREATE HELP BUTTON if help is available
            if(question.help){
                showhHelpQuestionFunction = function(){
                    //alert(question.help);
                    if(question.help.videoURL){
                        currentGame.gamificationManager.showQuestionPreExplanation('video', question.help.videoURL,null);
                    }else{
                       alert(question.help); 
                    }
                    
                }
                let helpQuestionButton = templates.createHelpOnQuestionButton("help_question_btn", "ayuda?", showhHelpQuestionFunction);
                document.getElementById('optionsContainer').appendChild(helpQuestionButton);

                //Check is must be show on preQuestion
                if(question.help.videoURL && question.help.showOnStart){
                    currentGame.gamificationManager.showQuestionPreExplanation('video', question.help.videoURL,null);
                }

            }


            if(question.imageMap){
                
                fetchRemoteContent('imagemaps/'+question.imageMap, function(content){
                    document.getElementById('ask_content').innerHTML = 
                    document.getElementById('ask_content').innerHTML +
                    content
                    +
                    '<div id="selectResult" style="display: none;"></div>';

                    //Prepare check result functions
                    storeOneTimeQuestion(question, function(responseResult){
                        callbackResult(question, responseResult);
                    });

                    return;  //NO further processing

                });
            }

            if(question.sentenceReorder){
                
                fetchRemoteContent('dropzones/dropzones_wrapper.html', function(content){
                    document.getElementById('ask_content').innerHTML = 
                    document.getElementById('ask_content').innerHTML +
                    content
                    +
                    '<div id="selectResult" style="display: none;"></div>';

                    
                    
                    //Shuffle sentence and print
                    const sentenceElements = question.sentenceReorder.split(" ");
                    let gameRandomId = crypto.randomUUID();
                    let dragElementPrefix = "drag"+gameRandomId;
                    shuffleArray(sentenceElements); //Disorder
                    for(i=0;i<sentenceElements.length;i++){
                        var ele = sentenceElements[i];
                        $(".options-draggable-wrapper").append('<div id="'+dragElementPrefix+''+i+'" class="draggable js-drag" active="0">'+ele+'</div>');
                        $(".options-draggable-wrapper").append('<div id="dragspace_'+i+'" style="display: none;"> </div>'); //Necesario para añadir espacioes entre palabras y que el checkresult coincida
                    }

                    //Load dependencies
                    if(typeof dropZonesLoaded_flag == 'undefined') { //Flag for already loaded script
                        loadjscssfile('dropzones/dropzones.css','css');
                        // loadjscssfile('dropzones/dropzones.js','js');
                        $.getScript( "dropzones/dropzones.js", function( data, textStatus, jqxhr ) {
                            dropZonesReset();
                            for(i=0;i<sentenceElements.length;i++){
                                setupDropzone('#'+dragElementPrefix+''+i);
                            }
                        });
                    }else{
                        dropZonesReset();
                        for(i=0;i<sentenceElements.length;i++){
                            setupDropzone('#'+dragElementPrefix+''+i);
                        }
                    }

                    


                    //Prepare check result functions
                    storeOneTimeQuestion(question, function(responseResult){
                        callbackResult(question, responseResult);
                    });

                    
                    divToCheckAnswer = "dropzones-wrapper";

                    //return;  //NO further processing

                });
            }


            //CREATE RESULT BUTTONS
            checkResultFunction = function(){
                let responseResult = resultChecker.checkResults(question, divToCheckAnswer);
                callbackResult(question, responseResult);
            }
            let checkResultsButton = templates.createCheckResultsButton("check_results_btn", "Comprobar", checkResultFunction);
            document.getElementById('optionsContainer').appendChild(checkResultsButton);
        
        }else if(question.ask){
            //Print ask
            document.getElementById('ask_content').innerHTML=question.ask; 
            //Print text box result
            document.getElementById('optionsContainer').innerHTML=templates.getInputTextHTMLTemplate("typedAnswer");
            
            //CREATE CHECK FUNCTION AND RESULT BUTTONS
            checkResultFunction = function(){
                let responseResult = resultChecker.checkResults(question, "typedAnswer");
                callbackResult(question, responseResult);
                
            }
            let checkResultsButton = templates.createCheckResultsButton("check_results_btn", "Comprobar", checkResultFunction);
            document.getElementById('optionsContainer').appendChild(checkResultsButton);
        }else if(question.chooseOne){
            //Print ask
            var assembledSentence = sentenceResolver.assemble(question.chooseOne.substring(question.chooseOne.indexOf('[')));
            alert(assembledSentence);
            document.getElementById('ask_content').innerHTML=question.chooseOne.substring(0, question.chooseOne.indexOf('[')-1);

            document.getElementById('optionsContainer').innerHTML=assembledSentence;

            search = '<item id="item1">firstItem</item><item id="item2">secondItem</item>';
            regex = new RegExp(/<([^\s]+).*?id="([^"]*?)".*?>(.+?)<\/\1>/gi);
            matches = search.match(regex);
            results = {};
            for (i in matches) {
                let parts = regex.exec(matches[i]);
                if(parts)
                    results[parts[2]] = parts[3];
            }
            
            console.log('y lo conseguido es ');
            console.log(results);
        }

        
    },

    onEndQuestion:function (question, result){
        
        //Stop timers
        currentGame.timeManager.endQuestion();
        let currentAverage;
        if(result){
            currentAverage = currentGame.averageManager.success();
            currentGame.gamificationManager.onSuccess(currentAverage, currentGame.newQuestionStart);
        }else{
            currentAverage = currentGame.averageManager.fail();
            currentGame.gamificationManager.onFailed(currentAverage, currentGame.newQuestionStart, question);
        }
        currentGame.apperanceManager.setAverage(currentAverage);
    },

    newQuestionStart:function(){
        currentGame.apperanceManager.askMode();
        let currentQuestion = currentGame.questionProvider.getQuestion();
        //Show question and start timer countdown
        currentGame.loadQuestion(currentQuestion, currentGame.onEndQuestion);
        currentGame.timeManager.startQuestion(currentQuestion.timeout, currentGame.dashboard.countDownWrapperId, function(){alert("Se te ha acabado el tiempo")} );
       
    },
    start: function(){
        currentGame.apperanceManager.prepareMainBoard();
        currentGame.newQuestionStart();
    },
    onEndGame: function(){
        alert(" QUE BIEN HAS TERMINADO EL JUEGO");
    }
}