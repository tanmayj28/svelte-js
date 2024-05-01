<script>
  import store from './stores/GeeLocation.Store'
  const unsub = store.subscribe(info => {
    console.log(info);
  }) // this returns a function which you can use to usubscrive to the store.

  console.log(unsub);
</script>
