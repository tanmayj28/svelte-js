<!-- Adding export makes this variable a prop -->

<script>
  export let fontSize = 40;

  setInterval(() => {
    if(fontSize === 100) {
      fontSize = 5;
    } else {
      fontSize += 1;
    }
  }, 30);
</script>

<h1 style="font-size: {fontSize}px;">You Rock!! and roll!!</h1>
