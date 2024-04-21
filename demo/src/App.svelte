<script>
  let colorList = ['red', 'green', 'blue'];
  let color = '';
  setTimeout(() => {
    colorList = [...colorList, 'white'];
  }, 2000);

  function addToList() {
    colorList = [...colorList, color];
    color = '';
  }
</script>

<ul>
  {#each colorList as color}
  <li>{color}</li>
  {/each}
</ul>

<input type="text" name="color" id="color" bind:value={color}>
{#if color !== ''}
  <button type="submit" on:click={addToList}>Add Color</button>
{/if}