<script>
  import { onMount, onDestroy } from "svelte";

  onMount(() => {
    console.log('mounted!!');

    return () => {
      console.log('Also runs on destroy but after the onDestroy');
    }
  })

  onDestroy(() => {
    console.log('destroyed!!')
  })
</script>

<h2>Checked!</h2>