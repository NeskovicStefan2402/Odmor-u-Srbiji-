<template>
  <ion-page>
    <div class="kviz">
      <div v-if="$store.state.work==false" class="loading">
        <h3>Uskoro pocinje kviz...</h3>
      </div>
      <div v-else class="working">
        <p>Pitanje : {{pitanje.text}}</p>
          <div size='10' v-for="(i,item) in odgovori" @click="izabrao(item)" class="odg">
            <p>{{i.text}}</p>
          </div>
      </div>
    </div>
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
          this.$store.state.work=true
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
            this.$router.push('/')
          }
        }
    }
}
</script>

<style scoped>
.tacan{
  background-color: green;
}
.netacan{
  background-color: red;
}
.kviz{
  height: 100vh;
  background-color: #037D0B;
  color: white;
}
.odg{
  border: 0.5px solid yellowgreen ;
  border-radius: 20px;
  margin: 20px;
}
.loading{
  display: flex;
  justify-content: center
}
</style>