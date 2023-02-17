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
  height: 100%;
  width: 100%;
}
</style>