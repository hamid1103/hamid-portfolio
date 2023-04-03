<template>
  <div id="HomeContent">
    <img src="../assets/35217917.png" alt="profile foto">
    <h1>Hamid Saib</h1>

    <h2>
      Hallo! Ik ben Abdel Hamid Saib.
    </h2>

    <p>
      Ik ben een CMGT student op het HR(Hogeschool Rotterdam).
    </p>

    <h2>
      Je kan deze website navigeren via de sidebar aan de linkerkant. De zwarte balk bovenaan geeft af-en-toe tool tips.
    </h2>

  </div>


</template>

<script>
export default {
  name: "ContentHome"
}
</script>

<style scoped>
#HomeContent{
  margin-top: 1vh;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
#HomeContent img{
  border-radius: 50% !important;
}
#HomeContent h1{
  position: relative;
}

</style>