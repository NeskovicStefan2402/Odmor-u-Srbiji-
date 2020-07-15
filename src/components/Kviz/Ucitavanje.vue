<template>
  <div class="ucitavanje">
    <div class="centerText" align='center'>
          <h3>Uskoro pocinje kviz!</h3>
          <ion-button v-if="joined==false" @click="prijavaZaKviz()" color='success'>Prijavi se</ion-button>
          <Loading v-else class="load"/>
    </div>
  </div>
</template>

<script>
import Loading from './Loading'
export default {
  components:{
    Loading
  },
  data(){
    return{
      joined:false
    }
  },
  methods:{
    prijavaZaKviz(){
      this.joined=true
      this.$store.dispatch('joinQuiz')
    }
  }
}
</script>

<style scoped>
.ucitavanje{
    height: 100vh;
    width: 100%;
    position: relative;
    padding: 30px;
    background-color: #2e425a;
}
.centerText{
    margin: 0;
    margin:auto;
    position: absolute;
    top: 50%;
    color: white;
    left:20%;
    /* transform: translateX(-50%);
    -webkit-transform: translateX(-50%); */
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    
}
.load{
  align-content: center;
}
</style>