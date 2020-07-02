<template>
  <ion-page>
    <div class="pocetna">
      <Naslov/>
      <Galerija :lista='lista'/>
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
  data(){
    return{
      lista:[
        {
          'naziv':'Nacionalni park Tara',
          'slika':'tara.jpg',
          'mesto':'Tara'
        },
        {
          'naziv':'Nacionalni park Fruska gora',
          'slika':'fruskagora.jpg',
          'mesto':'Vojvodina'
        },
        {
          'naziv':'Deliblatska pescara',
          'slika':'deliblatska.jpg',
          'mesto':'Vojvodina'
        },
        {
          'naziv':'Uvac',
          'slika':'uvac.jpg',
          'mesto':'Sjenica'
        }
      ]
    }
  }
}
</script>
<style scoped>
.pocetna{
  background-color: #037D0B;
  /* background-image: url('../assets/pozadina.jpg'); */
  height: 100vh;
}
</style>
