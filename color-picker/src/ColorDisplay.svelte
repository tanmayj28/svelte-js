<script>
  export let reddish;
  export let greeinsh;
  export let blueish;
</script>

<div class="row">
  <div class="column">
    <div id="color" style="background-color: rgb({reddish}, {greeinsh}, {blueish});"></div>
  </div>
</div>

<style>
  #color {
    height: 300px;
    border: dashed 5px;
  }
</style>