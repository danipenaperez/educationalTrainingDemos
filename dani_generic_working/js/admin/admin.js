var admin_Core = {};

admin_Core.containerSecctionsDivName = 'cardsMainDiv';


admin_Core.loadMainMenu=function(){
    //Fetch Database
    admin_Utils.fetchRemoteContent("./database.json", function(database){
        database.sections.forEach(section => {
            let sectionCardHTML = admin_Templates.buildSectionCardTemplate(section);
            document.getElementById(admin_Core.containerSecctionsDivName).insertAdjacentHTML('beforeend', sectionCardHTML);
        });
    });
}


admin_Core.loadSection=function(sectionName){
    //Fetch Database
    admin_Utils.fetchRemoteContent("./database.json", function(database){
        const section = database.sections.find((element) => element.id == sectionName);
        section.games.forEach(game => {
            let gameCardHTML = admin_Templates.buildGameCardTemplate(game);
            document.getElementById(admin_Core.containerSecctionsDivName).insertAdjacentHTML('beforeend', gameCardHTML);
        });
    
    });
}


admin_Core.loadGame=function(gameId){
    //Fetch Database
    admin_Utils.fetchRemoteContent("./games/"+gameId+".json", function(gameData){
        document.title = gameData.title;
        let gameQuestions = gameData.questions; 
        gameLoader.init(gameQuestions);
    });
}




$( document ).ready(function() {
    console.log( "ready!" );

    //Check if is in main entrance or section
    let location = new URL(document.location.toString());
    let page = location.pathname.substring(1);
    let load_parameters = new URL(document.location.toString()).searchParams;  
    
    if(page.includes("dynamic_game.html")){
        let gameId = load_parameters.get('gameId');
        admin_Core.loadGame(gameId);
    }else{
        let sectionName = load_parameters.get('section');
        if(!sectionName){
            admin_Core.loadMainMenu();
        }else if(sectionName){
            admin_Core.loadSection(sectionName);
        }
    }
});