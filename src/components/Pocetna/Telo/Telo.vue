<template>
      <ion-row class="telo">
          <ion-col v-for="i in buttons" size='6' align='center' class="kolonaDugme">
              <Dugme :dugme='i' />
          </ion-col>
      </ion-row>

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
                    'slika':'rank.png',
                    'lokacija':'rangLista'
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
.telo{
    background-color: transparent;
    height:100%;
    padding-top: 100px;
}
</style>