
var gameLoader = {};

const currentGame = Object.create(core);
const timeManager =  Object.create(time_manager);
const questionProvider = Object.create(question_provider);

const averageManager = Object.create(average_counter);
averageManager.maxAverage = 20;
const loginManager =  Object.create(login_provider);
const gamificationManager =  Object.create(gamification_provider);
const apperanceManager=  Object.create(apperance_manager);

var context;
gameLoader.init= function(gameData){

    
    //Load questions into questionProvider
    questionProvider.questions = gameData.questions;
    
    //Set context if exist
    if(gameData.context){
        context=gameData.context;
    }

    //Configure all data
    currentGame.configure({
        timeManager: timeManager,
        questionProvider: questionProvider,
        apperanceManager: apperanceManager,
        averageManager: averageManager,
        timeManager: timeManager,
        gamificationManager:gamificationManager,
        loginManager:loginManager
    });
    
    //Set Page Title
    document.title = gameData.title;

    //Start
    if(gameData.startExplanation){
        if(gameData.startExplanation.videoURL){
            currentGame.gamificationManager.showQuestionPreExplanation('video', gameData.startExplanation.videoURL,function(){
                currentGame.start();
            });
        }
    }else{
        currentGame.start();
    }

    
}



function closedExplanationModal(){
    fillInitlWithRandomValues([]);
}