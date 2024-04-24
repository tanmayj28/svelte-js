<script>
  import { onMount, onDestroy } from "svelte";
  let quote = '';
  let loading = true;
  let error = false;

  onMount(async () => {
    try {
      const url  = 'https://zenquotes.io/api/random';
      let response = await fetch(url);
      const [quoteMessage] = await response.json();
      quote = quoteMessage.q;
    } catch(e) {
      error = true;
    }
    loading = false;
  })

  onDestroy(() => {
    console.log('destroyed!!')
  })
</script>

{#if loading}
  <h2>Loading . . .</h2>
  {:else if error}
  <h2>Quote API not working!</h2>
  {:else}
  <h2>Quote: {quote}</h2>
{/if}