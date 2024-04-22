<script>
  export let name;
  export let color;
  export let score;
  export let gameOver;

  function add() {
   score += 1; 
  }

  function minus() {
   score -= 1; 
  }
</script>

<div class='col border-box' style="border: dashed 5px {color};">
  <div class='container'>
    <div class="row">
      <h2 class='left-padding'
      class:text-danger={name === 'Red'} class:text-primary={name === 'Blue'}>
        Team {name}: {score}
      </h2>
    </div>

    <div class="row btn-left-padding">
      <button class="btn btn-success" on:click={add} disabled={gameOver}>
        <h2>+</h2>
      </button>
      <button class="btn btn-danger" on:click={minus} disabled={gameOver}>
        <h2>-</h2>
      </button>
    </div>
  </div>
</div>

<style>
  .border-box {
    width: 100%;
    height: 150px;
  }

  .left-padding {
    padding-left: 35%;
  }

  .btn-left-padding {
    padding-left: 45%;
  }
</style>
