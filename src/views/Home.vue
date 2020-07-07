<template>
  <ion-page>
    <div class="pocetna">
      <ion-button color='danger' @click="logout()" class="btn">out</ion-button>
      <Naslov/>
      <Galerija :lista='$store.state.galerija'/>
      <Telo/>
    </div>
  </ion-page>
</template>
<script>
import Naslov from '@/components/Pocetna/Naslov.vue'
import Galerija from '@/components/Pocetna/Galerija/Galerija'
import Telo from '@/components/Pocetna/Telo/Telo'
export default {
  components: {
    Naslov,
    Galerija,
    Telo
  },
  methods:{
    logout(){
      this.$store.dispatch('logout')
    }
  },
  created(){
    this.$store.dispatch('sponsors','zlato')
  }
}
</script>
<style scoped>
.pocetna{
  background-color: #037D0B;
  /* background-image: url('../assets/pozadina.jpg'); */
  height: 100vh;
}
.btn{
    background-color: white;
    border-radius: 50%;
    /* font-size: 25px; */
    width: 30px;
    height: 30px;
    margin-top: 5px;
    margin-right: 5px;
    position:absolute;
    top:0;
    right:0;
    outline: none;
}
</style>
