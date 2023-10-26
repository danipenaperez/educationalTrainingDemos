/** SAcado de la pagina https://web.dev/articles/drag-and-drop?hl=es 
 * y en esta otra hay un ejemplo
 * https://stackoverflow.com/questions/52554613/html-5-drag-and-drop-not-working-on-mobile-screen
*/

document.addEventListener('DOMContentLoaded', (event) => {


    var sentence = window.prompt("Escribe la frase", "no se me ocurre nada");
    const sentenceElements = sentence.split(" ");
    
    /**
     * CREATE UI
     */
    shuffleArray(sentenceElements); //Disorder
    sentenceElements.forEach((ele) => {
        $("#game-wrapper").append('<div draggable="true" class="box draggable">'+ele+'</div>');
    });

    
    /**
     * SET LISTENERS
     * @param {} array 
     */
    const slider = interact('.draggable').draggable({
      listeners: {
        start (event) {
          console.log(event.type, event.target)
        },
        move (event) {
          position.x += event.dx
          position.y += event.dy
    
          event.target.style.transform =
            `translate(${position.x}px, ${position.y}px)`
        },
      }
    });  
















    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }














      // initListeners();
    
  });
  