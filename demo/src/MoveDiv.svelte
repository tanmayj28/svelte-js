<!-- This for some reason doesn't work when imported. Make it work as a future task. -->

<script>
  export let paddingTop = 100;
  export let paddingLeft = 100;
  let arrowPressed;

  function onKeyup(e) {
    console.log(e.key);
    arrowPressed = e.key;
    if(arrowPressed.includes("Up")) {
      paddingTop -= 10;
    } else if(arrowPressed.includes("Down")) {
      paddingTop += 10;
    } else if(arrowPressed.includes("Right")) {
      paddingLeft += 10;
    } else if(arrowPressed.includes("Left")) {
      paddingLeft -= 10;
    }
  }
</script>

<svelte:window on:keyup={onKeyup}/>
<div style="left={paddingLeft}px; top={paddingTop}px;"></div>

<style>
  div {
    height: 100px;
    width: 100px;
    position: absolute;
    background-color: bisque;
  }
</style>