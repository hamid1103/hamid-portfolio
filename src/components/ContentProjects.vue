<template>
  <div class="container content">
    <div class="columns flex-centered">
      <div class="column col-9">


        <div class="card m-2 catcard">
          <div class="card-image">
            <img alt="Swoard Development Image" src="../assets/swoard.png" class="img-responsive">
          </div>
          <div class="card-header">
            <div class="card-title h5">
              Swoard
            </div>
          </div>
          <div class="card-body">
            Ik ben in mijn vrije tijd bezig met een 2d game waarin spelers materialen moeten verzamelen om zwaarden te
            tekenen.
            Alle zwaarden zullen dan user-generated zijn waarmee er veel variate in wapens komen.
            De game is gemaakt in unity2d en maakt gebruik van JSON om zwaarden op te slaan. Met data uit json worden de
            zwaarden automatisch opniew getekend in-game.
            Hiermee kan ik allemaal geinige trucjes uitvoeren in de game en hoef ik geen plaatjes EN data files van een
            zwaard te hebben, wat goed is want ik plan om
            een multiplayer functie toe te voegen.
            Ik ben ook bezig met een story mode voor dat spel, met world building, verschillende start punten die
            invloed
            hebben op het verhaal, npcs, etc. Ik wil hier
            echt iets groots mee maken.
          </div>
        </div>


        <div class="card m-2 catcard">
          <div class="card-image">
            <img src="../assets/20230612_10h11m52s_grim.png" class="img-responsive">
          </div>
          <div class="card-header">
            <div class="card-title">Cave, Man!</div>
          </div>
          <div class="card-body">
            Voor programeren 4 had ik een demo game gemaakt waar een man tijdens een illegale job, met zijn vrienden
            naar ondergrondse
            wereld gestuurd werden. Het originele idee: In die wereld zijn er meerdere lagen waar elke laag een andere
            koninkrijk/civilization woont. De hoofdcharacters proberen te ontsnappen
            en de mensen te bevrijden.
            Het is een webgame gemaakt in de ExcaliburJS library.
          </div>
        </div>

        <div class="card m-2 catcard">
          <div class="card-image">
            <img src="../assets/Res.png" class="img-responsive">
          </div>
          <div class="card-header">
            <div class="card-title">
              Reservation System
            </div>
          </div>
          <div class="card-body">
            Voor CLE 2 heb ik een reserveringssysteem gemaakt die de gebruiker laat weten op welke tijden/dagen de
            eigenaar niet
            beschikbaar is voor een afspraak. De data wordt gelezen en geschreven van een outlook account's calender. De
            website is in php
            geschreven en maakt gebruik van een losse nodeJS app die met de microsoft Graph api interract.
          </div>
        </div>

        <div class="card m-2 catcard">
          <div class="card-image">
            <img src="../assets/cle4game.png" class="img-responsive">
          </div>
          <div class="card-header">
            <div class="card-title">Schiejump</div>
          </div>
          <div class="card-body">
            Voor CLE4 heb ik met mijn team een jumper arcade game gemaakt met arcade control support. De game is local
            multiplayer 1v1. Er zijn items, enemies en verschillende soorten platformen.<br>
            De scores van players worden in een database opgeslagen.
            <br>
            <a href="https://github.com/hamid1103/CLE4Game">Github Repo</a>
            <br>
            <a href="">Hier kan je het spelen.</a>
          </div>
        </div>

        <div class="card m-2 catcard">
          <div class="card-header">
            <div class="card-title">Casual poker with friends</div>
          </div>
          <div class="card-body">
            Ik ben in mijn vrije tijd bezig geweest met een free to play poker game om te oefenen met het maken van
            webgames en gebruiken van websockets.
            Heel ver ben ik niet echt. De server werkt, maar ik moet nu zorgen voor de multiplayer... en de poker game
            zelf.
          </div>
        </div>

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

.imageg img {
  object-fit: contain;
  width: 40vw;
  height: 40vh;
}

.content {
  background-color: var(--ctp-mocha-surface2);
  overflow-y: auto;
  width: 100%;
  height: 100%;
}

.catcard {
  background-color: #eff1f5;
}

</style>