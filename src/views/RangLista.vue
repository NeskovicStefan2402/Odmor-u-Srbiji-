<template>
    <ion-page>
        <Naslov/>
        <div class="rang">
            <Lista v-if="all==true" :lista='listaAll'/>
            <Lista v-else :lista='listaLatest'/>
        </div>
    </ion-page>
</template>
<script>
import Lista from '../components/RangLista/RangLista'
import Naslov from '../components/RangLista/NaslovRang'
import {eventBus} from '../main'
export default {
    components:{
        Lista,
        Naslov
    },
    data(){
        return{
            all:true,
            listaAll:[
                {
                    'phone':'0616202600',
                    'score':54.6517
                },
                {
                    'phone':'0644747170',
                    'score':98.5793
                },
                {
                    'phone':'0606202602',
                    'score':105.6359
                },
                {
                    'phone':'0606202266',
                    'score':124.5878
                }
            ],
            listaLatest:[
                {
                    'phone':'0616202600',
                    'score':12.4578
                },
                {
                    'phone':'0644747170',
                    'score':32.9851
                }
            ],
        }
    },
    mounted(){
        eventBus.$on('changeList',ele=>{
            this.all=ele;
        })
    }
}
</script>

<style>
.rang{
    height: 100vh;
    align-content: center;
    padding: 5px;
    overflow:scroll;
    padding-bottom: 10px;
    background-color: #2e425a;    
}
</style>