var time_manager = {

    //Real Timeout hook
    countDownTimeout:null, 
    //Screen countDown interval show
    countDownShow:null, 

    currentCountDownValue: 0,
    
    startQuestion:function(secs, wrapperCountDownHTMLId, callback){
        instance = this;
        if(secs){
            this.countDownTimeout = window.setTimeout(function() {
                alert('!!Date mas prisa!!');
                // fillInitlWithRandomValues([]); //Excluded last success, not repeat 
                instance.endQuestion();
                $('#'+wrapperCountDownHTMLId).html("Ohhh que pena....");
                callback();
            }, secs * 1000);
            this.currentCountDownValue = secs;
            this.countDownShow = setInterval(function () {
                instance.currentCountDownValue = instance.currentCountDownValue-1;
                $('#'+wrapperCountDownHTMLId).html(instance.currentCountDownValue-1);
            }, 1000);
        }
    },
    endQuestion:function(){
        if(this.countDownTimeout){
            clearTimeout(this.countDownTimeout);
        }
        if(this.countDownShow){  
            clearInterval(this.countDownShow);
        }
    }

}