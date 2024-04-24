<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";
  let numbers = [];
  let autoScroll = false;
  let unorderedListElement;

  onMount(() => {
    console.log('mounted!')
    const intervalId = setInterval(() =>{
      numbers = [...numbers, numbers.length + 1];
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log('Also destroyed! (but last)!')
    }
  });

  beforeUpdate(() => {
    console.log('before update!!')
  });

  afterUpdate(() => {
    console.log('after Update!!');
    if(autoScroll) {
      unorderedListElement.scrollTo(0, unorderedListElement.scrollHeight);
    }
  });

  onDestroy(() => {
    console.log('destroyed!!')
  });
</script>

<h2>Mounted!</h2>

<ul bind:this={unorderedListElement}>
  {#each numbers as number (number)}
    <li>{number}</li>
  {/each}
</ul>
<label>Autoscroll: <input type="checkbox" bind:checked={autoScroll}></label>

<style>
  ul {
    max-height: 100px;
    border: solid black 1px;
    overflow: scroll;
  }
</style>