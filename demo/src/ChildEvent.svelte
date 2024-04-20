<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleCustomEvent(e) {
    dispatch("custom_event", Math.random())
  }
</script>

<div on:click={handleCustomEvent}></div>

<style>
  div {
    width: 80%;
    height: 300px;
    margin-top: 30px;
    background-color: aquamarine;
  }
</style>