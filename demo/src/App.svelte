<script>
  import LifeCycle from "./LifeCycle.svelte";
  let checked = false;
</script>

<input type="checkbox" bind:checked={checked}>

{#if checked}
  <LifeCycle />
{/if}
