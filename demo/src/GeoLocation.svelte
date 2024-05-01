<script>
  import GeoLocationStore from './stores/GeeLocation.Store';
  import { onDestroy } from "svelte";

  // store's subscribe function returns a unsubcribe function, so we can call it when we destroy the component.

  // const unsub = GeoLocationStore.subscribe(info => {
  //   console.log('info from GL store', info);
  // });

  // onDestroy(() => {
  //   // Unsubscribing prevents memory leak issues, as we  don't want to keep the component alive forever.
  //   console.log('Unsubscribing. . .', unsub);
  //   unsub();
  // })
</script>

<!-- with the $ sign syntax, Svelte will unsubscribe for you. -->
{#if !$GeoLocationStore.location && !$GeoLocationStore.errMsg}
  <h2>
    Waiting for your location...
  </h2>
{:else if $GeoLocationStore.errMsg}
  <h2>
    Error: {$GeoLocationStore.errMsg}
  </h2>
{:else}
  <h2>
    Your current position is at latitude: {$GeoLocationStore.lat}, longitude:{$GeoLocationStore.long}.
  </h2>
{/if}
