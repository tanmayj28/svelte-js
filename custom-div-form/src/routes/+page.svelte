<script>
  /**  @type {import('./$types').ActionData} */
  export let form;
  import { enhance } from '$app/forms';
</script>

<h1>Div Creator Form:</h1>
{#if form && form.success}
  <h2>Your DIV:</h2>
  <div style="background-color: {form.color}; width: {form.width}px; height:{form.height}px;"></div>
{:else}
  <form use:enhance method="post">
    <label for="width">Width:</label>
    <input type="number" id="width" name="width" value="1" min="0" max="2500">
    <br>

    {#if form && form.errors && form.errors.width}
      <p>{form.errors.width}</p>
    {/if}

    <label for="width">Height:</label>
    <input type="number" id="height" name="height" value="1" min="0" max="2500">
    <br>

    {#if form && form.errors && form.errors.height}
      <p>{form.errors.height}</p>
    {/if}

    <label for="color">Color:</label>
    <select name="color" id="color">
      <option value="red">Red</option>
      <option value="blue" selected>Blue</option>
      <option value="green">Green</option>
    </select>
    {#if form && form.errors && form.errors.color}
      <p>{form.errors.color}</p>
    {/if}
    <br>

    <button type="submit">Generate</button>
  </form>

{/if}
