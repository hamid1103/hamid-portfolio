<template>
  <div id="HomeContent">
    <img src="../assets/35217917.png" alt="profile foto" id="profilefoto">
    <h1>Hamid Saib</h1>

    <h2>
      Hallo! Ik ben Abdel Hamid Saib.
    </h2>

    <p>
      Ik ben een CMGT student op het HR(Hogeschool Rotterdam).
    </p>

    <p>
      Je kan deze website navigeren via de sidebar aan de linkerkant. De zwarte balk bovenaan geeft af-en-toe tool tips.
    </p>

    <h3>Deze website werd gemaakt met: </h3>
    <div id="toolsUsed">
      <div class="tool">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" alt="Vue Logo">
        <h1>Vue</h1>
      </div>
      <div class="tool">
        <img src="https://vitejs.dev/logo-with-shadow.png" alt="Vite Logo">
        <h1>Vite</h1>
      </div>
      <div class="tool">
        <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" alt="Catppuccin logo">
        <h1>Catppuccin palette</h1>
      </div>
    </div>

  </div>


</template>

<script>
export default {
  name: "ContentHome"
}
</script>

<style scoped>

.tool{

}
.tool img,svg {
width: 10vw;
height: 10vh;
  object-fit: contain;
}

.tool h1{
font-family: 'Roboto', sans-serif;
  display: block;
  font-size: 2em;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  font-weight: bold;
}

#toolsUsed{
  width: 100%;
  min-height: 10vh;
  background-color: var(--ctp-mocha-crust);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  padding-bottom: 2vh;
  padding-top: 2vh;
}

#HomeContent{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
#HomeContent #profilefoto{
  margin-top: 1vh;
  border: black 2px solid;
  border-radius: 50% !important;
}
#HomeContent h1{
  position: relative;
}

</style>