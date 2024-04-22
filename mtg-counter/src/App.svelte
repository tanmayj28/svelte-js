<script>
  import TeamBoard from "./TeamBoard.svelte";
  let redScore = 20;
  let blueScore = 20;
  $: redWon = blueScore === 0;
  $: blueWon = redScore === 0;
  $: gameOver = redWon || blueWon;

  function resetGame() {
    redScore = 20;
    blueScore = 20;
  }
</script>

<div class="row mt-2">
  <div class="col">
    <h1 class="text-center">MTG Counter</h1>
  </div>
</div>
<div class="row">
  <TeamBoard name="Red" color="red" bind:score={redScore} {gameOver}/>
  <TeamBoard name="Blue" color="blue" bind:score={blueScore} {gameOver}/>
</div>

{#if !gameOver}
<div class="row mt-3">
  <div class="col">
    <button class="btn btn-warning w-100" on:click={resetGame}>Reset Game</button>
  </div>
</div>
{:else}
<div class="row">
  <div class="col mt-2">
    {#if blueWon}
      <h2 class="text-center text-primary">
        Blue Won!
      </h2>
    {:else}
      <h2 class="text-center text-danger">
        Red Won!
      </h2>
    {/if}
  </div>
</div>
<div class="row mt-1">
  <div class="col">
    <button class="btn btn-success w-100" on:click={resetGame}>New Game</button>
  </div>
</div>

{/if}
i love you