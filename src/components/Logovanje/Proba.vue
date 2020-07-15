<template>
   <div>
       <button @click="pokreniDogadjaj">Pokreni dogadjaj</button>
   </div>
</template>
<script>
import socket from '../../main.js'
export default {
    methods:{
        pokreniDogadjaj(){
            socket.emit('eksterniDogadjaj1')
        },
        mounted(){
            socket.on('eksterniDogadjaj2',function(data){
            console.log('Eksterni dogadjaj 2 je prepoznat.');
            }.bind(this))
        }
    }
}
</script>
<style >

</style>
