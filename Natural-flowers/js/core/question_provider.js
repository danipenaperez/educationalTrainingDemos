var question_provider = {
    questions: [],
    getQuestion: function(){
        var selectedIndex = this.getRandomItem(null, []);
        return this.questions[selectedIndex];
        //  return this.questions[6];
        
    },
    getRandomItem: function (strategy, excluded){
    
        var candidateIndex ;
        if('excludedCorrectValues' == strategy){
            while (true) {
                candidateIndex = Math.floor(Math.random()*this.questions.length);
                if (!excluded.includes(this.questions[candidateIndex].correct)){
                    break;
                }
            }
        }else if('excludedIndex' == strategy){
            while (true) {
                candidateIndex = Math.floor(Math.random()*this.questions.length);
                if (!excluded.includes(candidateIndex)){
                    break;
                }
            }
        }else{
            while (true) {
                candidateIndex = Math.floor(Math.random()*this.questions.length);
                if (excluded && !excluded.includes(candidateIndex)){
                    break;
                }
            }
        }
        return candidateIndex;
    }

}