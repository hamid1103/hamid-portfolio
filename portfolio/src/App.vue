<script setup>
/*import HelloWorld from './components/HelloWorld.vue'*/
import sidebar from "./components/sidebar.vue";
import Sidebar from "./components/sidebar.vue";
</script>
<!--app root-->
<template>

  <div class="root">
    <sidebar />
  </div>
<!--  <HelloWorld msg="Vite + Vue" />-->

</template>

<style scoped>
.root{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
}
</style>
