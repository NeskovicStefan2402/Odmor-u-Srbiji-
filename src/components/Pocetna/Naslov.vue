<template>
  <div class="naslov">
      <ion-row>
            <ion-col size='4'>
                <img :src="zlato" height='50px' width='50px' @click="izaberi('zlato')"/>
            </ion-col>
            <ion-col size='4'>
                <img :src="srebro" height='50px' width='50px' @click="izaberi('srebro')"/>
            </ion-col>
            <ion-col size='4'>
                <img :src="bronza" height='50px' width='50px' @click="izaberi('bronza')"/>
            </ion-col>
      </ion-row>
  </div>
</template>

<script>
import socket from '../../main'
export default {
    computed:{
        zlato(){
            return 'http://127.0.0.1:5000/uploads/zlato.png'
        },
        bronza(){
            return 'http://127.0.0.1:5000/uploads/bronza.png'
        },
        srebro(){
            return 'http://127.0.0.1:5000/uploads/srebro.png'
        }
    },
    methods:{
        izaberi(ele){
            socket.emit('sponsors',ele);
       }
    }
}
</script>

<style scoped>
.naslov{
    margin: 20px;
    background-color: rgba(255, 255, 255, 0.156);
    border-radius: 30px;
}
</style>