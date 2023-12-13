var core = {
    questionProvider: null,
    timeManager: null,
    apperanceManager: null,
    averageManager: null,
    timeManager:null,
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
    },

    
    /**
     * Load current question
     */
    loadQuestion:function(question, callbackResult){
        instance = this;
        console.log(question);

        var checkResultFunction = null;
        //CREATE QUESTION
        if(question.sentence){
            
            var assembledSentence = sentenceResolver.assemble(question.sentence);
            document.getElementById('ask_content').innerHTML='<p id="ask" class="text-center h1">'+assembledSentence+'</p>'; 
            
            checkResultFunction = function(){
                let responseResult = resultChecker.checkResults(question, "ask");
                callbackResult(question, responseResult);
                
            }
        }

        //CREATE RESULT BUTTONS
        let checkResultsButton = templates.createCheckResultsButton("check_results_btn", "Comprobar", checkResultFunction);
        document.getElementById('optionsContainer').appendChild(checkResultsButton);
    },


    onEndGame: function(){
        alert(" QUE BIEN HAS TERMINADO EL JUEGO");
    },


    reload: function (excluded){
        return;
        var opt_index = getRandomItem('excludedCorrectValues', excluded);
        
        var option = options[opt_index];

        successOption = option;
        if(option.word!=null){
            document.getElementById('ask_content').innerHTML='<p id="ask" class="text-center h1">'+option.word+'</p>'; 
        }else if(option.image){
            document.getElementById('ask_content').innerHTML='<img id="ask" src="'+option.image+'" class="text-center" width="50%" height="50%"></img>'; 
        }

        //Input Text
        document.getElementById('optionsContainer').innerHTML = templates.getInputTextHTMLTemplate(answerTextBoxId);

        successDivId = Math.floor(Math.random()*availableOptions);
        
        $('#check_'+answerTextBoxId+'_Btn').off('click').click(function(e){
            e.preventDefault();
            checkResult();
        });

        countDownTimeout = window.setTimeout(function() {
            alert('!!Date mas prisa!!');
            // fillInitlWithRandomValues([]); //Excluded last success, not repeat 
            checkResult();
        }, 45 * 1000);
        countDownValue = 45;
        countDownShow = setInterval(function () {
            countDownValue = countDownValue-1;
            $('#example_success').html(countDownValue-1);
        }, 1000);
    },


    
    onEndQuestion:function (question, result){
        
        //Stop timers
        currentGame.timeManager.endQuestion();
        let currentAverage;
        if(result){
            currentAverage = currentGame.averageManager.success();
            currentGame.applyResultStyles("success", null, currentAverage);
            
        }else{
            currentAverage = currentGame.averageManager.fail();
            currentGame.applyResultStyles("failed", question.explanation, currentAverage);
            

        }

        currentGame.apperanceManager.setAverage(currentAverage);
    },
    applyResultStyles:function (status, explanation, average){
        that = this;
        if("success" == status){
            
            // modal.show('<div class="sprite-ken"></div>', 
            //             " Te machaco Comes!!", 
            //             function(){
            //                 alert("valeeee ya te cierro");
            //                 that.newQuestionStart();
            //             }
            // );

            modal.show('<img src="images/people/link/'+ average+'.gif" style="max-width:350px;width:100%" ></img>', 
                "La furia de Martin", 
                function(){
                    that.newQuestionStart();
                }
            );


        }else{
            // if(explanation)
            //     modal.show(explanation(successOption));
            
            // modal.show('<div class="sprite-ken"></div>', 
            //             " Te machaco Comes!!", 
            //             function(){
            //                 alert("valeeee ya te cierro");
            //                 that.newQuestionStart();
            //             }
            // );
            modal.show('<img src="images/people/zelda_malvados/'+ average+'.gif" style="max-width:350px;width:100%"></img>', 
            "Perdedor", 
            function(){
                that.newQuestionStart();
            }
            );
        }
    },

    setAverage: function (){
        $('#averageCounter').html(averageCounter);
        if(averageCounter == this.gameBehaviour.maxAverage){
            alert('Lo has conseguido avisa a tus papas!!!!');
            fillInitlWithRandomValues([]);
        }
    },
    newQuestionStart:function(){
        this.apperanceManager.askMode();
        let currentQuestion = this.questionProvider.getQuestion();
        //Show question and start timer countdown
        this.loadQuestion(currentQuestion, this.onEndQuestion);
        currentGame.timeManager.startQuestion(currentQuestion.timeout, this.dashboard.countDownWrapperId, function(){alert("Se te ha acabado el tiempo")} );
       
    },
    start: function(){
        this.apperanceManager.prepareMainBoard();
        this.newQuestionStart();
    }
}