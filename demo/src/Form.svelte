<script>
  import { createEventDispatcher } from "svelte";
  let name = 'Tanmay';
  let age = 28;
  const dispatch = createEventDispatcher();

  function onSubmit(e) {
    dispatch('form_submit', {
      name,
      age
    });
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <label for="name">Name</label>
  <input type="text" name="name" id="name" bind:value={name}>

  <label for="age">Age</label>
  <input type="number" name="age" id="age" bind:value={age}>

  <button type="submit">Submit</button>
</form>

<button on:click>Click Me</button>
