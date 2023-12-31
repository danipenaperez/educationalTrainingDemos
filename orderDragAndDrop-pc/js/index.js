/** SAcado de la pagina https://web.dev/articles/drag-and-drop?hl=es 
 * y en esta otra hay un ejemplo
 * https://stackoverflow.com/questions/52554613/html-5-drag-and-drop-not-working-on-mobile-screen
*/

document.addEventListener('DOMContentLoaded', (event) => {


    var sentence = window.prompt("Escribe la frase", "no se me ocurre nada");
    const sentenceElements = sentence.split(" ");
    
    shuffleArray(sentenceElements); //Disorder
    sentenceElements.forEach((ele) => {
        $("#game-wrapper").append('<div draggable="true" class="box">'+ele+'</div>');
    });

    

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }




    function checkResults(){
        var current="";
        for(i=0; i< sentenceElements.length;i++){
            var text = $('#game-wrapper div:eq('+i+')').html();
            // console.log(text);
            current=current+text+" ";
        }
        console.log(current.trim());
        if(sentence == current.trim()){
            alert("congrats!!");
        }
    }


    var items;

    function handleDragStart(e) {
      this.style.opacity = '0.4';
      dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);

    }
  
    function handleDragEnd(e) {
      this.style.opacity = '1';
  
      items.forEach(function (item) {
        item.classList.remove('over');
      });
    }
  
    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
  
      return false;
    }
  
    function handleDragEnter(e) {
      this.classList.add('over');
    }
  
    function handleDragLeave(e) {
      this.classList.remove('over');
    }
  
    function handleDrop(e) {
        e.stopPropagation(); // stops the browser from redirecting.
        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
            console.log(this.innerHTML);
            checkResults();
          }
        
        return false;
      }
      
     
      function initListeners(){
        items = document.querySelectorAll('.container-grid .box');

        //PC Screen
        items.forEach(function(item) {
          item.addEventListener('dragstart', handleDragStart);
          item.addEventListener('dragover', handleDragOver);
          item.addEventListener('dragenter', handleDragEnter);
          item.addEventListener('dragleave', handleDragLeave);
          item.addEventListener('dragend', handleDragEnd);
          item.addEventListener('drop', handleDrop);
        });

        //Mobile TouchAPis
        // attaching each event listener
      //   items.forEach(function(item) {
      //     // item.addEventListener('touchstart', handleDragStart);
      //     // item.addEventListener('touchmove', handleDragEnter);
      //     // item.addEventListener('touchleave', handleDragLeave);
      //     // item.addEventListener('touchend', handleDragEnd);
      //     // item.addEventListener('drop', handleDrop);

      //       // attaching each event listener
      //       item.addEventListener('touchstart', function(){
      //         console.log('btn touched');
      //       })
      //       item.addEventListener('touchend', function(){
      //         console.log('btn leaved');
      //       })
      //       item.addEventListener('touchmove', function(){
      //         console.log('btn leaved');
      //       })
      //       item.addEventListener('touchleave', function(){
      //         console.log('btn moving end');
      //       })
      //       item.addEventListener('touchcancel', function(){
      //         console.log('btn moving cancel');
      //       })

      //     });
      }





      function initMobile(){
        items = document.querySelectorAll('.container-grid .box');

      }









      initListeners();
    
  });
  