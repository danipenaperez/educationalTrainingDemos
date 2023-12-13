var apperance_manager= {
    
    /**
     * Prepare main screen aspect and basic elements
     */
    prepareMainBoard: function (){
        //Average Menu
        var averageTemplate = templates.getAverageHTMLTemplate();
        document.getElementById('maincontainer').innerHTML= averageTemplate + document.getElementById('maincontainer').innerHTML;
    },
    /**
     * Manage main common Faile effects
     */
    askMode:function(){
        $("#maincontainer").addClass('test-word').removeClass('success-opt').removeClass('falied-opt');
        document.getElementById('ask_content').innerHTML="";
        document.getElementById('optionsContainer').innerHTML="";
    },
    /**
     * Manage main common Succes effects
     */
    displaySuccess: function(){
        $("#maincontainer").addClass('success-opt').removeClass('test-word');
    },

    /**
     * Manage main common Faile effects
     */
    displayFailed:function(){
        $("#maincontainer").addClass('falied-opt').removeClass('test-word');
    },
    /**
     * Update Average Counter
     */
    setAverage: function (averageCount){
        $('#averageCounter').html(averageCount);
    }
}