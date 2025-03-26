
var gameLoader = {};

const currentGame = Object.create(core);
const timeManager =  Object.create(time_manager);
const questionProvider = Object.create(question_provider);

const averageManager = Object.create(average_counter);
averageManager.maxAverage = 20;
const loginManager =  Object.create(login_provider);
const gamificationManager =  Object.create(gamification_provider);
const apperanceManager=  Object.create(apperance_manager);

gameLoader.init= function(gameQuestions){

    //Load questions into questionProvider
    questionProvider.questions = gameQuestions;
    
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
    
    
    //Start
    currentGame.start();
    
}



function closedExplanationModal(){
    fillInitlWithRandomValues([]);
}