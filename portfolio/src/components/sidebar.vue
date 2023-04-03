<script setup>
import SbButton from "./sbButton.vue";
</script>

<template>
  <div class="sidebar">
    <sb-button href="#/" g-icon="home" name="Home" @click="this.emitter.emit('showmsg', 'Sending to homepage')" @mouseover="this.emitter.emit('showmsg', 'Send to homepage?')" @mouseleave="this.emitter.emit('showmsg', '')"> </sb-button>
    <sb-button href="#/skills" g-icon="star_half" name="Skills" @click="this.emitter.emit('showmsg', 'Sending to skills')" @mouseover="this.emitter.emit('showmsg', 'Check out my skills list')" @mouseleave="this.emitter.emit('showmsg', '')"> </sb-button>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data(){
    return{

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.sidebar{
  min-height: 100vh;
  min-width: 8vw;
  display: flex;
  flex-direction: column;
  background-color: gray;
  justify-content: left;
}

</style>