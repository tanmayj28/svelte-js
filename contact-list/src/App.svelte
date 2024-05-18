<script>
  import ContactList from './ContactList.svelte';
  import ContactForm from './ContactForm.svelte'
</script>

<div class="row">
  <div class="column">
    <h1>Contact List</h1>
  </div>
</div>
<ContactForm />
<ContactList />

<style>
  h1 {
    text-align: center;
  }
</style>
