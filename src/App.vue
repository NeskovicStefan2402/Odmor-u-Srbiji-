<template>
  <div id="app">
    <ion-app>
      <ion-vue-router/>
    </ion-app>
    <router-view></router-view>
    <router-view name='header-start'></router-view>
  </div>
</template>
<script>
import socket from './main'
import {eventBus} from './main'
export default {
  mounted(){
        socket.on('notifikacija',function(pitanje){
          this.$router.push('/quiz')
        }.bind(this));
        socket.on('krajKviza',function(pitanje){
          this.$store.state.questions=[];
          this.$store.state.answers=[];
          this.$router.push('/')
        }.bind(this));
        socket.on('pitanja',function(pitanja){
          this.$store.state.questions=pitanja
        }.bind(this))
        socket.on('events_response',function(lista){
          this.$store.state.events=lista['Raspored']
        }.bind(this))
        // --------------------------------------------------------------------------
        socket.on('eval',function(data){
          console.log('Evaluacija je stigla');
          this.$store.state.eval=data
          eventBus.$emit('openEval')
        }.bind(this))
        socket.on('confirmEvaluation',function(data){
          if(data['objekat']==null){
            alert('Greska:'+data['error'])
          }else{
            this.$store.state.user=data['objekat']
            eventBus.$emit('closeEval')
          }
        }.bind(this))
        socket.on('evaluateLogin',function(data){
          console.log(data);
          if(data['objekat']==null){
            alert('Greska:'+data['error'])
          }else{
            this.$store.state.user=data['objekat']
            localStorage.setItem('user',JSON.stringify(data['objekat']))
            this.$router.push('/home')
          }
        }.bind(this))
        socket.on('evaluateLogout',function(data){
          console.log(data);
          if(data['objekat']==null){
            alert('Greska:'+data['error'])
          }else{
            this.$store.state.user=null
            localStorage.setItem('user',null)
            this.$router.push('/')
          }
        }.bind(this))
        socket.on('responseSponsors',function(data){
          if(data['objekat']==null){
            alert('Greska:'+data['error'])
          }else{
            this.$store.state.galerija=data['objekat'];
          }
        }.bind(this))
        socket.on('responseEvents',function(data){
          if(data['objekat']==null){
            alert('Greska:'+data['error'])
          }else{
            console.log(data['objekat']);
            this.$store.state.events=data['objekat'];
          }
        }.bind(this))

  }
}
</script>
<style scoped>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
