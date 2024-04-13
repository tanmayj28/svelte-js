<script>
  import Fun from './Fun.svelte';
  import ChangeColor from './ChangeColor.svelte';
  let size = 80;
  let color = 'green';
</script>

<h1>Font Size is: {size}</h1>
<Fun fontSize={size}/>
<Fun />

<!-- This will bind the parent components variable to child component i.e. child compoenent will be able to update the value of parent components variables. -->
<Fun bind:fontSize={size}/>

<ChangeColor />

<!-- Shorthand if both exported variable and setting variable have same name. -->
<ChangeColor {color} />