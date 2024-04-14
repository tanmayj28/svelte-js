<script>
  import Fun from "./Fun.svelte";
</script>

<h1>Hello World!!</h1>
<h2>This is H2 from App Component</h2>

<!-- Even though FUN component has H2 tag it won't be styled because styles are scoped inside the HTML component they are in. -->
<Fun />

<style>
  h1 {
    color: blue
  }

  h2 {
    color: green
  }

  /* This is not a good way to do CSS, what you can do is create a global.css and import in main.js and write your styles in there. */

  :global(h2) {
    color: yellow
  }
</style>
