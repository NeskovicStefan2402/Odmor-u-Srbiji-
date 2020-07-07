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
  background-color: #037D0B;
  height: 100vh;
}
</style>