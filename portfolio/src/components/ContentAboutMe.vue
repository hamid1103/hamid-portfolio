<template>
<div id="AboutContent">
  <h1>Deze pagina gaat over mij</h1>
  <p>Ik ben Abdel Hamid saib, een {{getAge}} jaar oude CMGT student op Hogeschool Rotterdam.
  Ik was al bezig met computers sinds ik 5 was, met basis excel en word. Op een dag vroeg ik me pa hoe ik games moest maken.
    Dus hij zette mij voor de pc en installeerde game maker studio.
    Ik moest flappy bird namaken met een tutorial, pas daarna mocht ik eten XD.
  </p>
  <h2>
    Interesses
  </h2>
  <h3>Development</h3>
  <p>Ik ben zeer geintereseert in het maken van apps en games. Ik zou graag willen werken aan leuke story based games, of apps die 
    helpen met development of development leuker maken. Hiermee leer ik ook native, game en web development.
    Ik heb voor deze portfolio moeten leren hoe ik werk met Vite, Vue en NodeJS.
    Ik vind het leuk om met nieuwe technologien te experimenteren. Ik had al geprobeert met react te werken maar dat vond ik te ingewikkeld.
  </p>
  <h3>Muziek</h3>
  <div id="music">
    <p>Ik speel in een band op de keyboard voor de laatste 4 jaar. Ik luister ook vaak naar muziek, zelfs in mijn slaap. Mijn favoriete genres zijn: hip hop, rap, jazz en blues.
    Ik ben ook geintereseert in het maken van muziek voor games en hip hop beats als hobby.
  </p>
  <img src="../assets/spotifymins.jpg" alt="spotify minuten">
</div>
  
  
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

#AboutContent p{
  width: 50vw;
}

#music {
  display: flex;
  flex-direction: row;
}
#music p{
  width: 20vw;
  margin: 3em;
}
#music img{
  width: 15vw;
  height: 45vh;
}

</style>