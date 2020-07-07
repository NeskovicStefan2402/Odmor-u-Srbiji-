<template>
  <div class="telo">
      <ion-row>
          <ion-col v-for="i in buttons" size='6' align='center' class="kolonaDugme">
              <Dugme :dugme='i' />
          </ion-col>
      </ion-row>
  </div>
</template>

<script>
import Dugme from './Dugme'
export default {
    components:{
        Dugme
    },
    data(){
        return{
            buttons:[
                {
                    'slika':'calendar.png',
                    'lokacija':'calendar'
                },
                {
                    'slika':'quiz.png',
                    'lokacija':'quiz'
                },
                {
                    'slika':'info.png',
                    'lokacija':'lokacija'
                },
                {
                    'slika':'rank.png',
                    'lokacija':'connecting'
                }
            ]
        }
    }
}
</script>

<style scoped>
.kolonaDugme{
    padding-top: 30px;
}
</style>