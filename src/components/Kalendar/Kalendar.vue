<template>
      <ion-context>
          <Opis v-if='dog!=null' :dogadjaj='dog'/>
          <ion-row>
              <ion-col size='2'>
                <Back class="back"/>
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
    }
    // data(){
    //     return{
    //         // dogadjaji:[
    //             {
    //                 'datum':'24.07.2020.',
    //                 'vreme':'21:00',
    //                 'tema':'Tara',
    //                 'brojPitanja':12,
    //                 'slika':'tara.jpg',
    //                 'nagrade':[
    //                     {
    //                         'rank':'1',
    //                         'sponzor':'Omorika Tara',
    //                         'tip':'Vaucer',
    //                         'opis':'Vaucer za 2 osobe, 3 dana',
    //                         'novac':0
    //                     },
    //                     {
    //                         'rank':'2',
    //                         'sponzor':'Zlatan bor Tara',
    //                         'tip':'Vaucer',
    //                         'opis':'Vaucer za 2 osobe, 3 dana',
    //                         'novac':0
    //                     },
    //                     {
    //                         'rank':'3',
    //                         'sponzor':'Zlatan Bor Tara',
    //                         'tip':'Vaucer',
    //                         'opis':'Vaucer za 2 osobe, 1 dana',
    //                         'novac':0
    //                     },
    //                     {
    //                         'rank':'4',
    //                         'sponzor':'Omorika Tara',
    //                         'tip':'Vaucer',
    //                         'opis':'Vaucer za 2 osobe, 1 dana',
    //                         'novac':0
    //                     }
    //                 ]
    //             },
    //             {
    //                 'datum':'28.07.2020.',
    //                 'vreme':'20:00',
    //                 'tema':'Zemun',
    //                 'brojPitanja':10,
    //                 'slika':'zemun.jpg',
    //                 'nagrade':[
    //                     {
    //                         'rank':'1',
    //                         'sponzor':'Restoran Zemun',
    //                         'tip':'Vaucer',
    //                         'opis':'Rucak za 2 osobe',
    //                         'novac':0
    //                     },
    //                     {
    //                         'rank':'2',
    //                         'sponzor':'Nova luka Zemun',
    //                         'tip':'Vaucer',
    //                         'opis':'Prenociste za 2 osobe, 3 dana',
    //                         'novac':0
    //                     },
    //                     {
    //                         'rank':'3',
    //                         'sponzor':'Restoran Zemun',
    //                         'tip':'Vaucer',
    //                         'opis':'Rucak za 1 osobu',
    //                         'novac':0
    //                     },
    //                     {
    //                         'rank':'4',
    //                         'sponzor':'Nova luka Zemun',
    //                         'tip':'Vaucer',
    //                         'opis':'Prenociste za 2 osobe, 1 dana',
    //                         'novac':0
    //                     },
    //                 ]
    //             },
    //             {
    //                 'datum':'24.07.2020.',
    //                 'vreme':'21:00',
    //                 'tema':'Tara',
    //                 'brojPitanja':12,
    //                 'slika':'tara.jpg',
    //                 'nagrade':[
    //                     {
    //                         'rank':'1',
    //                         'sponzor':'Omorika Tara',
    //                         'tip':'Vaucer',
    //                         'opis':'Vaucer za 2 osobe, 3 dana',
    //                         'novac':0
    //                     },
    //                     {
    //                         'rank':'2',
    //                         'sponzor':'Zlatan bor Tara',
    //                         'tip':'Vaucer',
    //                         'opis':'Vaucer za 2 osobe, 3 dana',
    //                         'novac':0
    //                     },
    //                     {
    //                         'rank':'3',
    //                         'sponzor':'Zlatan Bor Tara',
    //                         'tip':'Vaucer',
    //                         'opis':'Vaucer za 2 osobe, 1 dana',
    //                         'novac':0
    //                     },
    //                     {
    //                         'rank':'4',
    //                         'sponzor':'Omorika Tara',
    //                         'tip':'Vaucer',
    //                         'opis':'Vaucer za 2 osobe, 1 dana',
    //                         'novac':0
    //                     }
    //                 ]
    //             },
    //             {
    //                 'datum':'28.07.2020.',
    //                 'vreme':'20:00',
    //                 'tema':'Zemun',
    //                 'brojPitanja':10,
    //                 'slika':'zemun.jpg',
    //                 'nagrade':[
    //                     {
    //                         'rank':'1',
    //                         'sponzor':'Restoran Zemun',
    //                         'tip':'Vaucer',
    //                         'opis':'Rucak za 2 osobe',
    //                         'novac':0
    //                     },
    //                     {
    //                         'rank':'2',
    //                         'sponzor':'Nova luka Zemun',
    //                         'tip':'Vaucer',
    //                         'opis':'Prenociste za 2 osobe, 3 dana',
    //                         'novac':0
    //                     },
    //                     {
    //                         'rank':'3',
    //                         'sponzor':'Restoran Zemun',
    //                         'tip':'Vaucer',
    //                         'opis':'Rucak za 1 osobu',
    //                         'novac':0
    //                     },
    //                     {
    //                         'rank':'4',
    //                         'sponzor':'Nova luka Zemun',
    //                         'tip':'Vaucer',
    //                         'opis':'Prenociste za 2 osobe, 1 dana',
    //                         'novac':0
    //                     },
    //                 ]
    //             }
    //         // ]
    //     }
    // },
    ,
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