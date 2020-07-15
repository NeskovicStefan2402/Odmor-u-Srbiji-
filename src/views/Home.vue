<template>
  <ion-page>
    <div class="pocetna">
      <ion-row >
        <ion-col size='2'>
          <i class="material-icons" style="font-size:30px;color:white;" @click="logout()">subdirectory_arrow_left</i>
        </ion-col>
        <ion-col size='3'></ion-col>
        <ion-col size='2'>
          <img src="http://127.0.0.1:5000/uploads/logo.png">
        </ion-col>
        <ion-col size='3'></ion-col>
        <ion-col>
          <img src="http://127.0.0.1:5000/uploads/info.png" class='dugme' @click="$router.push('/info')">
        </ion-col>
      </ion-row>
      <Naslov/>
      <Galerija v-if='open==true'/>
      <Loading v-else/>
      <Telo/>
      <br>
    </div>
  </ion-page>
</template>
<script>
import Naslov from '@/components/Pocetna/Naslov.vue'
import Loading from '@/components/Kviz/Loading'
import Galerija from '@/components/Pocetna/Galerija/Galerija'
import Telo from '@/components/Pocetna/Telo/Telo'
import socket from '../main'
import {eventBus} from '../main'
export default {
  components: {
    Naslov,
    Galerija,
    Telo,
    Loading
  },
  data(){
    return{
      open:false
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('logout')
    }
  },
  created(){
    this.$store.dispatch('sponsors','zlato')
  },
  mounted(){
    eventBus.$on('editGallery',ele=>{
      this.open=ele;
    })
  }
}
</script>
<style scoped>
.pocetna{
  background-image: url('../assets/pocetna.jpg');
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
button{
  background-color: transparent;
  color: white;
  left: 0;
  margin-left: 0;
  font-size: 20px;
  position: relative;
  outline: none;
}
ion-row{
  background-color: #233f43;
  color: white;
  text-align: center;
}
i{
  padding-top: 5px;
}
img{
  height: 40px;
  padding: 0px;
}
.dugme{
  padding-top: 5px;
  height: 35px;
}
</style>
