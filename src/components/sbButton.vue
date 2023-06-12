<template>
  <a class="sbb" @click="iwasclicky" @mouseover="this.emitter.emit('showmsg', this.$props.msg)" @mouseleave="this.emitter.emit('showmsg', '')">
    <span class="material-icons sbico">{{ gIcon }}</span>
  </a>
</template>

<script>
export default {
  name: "sbButton",
  props: {
    gIcon: String,
    name: String,
    desc: String,
    msg: String
  },
  data(){

  },
  methods: {
    iwasclicky(){
      console.log(this.name + ' was Clicky');
    },
    sendCBM(){
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
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 10%;
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