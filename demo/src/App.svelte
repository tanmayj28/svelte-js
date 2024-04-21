<!-- Reactive Statement: So, if anything on the right changes, it would reload the variable on left or rerun the code as seen in below console.log logic. -->

<script>
  let name = 'Tanmay';
  let initName = name.toUpperCase();
  $: capitalizedName = name.toUpperCase();

  let red = 10;
  let green = 0;
  let blue = 0;
  $: colorValue = color(red, green, blue);

  function color(r,g,b) {
    return `rgb(${r},${g},${b})`;
  }

  setTimeout(() => {
    green += 10;
  },1500);

  $: console.log(green);
  $: {
    console.log(green, 'Green Value Updates');
    console.log(red, 'Red Value Same');
  }
</script>

<h2>Name: {name}</h2>
<h2>Name: {initName}</h2>
<h2>Name: {capitalizedName}</h2>

<input type="text" name="Name" id="name" bind:value={name}>

<label for="color">Color Values: {colorValue}</label>
