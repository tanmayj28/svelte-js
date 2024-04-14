<script>
  let name = 'Jain';
  let disabled = false;
  let fontSize = 30;

  setTimeout(() => {
    name = 'Jainism'
  }, 5000);
</script>

<h2>Hello World!</h2>
<input type="range" bind:value={fontSize}>
<h2>FontSize is: {fontSize}</h2>
<h2 style="font-size: {fontSize}px;">Name is: {name}</h2>
<!-- this won't update the actual value of variable when you update it from UI, so you need to bind it. -->
<input type="text" bind:value={name}>

<button disabled={disabled}> Click Me! </button>
