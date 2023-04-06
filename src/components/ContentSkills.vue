<template>
<div id="Skills">
  <div id="webdev" class="skill">
    <h1>Web Development 46%</h1>
    <div class="ProgBar">
      <div class="Prog">
      </div>
    </div>
  </div>
  <div id="nativedev" class="skill">
    <h1>Native Development 12%</h1>
    <div class="ProgBar">
      <div class="Prog">
      </div>
    </div>
  </div>
  <div id="gamedev" class="skill">
    <h1>Game Development 57%</h1>
    <div class="ProgBar">
      <div class="Prog">
      </div>
    </div>
  </div>
  <div id="linux" class="skill">
    <h1>Linux 63%</h1>
    <div class="ProgBar">
      <div class="Prog">
      </div>
    </div>
  </div>
  <div id="musicprod" class="skill">
    <h1>Music Production 23%</h1>
    <div class="ProgBar">
      <div class="Prog">
      </div>
    </div>
  </div>
</div>
<div id="Programming Languages">

</div>

<div id="Languages">
  
</div>
</template>

<script>
export default {
  name: "ContentSkills"
}
</script>

<style scoped>
@import "@catppuccin/palette/style";
.skill{
min-height: 5vh;
margin-top: 1em;
margin-bottom: 1em;
display: flex;
flex-direction: column;
justify-content: left;
}
.skill h1{
  font-size: 1.4em;
  text-align: left;
}

#Skills{
  margin: 3vh 1vh 1vh 1vh;
  background-color: var(--ctp-mocha-surface2);
  border: var(--ctp-mocha-subtext1) 2px solid;
  border-radius: 10px;
}

.skill .ProgBar {
  width: 100%;
  background-color: var(--ctp-mocha-overlay2);
  border-radius: 20px;
}

.skill .ProgBar .Prog {
  border-radius: 20px;
}

#webdev .ProgBar .Prog{
  width: 46%;
  height: 20px;
  background-color: var(--ctp-mocha-green);
}

#nativedev .ProgBar .Prog{
  width: 12%;
  height: 20px;
  background-color: var(--ctp-mocha-green);
}

#gamedev .ProgBar .Prog{
  width: 57%;
  height: 20px;
  background-color: var(--ctp-mocha-green);
}

#linux .ProgBar .Prog{
  width: 63%;
  height: 20px;
  background-color: var(--ctp-mocha-green);
}
#musicprod .ProgBar .Prog{
  width: 23%;
  height: 20px;
  background-color: var(--ctp-mocha-green);
}


</style>