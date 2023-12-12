var sentenceResolver ={

    assemble: function(raw_sentence_dsl){
        let strbff = "";
        var currentChar;
        var currentExpr="";
        var isExp = false;
        for (let i = 0; i < raw_sentence_dsl.length; i++) {
            
                currentChar = raw_sentence_dsl.charAt(i);
                if("[" == currentChar){
                    currentExpr = "";
                    isExp=true;
                    //interpretar
                }if("]" == currentChar){
                    let revolvedObject = this.resolveExp({exprValue:currentExpr, id:i});
                    currentChar = revolvedObject.html;
                    isExp=false;
                }

                if(isExp)
                  currentExpr=currentExpr+currentChar;

                if(!isExp)
                  strbff=strbff+currentChar;

          }

        return strbff;
    },

    resolveExp: function(args){
        var evaluate = args.exprValue.replaceAll("[", "").replaceAll("]", "");
        var command = evaluate.split('|')[0];
        if("inputText" == command){
            let inputObject = templates.createInputText(args.id);
            args.html = inputObject.outerHTML; //mejorar esto con objetos dom
        }else if ("selectOption"== command){
            let selectOptions = evaluate.split('|')[1].split(',');
            let selectObject = templates.createSelect("select_"+args.id, selectOptions);
            args.html = selectObject.outerHTML;
        
        }

        return args;
    }
}