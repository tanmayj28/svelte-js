<script>
  export let reddish;
  export let greeinsh;
  export let blueish;

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  $: rbgHex = rgbToHex(reddish, greeinsh, blueish);
</script>

<div class="row">
  <div class="column">
    <div id="color" style="background-color: rgb({reddish}, {greeinsh}, {blueish});"></div>
  </div>
</div>

<label for="hexValue">Hex: {rbgHex}</label>

<style>
  #color {
    height: 300px;
    border: dashed 5px;
  }
</style>