var resultChecker = {

    /**
     * Based on nodeType check value https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
     * returns true or false.
     * @param {*} question 
     * @param {*} resultWrapperHTMLId 
     */
    checkResults: function (question, resultWrapperHTMLId){
        var current=document.getElementById(resultWrapperHTMLId);
        let sentenceBuffer = "";
        if(current){
            
            current.childNodes.forEach(node => {
                switch(node.nodeType){
                    case Node.ELEMENT_NODE:
                        sentenceBuffer = sentenceBuffer+ this.getElementNodeValue(node);
                        break;
                    case Node.ATTRIBUTE_NODE:
                        console.log("node");
                        console.log(node);
                        break;
                    case Node.TEXT_NODE: //Input text elements
                        sentenceBuffer = sentenceBuffer+node.nodeValue;
                        break;
                    default:
                        
                }

            });
        }
        return sentenceBuffer.trim().toLocaleUpperCase() == question.correctAnswer.trim().toLocaleUpperCase();
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