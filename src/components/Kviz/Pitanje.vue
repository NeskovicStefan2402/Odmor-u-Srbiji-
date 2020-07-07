<template>
  <div class="pitanje" justify='center'>
        <p>Pitanje : {{pitanje.text}}</p>
        <div size='10' v-for="(i,item) in pitanje.odgovori" @click="izabrao(item)" class="odg">
        <p>{{i.text}}</p>
        </div>
  </div>
</template>
<script>
import socket from '../../main'
export default {
    props:['pitanje'],
    methods:{
        izabrao(item){
            let answer={}
            answer['pitanje']=this.pitanje.id;
            answer['odgovor']=item
            this.$store.state.answers.push(answer)
        }
    }
}
</script>
<style scoped>
.odg{
  border: 0.5px solid yellowgreen ;
  border-radius: 20px;
  margin: 20px;
}
.pitanje{
  height: 100vh;
  background-color: green;
  justify-content: center;
  width: 100%;
  color: white;
}
</style>