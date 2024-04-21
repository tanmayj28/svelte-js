<script>
  export let name;
  export let color;
  let score = 20;
</script>

<div class='col border-box' style="border: 2px dotted {color};">
  <div class='container'>
    <div class="row">
      <h2 class='left-padding'>
        Team {name}: {score}
      </h2>
    </div>

    <div class="row btn-left-padding">
      <button style="background-color: green;">
        <h2>+</h2>
      </button>
      <button style="background-color: red;">
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
