<template>
    <ion-toolbar>
    <ion-segment>
      <ion-segment-button class='btn' value="back" @click="$router.push('/home')">
        <i class="material-icons" style="font-size:30px" @click="$router.push('/home')">arrow_back</i>
      </ion-segment-button>
      <ion-segment-button class='btn' value="all" checked @click="allScores()">
        All
      </ion-segment-button>
      <ion-segment-button class='btn' value="favorites"  @click="newScores()">
        Latest
      </ion-segment-button>
    </ion-segment>
  </ion-toolbar>
</template>
<script>
import {eventBus} from '../../main'
export default {
    data(){
      return{
        back:'<'
      }
    },
    methods:{
        allScores(){
            eventBus.$emit('changeList',true)
        },
        newScores(){
            eventBus.$emit('changeList',false)
        }
    }
}
</script>
<style scoped>
.btn{
    background-color: #2e425a !important;
    color: #ececee !important;
}
</style>