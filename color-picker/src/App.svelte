<script>
  import ColorSlider from "./ColorSlider.svelte";
  import ColorDisplay from "./ColorDisplay.svelte";

  let reddish = 10;
  let greeinsh = 0;
  let blueish = 0;
</script>

<div class="row">
  <div class="column">
    <h1>Color Picker</h1>
  </div>
</div>

<div class="row">
  <div class="column">
    <form>
      <ColorSlider colorName='Red' bind:colorValue={reddish}/>
      <ColorSlider colorName='Green' bind:colorValue={greeinsh}/>
      <ColorSlider colorName='Blue' bind:colorValue={blueish}/>
    </form>
  </div>
</div>

<ColorDisplay {reddish} {greeinsh} {blueish} />