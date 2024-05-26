<script>
  import Draggable from './Draggable.svelte';
  import HelloSlot from './HelloSlot.svelte';
</script>

<Draggable left={30} top={30}>
  <h1>Hello!</h1>
</Draggable>

<HelloSlot>
  <div slot="hello">
    Hello
  </div>
</HelloSlot>
