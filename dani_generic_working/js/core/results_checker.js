var resultChecker = {

    /**
     * Based on nodeType check value https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
     * returns true or false.
     * @param {*} question 
     * @param {*} resultWrapperHTMLId 
     */
    checkResults: function (question, resultWrapperHTMLId){
        var current=document.getElementById(resultWrapperHTMLId);
        
        let answerValue;
        if(current){
            if(!current.hasChildNodes()){ //One element form
                answerValue = this.getValueByNodeType(current);
            }else{
                let sentenceBuffer = "";
                current.childNodes.forEach(node => {
                    sentenceBuffer = sentenceBuffer+ this.getValueByNodeType(node);
                });
                answerValue= sentenceBuffer;
            }

        }

        return answerValue.trim().toLocaleUpperCase() == question.correctAnswer.trim().toLocaleUpperCase();
      },

      getValueByNodeType:function(node){
        var value;
        switch(node.nodeType){
            case Node.ELEMENT_NODE:
                value= this.getElementNodeValue(node);
                break;
            case Node.ATTRIBUTE_NODE:
                console.log("node");
                console.log(node);
                break;
            case Node.TEXT_NODE: //Input text elements
                value = node.nodeValue;
                break;
            default:
        }
        return value;
      },
      /**
       * Extract value from an expecified element Type (such as select, checkbox, etc..)
       * @param {*} node 
       */
      getElementNodeValue:function(node){
        let nodeValue ;
        switch(node.nodeName){
            case "SELECT":
                nodeValue=node.value;
                break;
            case "INPUT":
                nodeValue=node.value;
            break;
            default:
        }
        return nodeValue;
      }


}