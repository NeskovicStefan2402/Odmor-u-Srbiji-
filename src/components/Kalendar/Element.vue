<template>
    <ion-row class="dogadjaj">
            <ion-col size='3' class="datum">
                <h3>{{dogadjaj.datum.split('/')[1]}}</h3>
                <h3>{{mesec}}</h3>
            </ion-col>
            <ion-col size='7'>
                <p>{{dogadjaj.tema}}</p>
                <p>{{vreme}}</p>
            </ion-col>
            <ion-col size='2'>
                <br>
                <br>
                <br>
                <button class="info" @click="openInfo">...</button>
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
    },
    computed:{
        mesec(){
            switch (this.dogadjaj.datum.split('/')[0]) {
                case '01':
                    return 'JAN'
                    break;
                case '02':
                    return 'FEB'
                    break;
                case '03':
                    return 'MAR'
                    break;
                case '04':
                    return 'APR'
                    break;
                case '05':
                    return 'MAJ'
                    break;
                case '06':
                    return 'JUN'
                    break;
                case '07':
                    return 'JUL'
                    break;
                case '08':
                    return 'AVG'
                    break;
                case '09':
                    return 'SEP'
                    break;
                case '10':
                    return 'OKT'
                    break;
                case '11':
                    return 'NOV'
                    break;
                case '12':
                    return 'DEC'
                    break;
                default:
                    return '-'
                    break;
            }
        },
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
.dogadjaj{
    background-color: #ececee;
    /* border-radius: 10px; */
    width:100%;
    margin-bottom: 10px;
}
h3{
    font-size: 20px;
}
.datum{
   /* background-color: #bdc3c7; */
   border-right: 0.5px solid rgba(0, 0, 0, 0.483);
}
.info{
    background-color: #2e425a;
    width: 30px;
    height: 30px;
    color: white;
}
</style>