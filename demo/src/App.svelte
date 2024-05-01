<script>
  import GeoLocation from "./GeoLocation.svelte";
  let checked = false;
</script>

<input type="checkbox" bind:checked={checked}>

{#if checked}
  <GeoLocation />
{/if}
