<!-- An action is a function that gets run when an HTML Element loads on a page. -->
<script>
  let show = false;
  let width = 100;
  function exampleAction(node, {color, width}) {
    console.log(node);
    const contextFunc = (e) => {
      e.preventDefault();
      alert('Right Click!');
    };
    node.addEventListener('contextmenu', contextFunc);
    node.style.backgroundColor = color;
    node.style.width = width + 'px';
    return {
      destroy() {
        console.log('Destroy was called!');
        node.removeEventListener('contextmenu', contextFunc);
      },
      update({color, width}){
        node.style.backgroundColor = color;
        node.style.width = width + 'px';
      }
    }
  }
</script>

<input type="checkbox" bind:checked={show} />
{#if show}
  <div use:exampleAction={{color: '#AA0000', width}} />
{/if}
<input type="range" min=50 max=500 bind:value={width}>
<style>
  div {
    width: 300px;
    height: 300px;
    border: solid black 1px;
  }
</style>
