<template>
  <ion-page>
    <div class="kalendar">
      <Kalendar/>
    </div>
  </ion-page>
</template>

<script>
import socket from '../main'
import Kalendar from '../components/Kalendar/Kalendar.vue'
export default {
    components:{
        Kalendar
    },
    created(){
      this.$store.dispatch('events')
    }
}
</script>

<style scoped>
.kalendar{
    background-image: url('../assets/pocetna.jpg');
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>