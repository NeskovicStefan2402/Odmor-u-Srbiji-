<template>
  <div class="poslednji">
      <div class="centerText">
        <h3>Da li ste zavrsili test?</h3>
        <ion-row>
                <ion-col size='5'>
                    <ion-button color='danger'>No</ion-button>
                </ion-col>
                <ion-col size='2'></ion-col>
                <ion-col size='5'>
                    <ion-button color='success' @click="commit">Yes</ion-button>
                </ion-col>
        </ion-row>
      </div>
  </div>
</template>
<script>
import socket from '../../main'
export default {
    methods:{
        commit(){
            this.$store.dispatch('submitQuiz')
        }
    }
}
</script>

<style scoped>
.poslednji{
    background-color: white;
    height: 100vh;
    width: 100%;
    position: relative;
    padding: 30px;
}
.centerText{
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
    
}
</style>