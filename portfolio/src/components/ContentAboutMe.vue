<template>
<div id="AboutContent">
  <h1>Deze pagina gaat over mij</h1>
  <p>Ik ben Abdel Hamid saib, een {{getAge}} jaar oude CMGT student op Hogeschool Rotterdam.<br>
  Ik was al bezig met computers sinds ik 5 was, met basis excel en word. Op een dag vroeg ik me pa hoe ik games moest maken. <br>
    Dus hij zette mij voor de pc en installeerde game maker studio. <br>
    Ik moest flappy bird namaken met een tutorial, pas daarna mocht ik eten XD.
  </p>
</div>
</template>

<script>
export default {
  name: "ContentAboutMe",
  computed:{
    getAge(){
      let dob = new Date("07/10/2005");
      let month_diff = Date.now() - dob.getTime();
      var age_dt = new Date(month_diff);
      var year = age_dt.getUTCFullYear();
      //now calculate the age of the user
      var age = Math.abs(year - 1970);
      return age
    }
  }
}
</script>

<style scoped>
#AboutContent{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>