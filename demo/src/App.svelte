<script>
  import Fun from './Fun.svelte';
  let size = 80;
  setInterval(() => {
    if(size === 100) {
      size = 5;
    } else {
      size += 1;
    }
  }, 30);
</script>

<h1>Font Size is: {size}</h1>
<Fun fontSize={size}/>
<Fun />