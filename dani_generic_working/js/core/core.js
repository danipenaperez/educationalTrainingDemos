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

        let sign = prompt("¿¿Como te llamas??");
        var random_boolean = Math.random() < 0.5;
        let gameName ="zelda";
        if(random_boolean){
            alert("Bienvenido "+ sign+" a la aventura de ZELDA" );
            gameName="zelda";
        }else{
            alert("Bienvenido "+ sign+" a la aventura de los animales" );
            gameName="animales";
        }
        currentGame.gamificationManager.configure({
            gameName:gameName,
            userName:sign,
        });
        currentGame.gamificationManager.init();
        
    },
    /**
     * After login configure gamification and other services
     * @param {*} args 
     */
    // configureUser:function(args){
    //     alert("sooouuu "+ args.userName);
    //     currentGame.gamificationManager.configure({
    //         mediaFilesPath:args.gameName,
    //         userName:args.userName,
    //     });
    //     alert('init del gaminfication');
    //     currentGame.gamificationManager.init();
    // },
    
    /**
     * Load current question
     */
    loadQuestion:function(question, callbackResult){
        instance = this;
        console.log(question);

        var checkResultFunction = null;
        
        //CREATE QUESTION
        /**
         * Each type question has the responsability to create the ask and create the answer mode
         */
        if(question.sentence){
            
            var assembledSentence = sentenceResolver.assemble(question.sentence);
            document.getElementById('ask_content').innerHTML='<p id="ask" class="text-center h1">'+assembledSentence+'</p>'; 
            
            checkResultFunction = function(){
                let responseResult = resultChecker.checkResults(question, "ask");
                callbackResult(question, responseResult);
                
            }

            //CREATE RESULT BUTTONS
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



            //Print text box result
            
            //CREATE CHECK FUNCTION AND RESULT BUTTONS
            // checkResultFunction = function(){
            //     let responseResult = resultChecker.checkResults(question, "typedAnswer");
            //     callbackResult(question, responseResult);
                
            // }
            // let checkResultsButton = templates.createCheckResultsButton("check_results_btn", "Comprobar", checkResultFunction);
            // document.getElementById('optionsContainer').appendChild(checkResultsButton);
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
            currentGame.gamificationManager.onFailed(currentAverage, currentGame.newQuestionStart);
            

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