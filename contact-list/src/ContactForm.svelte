<script>
  import { onDestroy } from 'svelte';
  import contactStore from './store/contact.store';
  let name = '';
  let phone = '';
  let description = '';
  $: title = $contactStore.editId ? 'Edit Contact' : 'Add Contact'

  function handleSubmit() {
    if($contactStore.editId === undefined) {
      contactStore.add(name, phone, description);
    } else {
      contactStore.edit(name, phone, description, $contactStore.editId);
    }

    name = '';
    phone = '';
    description = '';
  }

  const unsub = contactStore.subscribe(({ contacts, editId }) => {
    if(editId !== undefined) {
      const contact = contacts.find(c => c.id === editId);
      name = contact.name;
      phone = contact.phone;
      description = contact.description;
    }
  })

  onDestroy(() => {
    unsub();
  });
</script>

<h1>Contact Form</h1>
<div class="row">
  <div class="column">
    <h3>
      {title}
    </h3>
  </div>
</div>
<div class="row">
  <div class="column">
    <form on:submit|preventDefault={handleSubmit}>
      <fieldset>
        <label for="nameField">Name</label>
        <input bind:value={name} type="text" placeholder="CJ Patoilo" id="nameField">

        <label for="phoneField">Phone</label>
        <input bind:value={phone} type="text" placeholder="919090909090" id="phoneField">

        <label for="description">Description</label>
        <textarea bind:value={description} id="description"></textarea>

        <button class="button" type="submit">{title}</button>
      </fieldset>
    </form>
  </div>
</div>
