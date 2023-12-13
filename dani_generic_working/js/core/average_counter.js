var average_counter = {
    maxAverage: 15,
    currentAverage:0,
    failStrategy:"reset",
    callBackMaxAverage:null,

    success:function(){
        this.currentAverage = this.currentAverage+1;
        this.verify();
        return this.currentAverage;
    },
    fail:function(){
        if(this.failStrategy =="reset")
            this.currentAverage = 0;
        else
            this.currentAverage = this.currentAverage -1;

        this.verify();
        
        return this.currentAverage;
    },
    verify: function(){
        if(this.currentAverage >= this.maxAverage){
            console.log("Game terminado");
            callBackMaxAverage();
        }
    },
    getCurrent: function(){
        return this.currentAverage;
    }


}