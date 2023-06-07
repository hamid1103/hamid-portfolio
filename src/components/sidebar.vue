<script setup>
import SbButton from "./sbButton.vue";
</script>

<template>
  <div class="sidebar">
    <sb-button href="#/" g-icon="home" name="Home" msg='Send to homepage?'> </sb-button>
    <sb-button href="#/skills" g-icon="star_half" name="Skills" msg="Check out my skills!"> </sb-button>
    <sb-button href="#/about" g-icon="account_circle" name="AboutMe" msg="About me!"> </sb-button>
    <sb-button href="#/platforms" g-icon="badge" name="Platforms" msg="Check me out on other platforms!" > </sb-button>
    <sb-button href="#/projects" g-icon="work_history" name="Platforms" msg="Check out my work!" > </sb-button>
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
@import "@catppuccin/palette/style";
.sidebar{
  min-height: 100vh;
  min-width: 8vw;
  display: flex;
  flex-direction: column;
  background-color: var(--ctp-mocha-overlay0);
  justify-content: center;
  justify-items: center;
}

</style>