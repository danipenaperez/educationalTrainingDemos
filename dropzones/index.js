/* eslint-disable import/no-absolute-path */
// import interact from '@interactjs/interactjs'



var sentence = window.prompt("Escribe la frase", "no se me ocurre nada");
const sentenceElements = sentence.split(" ");

shuffleArray(sentenceElements); //Disorder
for(i=0;i<sentenceElements.length;i++){
  var ele = sentenceElements[i];
  $(".options-wrapper").append('<div id="drag'+i+'" class="draggable js-drag">'+ele+'</div>');
  
}



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



let transformProp
const dragPositions = [1, 2, 3, 4].reduce((acc, n) => {
  acc[`drag${n}`] = { x: 0, y: 0 }
  return acc
}, {})

interact.maxInteractions(Infinity)


var drag_pos = {x: 0, y: 0};
function dragging(e) {
  drag_pos.x += e.dx;
  drag_pos.y += e.dy;

  e.target.style.transform = 'translate(' + drag_pos.x + 'px, ' + drag_pos.y + 'px)';
}

function dragged(e) {
  drag_pos.x = 0;
  drag_pos.y = 0;
  e.target.style.transform = 'translate(0px, 0px)';
  
}



// setup draggable elements.
interact('.js-drag').draggable({
  inertia: true,
  listeners: {
    start (event) {
      // const position = dragPositions[event.target.id]
      // position.x = parseInt(event.target.getAttribute('data-x'), 10) || 0
      // position.y = parseInt(event.target.getAttribute('data-y'), 10) || 0


      // addClass(event.target, '-movement')
    },
    move :dragging,
    end:dragged
  },
})

// setup drop areas.
// dropzone #1 accepts draggable #1
// setupDropzone('#drop1', '#drag1')
// dropzone #2 accepts draggable #1 and #2
// setupDropzone('#drop2', '#drag1, #drag2')
// every dropzone accepts draggable #3
// setupDropzone('.js-drop', '#drag3')


for(i=0;i<sentenceElements.length;i++){
  setupDropzone('#drag'+i);
}



/**
 * Setup a given element as a dropzone.
 *
 * @param {HTMLElement|String} target
 * @param {String} accept
 */
function setupDropzone (target, accept) {
  interact(target)
    .dropzone({
      accept: accept,
      ondropactivate: function (event) {
        addClass(event.relatedTarget, '-drop-possible')
      },
      ondropdeactivate: function (event) {
        removeClass(event.relatedTarget, '-drop-possible')
      },
    })
    .on('dropactivate', (event) => {
      const active = event.target.getAttribute('active') | 0

      // change style if it was previously not active
      if (active === 0) {
        addClass(event.target, '-drop-possible')
        // event.target.textContent = 'Drop me here!'
      }

      event.target.setAttribute('active', active + 1)
    })
    .on('dropdeactivate', (event) => {
      const active = event.target.getAttribute('active') | 0

      // change style if it was previously active
      // but will no longer be active
      if (active === 1) {
        removeClass(event.target, '-drop-possible')
        // event.target.textContent = 'Dropzone'
      }

      event.target.setAttribute('active', active - 1)
    })
    .on('dragenter', (event) => {
      addClass(event.target, '-drop-over')
      // event.relatedTarget.textContent = "I'm in"
      // var inco= event.relatedTarget.textContent+"pico";
      // var exchamge= event.target.textContent+"paco";
      // event.target.textContent = inco;
      // event.relatedTarget.textContent = exchamge;
    })
    .on('dragleave', (event) => {
      removeClass(event.target, '-drop-over')
      // event.relatedTarget.textContent = 'Drag me…'
    })
    .on('drop', (event) => {
      removeClass(event.target, '-drop-over');
      var inco= event.relatedTarget.textContent;
      var exchamge= event.target.textContent;
      event.target.textContent = inco;
      event.relatedTarget.textContent = exchamge;
      // alert('he llegado!!');
      setTimeout(() => { checkResults(); }, 300); 
      
    })
}

function addClass (element, className) {
  if (element.classList) {
    return element.classList.add(className)
  } else {
    element.className += ' ' + className
  }
}

function removeClass (element, className) {
  if (element.classList) {
    return element.classList.remove(className)
  } else {
    element.className = element.className.replace(new RegExp(className + ' *', 'g'), '')
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

/* eslint-disable multiline-ternary */
interact(document).on('ready', () => {
  transformProp =
    'transform' in document.body.style
      ? 'transform'
      : 'webkitTransform' in document.body.style
        ? 'webkitTransform'
        : 'mozTransform' in document.body.style
          ? 'mozTransform'
          : 'oTransform' in document.body.style
            ? 'oTransform'
            : 'msTransform' in document.body.style
              ? 'msTransform'
              : null
})
/* eslint-enable multiline-ternary */
