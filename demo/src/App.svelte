<script>
  import countStore from "./stores/count.store";
  import { onDestroy } from 'svelte';
  const unsub = countStore.subscribe((number) => {
    console.log(number, 'Count Store');
  });

  // This would just set a new value for the  number in the store.
  // setTimeout(() => {
  //   countStore.set(20);
  // }, 2000);

  // This takes and updates the existing store value, i.e. adds 1 to the existing count. Update can take in an anonyous function as input.
  // setTimeout(() => {
  //   countStore.update(n => n + 1);
  // }, 2000);

  onDestroy(() => {
    unsub();
  });

  function addToStore() {
    countStore.addToStore();
  }

  function subtractFromStore() {
    countStore.subtractFromStore();
  }
</script>

<h1>
  {$countStore}
</h1>

<button on:click={addToStore}>Add</button>
<button on:click={subtractFromStore}>Subtract</button>
<button on:click={() => { countStore.reset(); }}>Reset</button>
