



//Options must be loaded
//var optios = []
//var placeholder= "...";
//var maxAverage =15;



//Buttons

var successDivId;
var successOption={"word":"", correct:""};
var averageCounter=0;
var answerTextBoxId = 'answerUser';
var countDownTimeout;
var countDownShow;
// var countDownValue = 45;



const currentGame = Object.create(core);
const timer =  Object.create(time_manager);

currentGame.configure({
    timer: timer
});
currentGame.questions = options;


currentGame.start();




















function closedExplanationModal(){
    fillInitlWithRandomValues([]);
}