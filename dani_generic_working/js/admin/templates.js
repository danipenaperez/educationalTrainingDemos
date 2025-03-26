var admin_Templates = {};


admin_Templates.buildSectionCardTemplate= function(sectionData){

        var content =  
        '<div class="card" >'+
                '<div class="row no-gutters">'+
                '<div class="col-sm-4" >'+
                        '<img class="card-img" src="'+sectionData.image+'" style="height: 230px" alt="Can vs could">'+
                '</div>'+
                '<div class="col-sm-8">'+
                        '<div class="card-body">'+
                        '<h5 class="card-title">'+sectionData.name+'</h5>'+
                        '<p class="card-text">'+sectionData.description+'</p>'+
                        '<a href="./dynamic_Index.html?section='+sectionData.id+'" class="btn btn-primary">Empezar</a>'+
                        '</div>'+
                '</div>'+
                '</div>'+
        '</div> '
        return content;

}


admin_Templates.buildGameCardTemplate= function(gameData){

        var content =  
        '<div class="card" >'+
                '<div class="row no-gutters">'+
                '<div class="col-sm-4" >'+
                        '<img class="card-img" src="'+gameData.image+'" style="height: 230px" alt="Can vs could">'+
                '</div>'+
                '<div class="col-sm-8">'+
                        '<div class="card-body">'+
                        '<h5 class="card-title">'+gameData.name+'</h5>'+
                        '<p class="card-text">'+gameData.description+'</p>'+
                        '<a href="./dynamic_game.html?gameId='+gameData.id+'" class="btn btn-primary">Empezar</a>'+
                        '</div>'+
                '</div>'+
                '</div>'+
        '</div> '
        return content;

}