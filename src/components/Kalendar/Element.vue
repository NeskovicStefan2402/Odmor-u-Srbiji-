<template>
    <ion-row class="dogadjaj">
            <ion-col size='3' class="datum">
                <h3>{{dogadjaj.datum.split('/')[0]}}/{{dogadjaj.datum.split('/')[1]}}</h3>
            </ion-col>
            <ion-col size='7'>
                <p>{{dogadjaj.tema}}</p>
            </ion-col>
            <ion-col size='2' class="info" @click="openInfo">
                <p>...</p>
            </ion-col>
      </ion-row>
</template>

<script>
import OpisDogadjaja from './Dogadjaj/OpisDogadjaja'
import {eventBus} from '../../main'
export default {
    props:['dogadjaj'],
    methods:{
        openInfo(){
            eventBus.$emit('openModal',this.dogadjaj)
        }
    }
}
</script>

<style scoped>
.dogadjaj{
    background-color: #ecf0f1;
    border-radius: 10px;
    width:100%;
    margin-bottom: 10px;
}
h3{
    font-size: 20px;
}
.datum{
   background-color: #bdc3c7; 
}
.info{
    background-color: #e74c3c;
    color: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    }
</style>