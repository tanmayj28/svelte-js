<script>
  let colorName = '';
  let isChecked = false;
</script>

{#if colorName.toLowerCase() === 'red'}
  <h2>Red</h2>
  {:else if colorName.toLowerCase() === 'green'}
  <h2>Green</h2>
  {:else if colorName.toLowerCase() === 'blue' }
  <h2>Blue</h2>
  {:else}
  <h2>Not RGB!</h2>
{/if}

<input type="text" name="color" id="color" bind:value={colorName}>
<input type="checkbox" bind:checked={isChecked}>
<hr>
{#if isChecked}
<h2>You Checked it yo!!</h2>
{/if}
