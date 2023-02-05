<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <header>
<!--    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>-->

    <div class="sidebarcont">
      <side-bar/>
    </div>

    <div class="contained">
      <TheWelcome />
    </div>


  </header>
</template>

<style scoped>

.contained{

}

.sidebarcont{
  margin-right: 3em;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: row;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .contained{

  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
