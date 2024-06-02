<script>
  /**  @type {import('./$types').ActionData} */
	export let form;
  import { enhance } from '$app/forms';
</script>

<h1>Contact</h1>
{#if form && form.success}
  <h2>Form submitted!</h2>
{:else}
  <form use:enhance method="POST">
    <label for="email">Email:</label>
    <input name="email" type="email" id="email">
    <br/>
    {#if form && form.errors && form.errors.email}
      <p>{form.errors.email}</p>
    {/if}
    <label for="message">Message:</label>
    <br/>
    <textarea name="message" id="message" cols=30 rows=10></textarea>
    {#if form && form.errors && form.errors.message}
      <p>{form.errors.message}</p>
    {/if}
    <br/>
    <button type="submit">Submit</button>
  </form>
{/if}
