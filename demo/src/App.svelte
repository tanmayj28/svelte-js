<script>
  let left = 100;
  let top = 100;

  function onKeyup(e) {
    console.log(e.key)
    let arrowPressed = e.key
    if(arrowPressed.includes("Up")) {
      top -= 10;
    } else if(arrowPressed.includes("Down")) {
      top += 10;
    } else if(arrowPressed.includes("Right")) {
      left += 10;
    } else if(arrowPressed.includes("Left")) {
      left -= 10;
    }
  }

  function onClick(e) {
    console.log('onClick Fired.');
    alert('Clicked!');
  }

  // This is triggered every time Input Value is ChannelMergerNode, i.e. every value for which Range is dragged
  function onInput(e) {
    console.log(e.target.value, 'onInput');
  }

  // This is triggered when you change the range and release the mouse and set a final value for a var
  function onChange(e) {
    console.log(e, 'onChange');
  }

  // Tracks every keyboard key you press.
  function onKeyPress(e) {
    console.log(e.key, e, 'onKeyPress')
  }

  function handleSubmit(e) {
    console.log('prevents Default!');
    // e.preventDefault();
  }
</script>

<button on:click|once={onClick}>Click me!</button>
<input type="range" on:input={onInput} on:change={onChange}>

<!-- onKeyPress registers all keys except up,down,left,right arrows. -->
<!-- <svelte:window on:keypress={onKeyPress}/> -->

<!-- onKeyUp: To register arrow keys, we can use onKeyUp but you can't hold it down and have multiple key strokes registered. -->
<svelte:window on:keyup={onKeyup}/>

<!-- onKeydown: This picks up multiple  key strokes if you hold the arrow keys. -->
<!-- <svelte:window on:keyup={onKeydown}/> -->

<form on:submit|preventDefault|stopPropagation={handleSubmit}>
  <button type="submit">Submit Form</button>
</form>

<div style="left: {left}px; top: {top}px;"></div>

<style>
  div {
    width: 100px;
    height: 100px;
    background-color: aqua;
    position: absolute;
  }
</style>

<!-- 
## on:click|once={}
- This allows user to click the button but only once.

## preventDefault && stopPropogation:

- In JavaScript, both `stopPropagation()` and `preventDefault()` are methods used to manipulate events, but they serve different purposes:

1. **`stopPropagation()`:**
   - `stopPropagation()` is a method used to stop the propagation of an event through the DOM tree. When an event occurs on an element, it typically bubbles up through its ancestors unless explicitly stopped.
   - By calling `stopPropagation()` on an event object within an event handler, you prevent the event from propagating to the parent elements.
   - This method only affects the event propagation and does not prevent the default behavior associated with the event.

   Example:
   ```javascript
   document.getElementById('childElement').addEventListener('click', function(event) {
       event.stopPropagation();
       // Other code
   });
   ```

2. **`preventDefault()`:**
   - `preventDefault()` is a method used to prevent the default behavior of an event. Many HTML elements have default behaviors associated with certain events. For example, clicking on a link (`<a>` element) typically navigates to the URL specified in its `href` attribute.
   - By calling `preventDefault()` on an event object within an event handler, you prevent the browser from executing the default behavior associated with that event.
   - Unlike `stopPropagation()`, which affects event propagation, `preventDefault()` only affects the default behavior of the event and does not stop event propagation.

   Example:
   ```javascript
   document.getElementById('linkElement').addEventListener('click', function(event) {
       event.preventDefault();
       // Other code
   });
   ```

In summary:

- Use `stopPropagation()` to stop the event from propagating through the DOM tree.
- Use `preventDefault()` to prevent the default behavior associated with the event.

In some cases, you might need to use both methods together to achieve the desired behavior, depending on the requirements of your application. -->
