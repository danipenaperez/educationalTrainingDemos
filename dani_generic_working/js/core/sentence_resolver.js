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
                    let resolvedObject = this.resolveExp({exprValue:currentExpr, id:i});
                    currentChar = resolvedObject.html;
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
        
        }else if ("chooseOne"== command){
            let selectOptions = evaluate.split('|')[1].split(',');
            var buttons='';
            selectOptions.forEach(element => {
                buttons = buttons + templates.getOptionButtonHTMLTemplate(element);
            });
            args.html = buttons;
        
        }else if ("select"== command){
            let selectOptions = evaluate.split('|')[1].split(',');
            var checks='<div class="row">';
                checks = checks + '<div class="col-md-12" style="text-align:center">';

            selectOptions.forEach(element => {
                checks = checks + templates.getOptionCheckHTMLTemplate(element);
            });
                checks=checks +'</div>';
            checks=checks +'</div>';
            args.html = checks;
        
        }else if ("ref"== command){
            let ref_Target = evaluate.split('|')[1];
            try{
                args.html = eval(ref_Target);
            }catch(e){
                console.warn("unable to evaluate "+ref_Target);
            }
        }

        return args;
    }
}