<template>
  <div class="dbcodebar" :style="bgcolor">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "codebar",
  data(){
    return{
      message: '',
      bgcolor: 'background-color: black;'

    }
  },
  methods: {
    FlashMessage(msg, color){

    },
    ShowMessage(msg){
      this.message = msg;
    },
    FlashColor(color){
      this.bgcolor = 'background-color: ' + color + ';'

    }
  },
  computed:{
    customcss(){
      return{
        '--bgcolor-css': this.bgcolor
      }
    }
  },
  props: {

  },
  mounted() {
    this.emitter.on('showmsg', (msg) =>
        {this.ShowMessage(msg);}
    );
  }
}
</script>

<style scoped>
.dbcodebar{
  height: 3vh;
  width: 91vw;
}

.dbcodebar p{
  display: block;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

</style>