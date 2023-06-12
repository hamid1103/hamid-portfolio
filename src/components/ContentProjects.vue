<template>
  <div class="contP">
    <div id="Swoard">
      <h3>Swoard</h3>
      <div id="swoardcont" class="content">
        <p>Ik ben in mijn vrije tijd bezig met een 2d game waarin spelers materialen moeten verzamelen om zwaarden te
          tekenen.
          Alle zwaarden zullen dan user-generated zijn waarmee er veel variate in wapens komen.
          De game is gemaakt in unity2d en maakt gebruik van JSON om zwaarden op te slaan. Met data uit json worden de
          zwaarden automatisch opniew getekend in-game.
          Hiermee kan ik allemaal geinige trucjes uitvoeren in de game en hoef ik geen plaatjes EN data files van een
          zwaard te hebben, wat goed is want ik plan om
          een multiplayer functie toe te voegen.
          Ik ben ook bezig met een story mode voor dat spel, met world building, verschillende start punten die invloed
          hebben op het verhaal, npcs, etc. Ik wil hier
          echt iets groots mee maken.
        </p>
        <div id="imgSwoard" class="imageg">
          <img src="../assets/swoard.png">
        </div>
      </div>

    </div>
    <div id="Caveman">
      <h3>Cave, Man!</h3>
      <div id="CavemanCont" class="content">
        <p>Voor programeren 4 had ik een demo game gemaakt waar een man tijdens een illegale job, met zijn vrienden naar ondergrondse
          wereld gestuurd werden. Het originele idee: In die wereld zijn er meerdere lagen waar elke laag een andere koninkrijk/civilization woont. De hoofdcharacters proberen te ontsnappen
          en de mensen te bevrijden.
          Het is een webgame gemaakt in de ExcaliburJS library.
          <br>
          <a href="https://hamid1103.github.io/Programmeren4RPG/">Speel de game hier</a>
        </p>
        <div id="imgCaveman" class="imageg">
          <img src="../assets/20230612_10h11m52s_grim.png">
        </div>
      </div>

    </div>
    <div id="ResSys">
      <h3>Reservation System</h3>
      <div id="PlannerCont" class="content">
        <p>
          Voor CLE 2 heb ik een reserveringssysteem gemaakt die de gebruiker laat weten op welke tijden/dagen de eigenaar niet
          beschikbaar is voor een afspraak. De data wordt gelezen en geschreven van een outlook account's calender. De website is in php
          geschreven en maakt gebruik van een losse nodeJS app die met de microsoft Graph api interract.
        </p>
        <div id="imgRes" class="imageg">
                    <img src="../assets/Res.png">
        </div>
      </div>

    </div>
    <div id="CLE4">
      <h3>CLE 4 Game</h3>
      <div id="CLE4Cont" class="content">
        <p>Voor CLE4 heb ik met mijn team een game gemaakt met arcade controls. TODO: UPDATE
        </p>
<!--        <div id="imgCaveman" class="imageg">
          <img src="../assets/20230612_10h11m52s_grim.png">
        </div>-->
      </div>

    </div>
    <div id="CasPok">
      <h3>Casual Poker with friends</h3>
      <div id="CasPok" class="content">
        <p>Ik ben in mijn vrije tijd bezig geweest met een free to play poker game om te oefenen met het maken van webgames en gebruiken van websockets.
          Heel ver ben ik niet echt. De server werkt, maar ik moet nu zorgen voor de multiplayer... en de poker game zelf.
        </p>
        <!--        <div id="imgCaveman" class="imageg">
                  <img src="../assets/20230612_10h11m52s_grim.png">
                </div>-->
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "ContentProjects",
  data() {

  },
  methods: {}
}
</script>

<style scoped>
#Swoard {

}
.imageg img{
  object-fit: contain;
  width: 40vw;
  height: 40vh;
}
.content {
  background-color: var(--ctp-mocha-surface2);
  border: var(--ctp-mocha-subtext1) 2px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
}

.contP{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

#Swoard #swoardcont {

}

#Swoard #swoardcont p {
  width: 30vw;
  margin: 3em;
}

#imgSwoard {


}

#imgSwoard img {
  object-fit: contain;
  width: 40vw;
  height: 40vh;
}
</style>