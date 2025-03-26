var admin_Utils={};

/**
 * Used to fetch content from other files. 
 * Synch blocking execution
 * @param {*} url 
 * @param {*} callback 
 */
admin_Utils.fetchRemoteContent=function (url, callback){
    var response = '';
    $.ajax({ type: "GET",   
             dataType: "json",
             url: url,   
             async: false,
             success : function(text)
             {
                 response = text;
                 callback(text);
             }
    });
    
   //sync success alert(response);
}
/**
 * Import dinamically a js or css file
 * @param {*} filename 
 * @param {*} filetype 
 */
admin_Utils.loadjscssfile = function (filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
    } else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }

    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref);
}



