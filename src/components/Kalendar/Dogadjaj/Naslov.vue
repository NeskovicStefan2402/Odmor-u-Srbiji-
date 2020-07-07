<template>
    <ion-row>
        <ion-col size='1'>
            <ion-button color='danger' @click="close()">X</ion-button>
        </ion-col>
        <ion-col size='7'>
            <h3>{{dogadjaj.tema}}</h3>
        </ion-col>
        <ion-col size='4' class="vreme">
            <h3>{{dogadjaj.vreme}}</h3>
        </ion-col>
    </ion-row>
    
</template>

<script>
import {eventBus} from '../../../main'
export default {
    props:['dogadjaj'],
    methods:{
      close(){
          eventBus.$emit('openModal',null)
      }
  }
}
</script>

<style scoped>
.vreme{
    background-color: #e74c3c;
    color: white;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
</style>