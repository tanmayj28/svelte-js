<script>
  import Box from './Box.svelte';
</script>

<Box>
  <h1 slot="top">Hello world!</h1>
  <div slot="bottom">
    <p>How are you doing?</p>
  </div>
  <p slot="middle">Hi!! All gucci.</p>
</Box>
