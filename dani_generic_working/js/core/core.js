var core = {
    questions: [],
    timer: null,
    dashboard:{
        countDownWrapperId: "example_success"
    },
    gameBehaviour:{
        maxAverage:15
    },

    configure:function(args){
        this.timer=args.timer;
    },

    /**
     * Prepare main screen aspect and basic elements
     */
    prepareMainBoard: function (){
        //Average Menu
        var averageTemplate = templates.getAverageHTMLTemplate();
        document.getElementById('maincontainer').innerHTML= averageTemplate + document.getElementById('maincontainer').innerHTML;
    },
    /**
     * Load current question
     */
    loadQuestion:function(question){
        
        console.log(question);

        var checkResultFunction = null;
        //CREATE QUESTION
        if(question.sentence){
            console.log("es sentence");
            var assembledSentence = sentenceResolver.assemble(question.sentence);
            document.getElementById('ask_content').innerHTML='<p id="ask" class="text-center h1">'+assembledSentence+'</p>'; 
            
            checkResultFunction = function(){
                alert(question.correctAnswer);
                let ok = resultChecker.checkResults(question, "ask");
                if(ok){

                }
                
            }
        }




        //CREATE RESULT BUTTONS
        let checkResultsButton = templates.createCheckResultsButton("check_results_btn", "Comprobar", checkResultFunction);
        document.getElementById('optionsContainer').appendChild(checkResultsButton);
    },


    fillInitlWithRandomValues: function (excluded){
        this.resetResultStyles();
        this.setAverage();
        console.log("FILL INIT TIME--------------");
        if(!excluded)
            excluded =[];
        this.reload(excluded);
        
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


    getRandomItem: function (strategy, excluded){
    
        var candidateIndex ;
        if('excludedCorrectValues' == strategy){
            while (true) {
                candidateIndex = Math.floor(Math.random()*options.length);
                if (!excluded.includes(options[candidateIndex].correct)){
                    break;
                }
            }
        }else if('excludedIndex' == strategy){
            while (true) {
                candidateIndex = Math.floor(Math.random()*options.length);
                if (!excluded.includes(candidateIndex)){
                    break;
                }
            }
        }else{
            while (true) {
                candidateIndex = Math.floor(Math.random()*options.length);
                if (!excluded.includes(candidateIndex)){
                    break;
                }
            }
        }
        return candidateIndex;
    },
    checkResult:function (result){
        if(countDownTimeout){
            clearTimeout(countDownTimeout);
        }
        if(countDownShow){
            clearInterval(countDownShow);
        }
    
        
        var response = $('#'+answerTextBoxId).val().trim();
        if(successOption.correct.trim().toLowerCase() == response.trim().toLowerCase()){
            averageCounter=averageCounter+1;
            applyResultStyles('success');
            window.setTimeout(function() {
                fillInitlWithRandomValues([]); //Excluded last success, not repeat 
            }, 4 * 500);
        }else{
            averageCounter=0;
            applyResultStyles('failed');
        }
    },
    applyResultStyles:function (status){
        if("success" == status){
            $("#maincontainer").addClass('success-opt').removeClass('test-word');
        }else{
            if(explanation)
                modal.show(explanation(successOption));
            $("#maincontainer").addClass('falied-opt').removeClass('test-word');
        }
    },
    resetResultStyles:function (){
        $("#maincontainer").addClass('test-word').removeClass('success-opt').removeClass('falied-opt');
    },
    setAverage: function (){
        $('#averageCounter').html(averageCounter);
        if(averageCounter == this.gameBehaviour.maxAverage){
            alert('Lo has conseguido avisa a tus papas!!!!');
            fillInitlWithRandomValues([]);
        }
    
    },
    start: function(){
        this.prepareMainBoard();
        let currentQuestion = this.questions[0];
        this.loadQuestion(currentQuestion);
        time_manager.startQuestion(currentQuestion.timeout, this.dashboard.countDownWrapperId, function(){alert("finalizado")} );
       
        // this.fillInitlWithRandomValues();
    }
}