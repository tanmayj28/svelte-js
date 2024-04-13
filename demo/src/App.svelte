<script>
  let usefulVars = 'This should be available in HTML';
  let name = 'Tanmay';
  let favColor = 'blue';

  setTimeout(function() {
    favColor = 'yellow'
  }, 2000)
</script>

<h1>Hello World!</h1>
<h2>
  {usefulVars}

  <h3>Name:</h3>
  <p style="color: {favColor};">{name}</p>
</h2>