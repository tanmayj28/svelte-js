<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";

  onMount(() => {
    console.log('Mounted!')

    return () => {
      console.log('Also destroyed! (but last)!')
    }
  });

  beforeUpdate(() => {
    console.log('before update!!')
  });

  afterUpdate(() => {
    console.log('after Update!!')
  });

  onDestroy(() => {
    console.log('destroyed!!')
  });
</script>

<h2>Mounted!</h2>