<script setup>
import SbButton from "./sbButton.vue";
</script>

<template>
  <div class="sidebar">
    <sb-button g-icon="home" name="Home" />
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data(){

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