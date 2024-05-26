<script>
  let x = 10;
  let y = 10;
  let moving = false;

  window.addEventListener("mousemove", (event) => {
    if (moving) {
      x += event.movementX;
      y += event.movementY;
    }
  });

  function divMover(node){
    node.addEventListener("mousedown", () => {
      moving = true;
      node.addEventListener("mousemove", () => {
        node.style.left = x + 'px';
        node.style.top = y + 'px';
      });
    });

    node.addEventListener("mouseup", () => {
      moving = false;
      node.removeEventListener("mousedown", () => {});
      node.removeEventListener("mousemove", () => {});
    });

    return {
      destroy() {
        node.removeEventListener("mouseup");
      }
    }
  }
</script>

<div use:divMover style="left: {x}px; top: {y}px;">
  <slot name="hello" />
</div>

<style>
  div {
    width:50px;
    height: 20px;
    border: 1px solid black;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
