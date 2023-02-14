<script setup>
/*import HelloWorld from './components/HelloWorld.vue'*/
import Sidebar from "./components/sidebar.vue";
import container from "./components/container.vue";
import Container from "./components/container.vue";
</script>
<!--app root-->
<template>

  <div class="root">
    <sidebar />
    <container/>
  </div>
<!--  <HelloWorld msg="Vite + Vue" />-->

</template>

<style scoped>
.root{
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: left;
}
</style>
