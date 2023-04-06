<script setup>
import Codebar from "./codebar.vue";
</script>

<template>
  <div class="contained">
    <codebar></codebar>
  <div class="content_container">
    <transition name="fade">
      <component :is="currentView" />
    </transition>

  </div>

  </div>
</template>

<script>
import ContentHome from "./ContentHome.vue";
import ContentSkills from "./ContentSkills.vue";
import ContentNotfound from "./ContentNotfound.vue";
import ContentAboutMe from "./ContentAboutMe.vue";
import contentPlatforms from "./ContentPlatforms.vue";
import ContentProjects from "./ContentProjects.vue"

const routes = {
  '/': ContentHome,
  '/skills': ContentSkills,
  '/about': ContentAboutMe,
  '/platforms': contentPlatforms,
  '/projects': ContentProjects
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
@import "@catppuccin/palette/style";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.contained{
  min-width: 91%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.codebarcontainer{
  height: 3vh;
  width: 91vw;
  background-color: var(--ctp-mocha-surface0);
}
.content_container{
  height: 97vh;
  width: 91vw;
  background-color: var(--ctp-mocha-surface1);
}
</style>