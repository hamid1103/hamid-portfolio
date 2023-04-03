<script setup>
import Codebar from "./codebar.vue";
import Live2d from "../../node_modules/vue-live2d/src/index.vue"
</script>

<template>
  <div class="contained">
    <codebar></codebar>
  <div class="content_container">
    <component :is="currentView" />
  </div>
  <div class="kanban">
    <live2d
        :style="style"
        :model="['Potion-Maker/Pio', 'school-2017-costume-yellow']"
        direction="left"
    ></live2d>
  </div>
  </div>
</template>

<script>
import ContentHome from "./ContentHome.vue";
import ContentSkills from "./ContentSkills.vue";
import ContentNotfound from "./ContentNotfound.vue";

const routes = {
  '/': ContentHome,
  '/skills': ContentSkills
}
export default {
  data(){
    return{
      currentPath: window.location.hash,
      style: 'position: fixed; bottom: 0; left: 0;',
      content: 'Home'
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || ContentNotfound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}
</script>

<style scoped>
.contained{
  min-width: 91%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.codebarcontainer{
  height: 3vh;
  width: 91vw;
  background-color: #0d0d0d;
}
.content_container{
  height: 97vh;
  width: 91vw;
  background-color: #363636;
}
.kanban{
  position: fixed;
  bottom: 0;
  left: 1vw;
}
</style>