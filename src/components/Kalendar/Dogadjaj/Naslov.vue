<template>
    <ion-row>
        <ion-col size='1'>
            <i class="material-icons" style="font-size:36px" @click="close()">close</i>
        </ion-col>
        <ion-col size='7'>
            <h3>{{dogadjaj.tema}}</h3>
        </ion-col>
        <ion-col size='4' class="vreme">
            <p>{{vreme}} h</p>
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
  },
  computed:{
      vreme(){
            let minuti= this.dogadjaj.vreme.split(':')[1]
            let sati= this.dogadjaj.vreme.split(':')[0]
            
            if (parseInt(minuti)<10){
                return sati+':0'+minuti;
            }else{
                return this.dogadjaj.vreme
            
            } 
        }
  }
}
</script>

<style scoped>
.vreme{
    /* background-color: #e74c3c; */
    color: black;
    /* border-top-left-radius: 10px;
    border-bottom-left-radius: 10px; */
}
</style>