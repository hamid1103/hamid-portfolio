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
    },
    sendmessage(msg){
      this.emitter.emit('showmsg', msg)
    }
  }
}
</script>

<style scoped>
.sbico{
  font-size: 4em;
}
.sbb{
  background-color: #363636;
  height: 4em;
  border: #1a1a1a solid 4px;
  margin: 6px;
}
.sbb:hover{
  background-color: slategrey;
}

</style>