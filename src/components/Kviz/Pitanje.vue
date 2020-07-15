<template>
  <div class="pitanje" justify='center'>
        <br>
        <img src="../../assets/pitanje.png">
        <br>
        <p>Pitanje : {{pitanje.text}}</p>
        <div size='10' v-for="(i, item) in pitanje.odgovori" @click="izabrao(item)" class="odg">
          {{i}}
        </div>
  </div>
</template>
<script>
import socket from '../../main'
export default {
    props:['pitanje'],
    data(){
      return{
        selected:null
      }
    },
    methods:{
        izabrao(item){
            let answer={}
            answer['pitanje']=this.pitanje.id;
            answer['odgovor']=item
            var ele = this.postoji(this.pitanje.id)
            if(ele==-1){
              this.$store.state.answers.push(answer)
            }else{
              this.$store.state.answers[ele] = answer;
            }
        },
        postoji(pitanje){
            let postojiPitanje=-1;
            let brojac=0;
            this.$store.state.answers.forEach(element => {
              if(element['pitanje']==pitanje){
                postojiPitanje=brojac;
                brojac++;
              }
            });
            return postojiPitanje;
        }
    },
    mounted(){
      setInterval(() => {
        let br = this.postoji(this.pitanje.id)
        if(br!=-1){
          document.getElementsByClassName('odg')[br].style.background='red'
        }
      }, 1000);
    }
}
</script>
<style scoped>
.odg{
  /* border: 0.5px solid yellowgreen ; */
  /* border-radius: 20px; */
  font-size: 15px;
  padding: 10px;
  margin: 20px;
  background-color: #ececee;
  color: #2e425a;
}
.selected{
  background-color: yellowgreen ;
  border-radius: 20px;
  margin: 20px;
}
.pitanje{
  height: 100vh;
  background-color: #2e425a;
  justify-content: center;
  width: 100%;
  color: #ececee;
}
img{
  /* margin: 20px auto; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>