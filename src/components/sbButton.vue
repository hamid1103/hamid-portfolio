<template>
  <a class="sbb" @click="iwasclicky">
    <span class="material-icons sbico">{{ gIcon }}</span>
  </a>
</template>

<script>
export default {
  name: "sbButton",
  props: {
    gIcon: String,
    name: String,
    desc: String
  },
  data(){

  },
  methods: {
    iwasclicky(){
      console.log(this.name + ' was Clicky');
    }
  }
}
</script>

<style scoped>
@import "@catppuccin/palette/style";
.sbico{
  font-size: 4em;
}
.sbb{
  background-color: var(--ctp-mocha-base);
  color: white;
  height: 4em;
  border: var(--ctp-mocha-mantle) solid 4px;
  margin: 6px;
  box-shadow: 3px 5px #292929;
}
.sbb:hover{
  background-color: var(--ctp-mocha-overlay0);
  border: var(--ctp-mocha-overlay1) solid 4px;
  box-shadow: 3px 5px var(--ctp-mocha-surface1);
}

</style>