<script>
  // You can pass on the custom event `on:form_submit` to child component's imported FormContainer component directly from here. You don't have to call any function from FormContainer.

  // What happens is as we are not responding to the custom event it passes it to the parent to respond to instanceof. So, it happens in Form component and since we are not reacting to the event it passes it to FormContainer, which also doesn't respond with a function, so that is further passed to it's parent App.svelte. You can even do the same for other events also like Clikc etc.

  // import Form from "./Form.svelte";
  import FormContainer from "./FormContainer.svelte";
  import ChildEvent from "./ChildEvent.svelte";

  function onFormSubmit(e) {
    console.log(e);
    const { name, age } = e.detail;
    console.log(name, age, 'Event Details recieved!')
  }
</script>

<!-- <Form on:form_submit={onFormSubmit}/> -->
<FormContainer on:click={() => {alert('Button Clicked!');}} on:form_submit={onFormSubmit} />
<ChildEvent on:custom_event={(e) => alert(e.detail)} />