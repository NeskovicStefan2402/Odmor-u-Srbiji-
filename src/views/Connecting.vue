<template>
  <ion-page>
      <ion-conext>
        <!-- <p v-if="isConnected">We're connected to the server!</p>
        <p>Message from server: "{{socketMessage}}"</p>
        <p>For server: {{text}}</p> -->
        <p>Pitanje : {{pitanje.text}}</p>
        <ion-row v-if="odgovori!=[]">
          <ion-col size='6' v-for="(i,item) in odgovori" @click="izabrao(item)">
            <p>{{i.text}}</p>
          </ion-col>
        </ion-row>
        <!-- <ion-card v-if="odgovorio!=null" :class='{green:odgovori[odgovorio].tacan==true,red:odgovori[odgovorio].tacan==false}'>
          <p v-if='odgovori[odgovorio].tacan==true'> Vas odg je tacan! </p>
          <p v-else> Vas odg nije tacan! </p>
        </ion-card> -->
        <input type="text" v-model="text">
        <button @click="saljiNaServer"> Salji na server</button>
        </ion-conext>
  </ion-page>
</template>
<script>
import socket from '../main'
export default {
    data(){
        return{
            text:'',
            isConnected: false,
            pitanje: '',
            odgovori:[],
            odgovorio:null,
        }
    },
    mounted(){   
        socket.on('connect', function() {
          console.log('Socket is connected...')  
        });
        socket.on('insert_quiz', function() {
          alert('New event in future!')  
        });
        socket.on('pitanje',function(pitanje){
          this.odgovorio=null;
          this.pitanje=pitanje;
          this.odgovori=pitanje['odgovori']
        }.bind(this))
    },
    methods:{
        saljiNaServer(){
            socket.emit('kontrolni', {data: this.text});
        },
        izabrao(i){
          // socket.emit('odgovori',{odgovor:this.odgovori[i].id})
          if(!this.odgovori[i].tacan){
            socket.disconnect();
            alert('Socket je diskonektovan...')
          }
        }
    }
}
</script>

<style>
.tacan{
  background-color: green;
}
.netacan{
  background-color: red;
}
</style>