<template>
    <div>
        <div id="Swoard">
    <h3>Swoard</h3>
    <div id="swoardcont">
      <p>Ik ben in mijn vrije tijd bezig met een 2d game waarin spelers materialen moeten verzamelen om zwaarden te tekenen. 
      Alle zwaarden zullen dan user-generated zijn waarmee er veel variate in wapens komen.
      De game is gemaakt in unity2d en maakt gebruik van JSON om zwaarden op te slaan. Met data uit json worden de zwaarden automatisch opniew getekend in-game.
      Hiermee kan ik allemaal geinige trucjes uitvoeren in de game en hoef ik geen plaatjes EN data files van een zwaard te hebben, wat goed is want ik plan om
      een multiplayer functie toe te voegen.
      Ik ben ook bezig met een story mode voor dat spel, met world building, verschillende start punten die invloed hebben op het verhaal, npcs, etc. Ik wil hier 
      echt iets groots mee maken.
    </p>
    <div id="imgSwoard">
      <img src="../assets/swoard.png">
    </div>
    </div>
    
  </div>
    </div>
</template>

<script>
export default{
    name: "ContentProjects",
    data(){

    },
    methods: {

    }
}
</script>

<style scoped>
#Swoard{
  
}
#Swoard #swoardcont {
  background-color: var(--ctp-mocha-surface2);
  border: var(--ctp-mocha-subtext1) 2px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
}

#Swoard #swoardcont p{
  width: 30vw;
  margin: 3em;
}

#imgSwoard{
  
  
}
#imgSwoard img{
  object-fit: contain;
  width: 40vw;
height: 40vh;
}
</style>