<template>
      <ion-context>
          <Opis v-if='dog!=null' :dogadjaj='dog'/>
          <ion-row>
              <ion-col size='2'>
                <i class="material-icons" style="font-size:36px;color:white;" @click="$router.push('/home')">arrow_back</i>
              </ion-col>
              <ion-col size='10'>
                  <h3>Predstojeci dogadjaji:</h3>
              </ion-col>
          </ion-row>
          <hr>
        <div class="dogadjaji">
            <ion-row v-for="i in $store.state.events">
                <Element :dogadjaj='i'/>
            </ion-row>
        </div>
      </ion-context>
</template>
<script>
import Element from './Element'
import Opis from './Dogadjaj/OpisDogadjaja'
import Back from './Back'
import {eventBus} from '../../main'
export default {
    components:{
        Element,
        Back,
        Opis
    },
    data(){
        return{
            dog:null
        }
    },
    mounted(){
        eventBus.$on('openModal',ele=>{
            this.dog=ele;
        })
    },
    methods:{
        compare(a, b) {
        let vrednost=0;
            if (a.datum - b.datum) vrednost=1;
            else if (b.datum > a.datum) vrednost=-1;
            else vrednost=0;
        return vrednost;
        }
    }
}
</script>

<style scoped>
.dogadjaji{
    width: 100%;
    align-content: center;
    padding: 30px;
    overflow: scroll;
}
h3{
    color: white;
}
</style>