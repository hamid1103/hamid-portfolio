<script setup>
import Codebar from "./codebar.vue";
import Live2d from "../../node_modules/vue-live2d/src/index.vue"
</script>

<template>
  <div class="codebarcontainer">
    <codebar></codebar>
  </div>
  <div class="content_container">
    sdad
  </div>
  <div class="kanban">
    <live2d
        :style="style"
        :model="['Potion-Maker/Pio', 'school-2017-costume-yellow']"
    ></live2d>
  </div>
</template>

<script>
export default {
  name: "container",
  data(){
    style: 'position: fixed; bottom: 0; right: 0;'
  }
}
</script>

<style scoped>
.codebarcontainer{
  height: 3%;
  width: 91%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #0d0d0d;
}
.content_container{
  height: 97%;
  width: 91%;
  border: #0d0d0d solid 1px;
  position: absolute;
  right: 0;
  top: 3%;
  background-color: #363636;
}
.kanban{
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>