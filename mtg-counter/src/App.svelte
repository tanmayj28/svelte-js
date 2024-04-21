<script>
  import TeamBoard from "./TeamBoard.svelte";
</script>

<div class="container">
  <div class="row">
    <h1 style="padding-left:40%;">MTG Counter</h1>
  </div>
  <div class="row">
    <TeamBoard name="Red" color="red"/>
    <TeamBoard name="Blue" color="blue"/>
  </div>
  <div class="row" style="padding-top: 10px;">
    <button style="width: 100%;background-color:orange;">Reset Game</button>
  </div>
</div>
