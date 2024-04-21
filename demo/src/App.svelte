<script>
  let colorList = ['red', 'green', 'blue'];
  let color = '';
  setTimeout(() => {
    colorList = [...colorList, 'white'];
  }, 2000);

  function addToList() {
    if(colorList.includes(color)) {
      color = '';
      return alert('Duplicate Key Entered!')
    }
    colorList = [color, ...colorList];
    color = '';
  }
</script>

<ul>
  <!-- Since any update to colorList triggers a re-render of all list items, we can pass a unique key like here as color and only re-render based on the unique key. -->
  {#each colorList as color, index (color)}
  <li>{index+1}). {color}</li>
  {/each}
</ul>

<input type="text" name="color" id="color" bind:value={color}>
{#if color !== ''}
  <button type="submit" on:click={addToList}>Add Color</button>
{/if}