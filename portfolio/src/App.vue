<script setup>
/*import HelloWorld from './components/HelloWorld.vue'*/
import Sidebar from "./components/sidebar.vue";
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  justify-content: space-between;
}
</style>
