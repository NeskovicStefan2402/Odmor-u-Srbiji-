<template>
  <ion-page>
    <div class="kalendar">
      <Kalendar/>
    </div>
  </ion-page>
</template>

<script>
import Kalendar from '../components/Kalendar/Kalendar.vue'
export default {
    components:{
        Kalendar
    }
}
</script>

<style>
.kalendar{
  background-color: #037D0B;
  height: 100vh;
}
</style>