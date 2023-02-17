<script setup>
import SbButton from "./sbButton.vue";
</script>

<template>
  <div class="sidebar">
    <sb-button g-icon="home" name="Home" @click="this.emitter.emit('showmsg', 'Sending to homepage')" @mouseover="this.emitter.emit('showmsg', 'Send to homepage?')" @mouseleave="this.emitter.emit('showmsg', '')"> </sb-button>
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
  height: 100%;
  width: 9%;
  border: #0d0d0d solid 1px;
  position: fixed;
  left: 0;
  top: 0;
  margin-right: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

</style>