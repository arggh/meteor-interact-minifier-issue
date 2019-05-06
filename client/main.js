import interact from 'interactjs';

interact('#server-render-target').draggable({
  onmove(event) {
    console.log(event.pageX,
                event.pageY)
  }
});