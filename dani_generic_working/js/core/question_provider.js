var question_provider = {
    questions: [],
    getQuestion: function(){

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
    }

}