<script>
  async function getQoute() {
    const url = 'https://zenquotes.io/api/random';
    const response = await fetch(url);
    const [quoteInfo] = await response.json();
    return quoteInfo;
  }

  let promiseQuote = getQoute();

  function refreshQoute() {
    promiseQuote = getQoute();
  }
</script>

{#await promiseQuote}
  <h2>Loading Quote. . . .</h2>
{:then quoteInfo} 
  <h2>{quoteInfo.q}</h2>
  <h2>Author: {quoteInfo.a}</h2>
{:catch error}
  <h2>Error: {error.message}</h2>
{/await}

<button on:click={refreshQoute}>Refresh Quote</button>