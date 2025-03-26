
var dropZonesLoaded_flag = true;

interact.maxInteractions(Infinity)


var drag_pos = {x: 0, y: 0};

/**
 * CallBack dragging
 * @param {*} e 
 */
function dragging(e) {
  drag_pos.x += e.dx;
  drag_pos.y += e.dy;

  e.target.style.transform = 'translate(' + drag_pos.x + 'px, ' + drag_pos.y + 'px)';
}
/**
 * Callback dragged
 * @param {*} e 
 */
function dragged(e) {
  drag_pos.x = 0;
  drag_pos.y = 0;
  e.target.style.transform = 'translate(0px, 0px)';
  
}
/*************** */
/* setup all sentence element (class js-drag) as draggable elements. */
/*************** */
function dropZonesReset(){
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
    });
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
      })
      .on('dragleave', (event) => {
        removeClass(event.target, '-drop-over')
      })
      .on('drop', (event) => {
        removeClass(event.target, '-drop-over');
        var inco= event.relatedTarget.textContent;
        var exchamge= event.target.textContent;
        event.target.textContent = inco;
        event.relatedTarget.textContent = exchamge;
        // alert('he llegado!!');
        // setTimeout(() => { checkResults(); }, 300); 
        
      })
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