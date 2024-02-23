

const currentGame = Object.create(core);
const timeManager =  Object.create(time_manager);
const questionProvider = Object.create(question_provider);
questionProvider.questions = options;

const averageManager = Object.create(average_counter);
averageManager.maxAverage = 10;


const loginManager =  Object.create(login_provider);

const gamificationManager =  Object.create(gamification_provider);



const apperanceManager=  Object.create(apperance_manager);



currentGame.configure({
    timeManager: timeManager,
    questionProvider: questionProvider,
    apperanceManager: apperanceManager,
    averageManager: averageManager,
    timeManager: timeManager,
    gamificationManager:gamificationManager,
    loginManager:loginManager
});



currentGame.start();



function closedExplanationModal(){
    fillInitlWithRandomValues([]);
}