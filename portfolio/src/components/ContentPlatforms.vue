<template>
  <div id="platformsContent">
      <div class="platform" @click="openInNewTab('https://github.com/hamid1103')" @mouseover="this.emitter.emit('showmsg', 'https://github.com/hamid1103')" @mouseleave="this.emitter.emit('showmsg', '')">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github">
      </div>
      <div class="platform" @click="openInNewTab('https://www.twitch.tv/arcadianfl4m3')" @mouseover="this.emitter.emit('showmsg', 'https://www.twitch.tv/arcadianfl4m3')" @mouseleave="this.emitter.emit('showmsg', '')">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968819.png" alt="Twitch">
      </div>
      <div class="platform" @click="openInNewTab('https://medal.tv/u/ArcadianFl4m3')" @mouseover="this.emitter.emit('showmsg', 'https://medal.tv/u/ArcadianFl4m3')" @mouseleave="this.emitter.emit('showmsg', '')">
        <img src="https://pressreleases.triplepointpr.com/wp-content/uploads/new-medal-logo.png" alt="Medal">
      </div>
  </div>
</template>

<script>
export default {
  name: "ContentPlatforms",
  methods: {
    openInNewTab(url){
      window.open(url, '_blank', 'noreferrer')
    }
  }
}
</script>

<style scoped>
.platform{
  width: 16vw;
  padding: 1em;
  height: 16vh;
  margin: 1em;
  background-color: white;
  border-radius: 5%;
  border: #0d0d0d 3px solid;
  box-shadow: 9px 10px #0d0d0d;
}
.platform:hover{
  background-color: #c4c5c0;
}
.platform img{
  width: 15vw;
  height: 15vh;
  object-fit: contain;
}
.platform h1{

}
.platform p{

}
#platformsContent{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>