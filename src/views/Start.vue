<template>
    <div v-if="$store.state.loading==false" class="ion-page">
                <div v-if="eval==false" class="polje">
                    <HeaderStart/>
                    <Login v-if="$store.state.type==true"/>
                    <Signup v-else/>
                </div>
                <div v-else>
                    <Evaluacija/>
                </div>
    </div>
</template>
<script>
import {eventBus} from '../main'
import HeaderStart from '../components/Logovanje/HeaderStart'
import Login from '../components/Logovanje/Login'
import Signup from '../components/Logovanje/Signup'
import Ucitaj from '../components/Logovanje/Ucitaj'
import Evaluacija from '../components/Logovanje/Evaluacija'
export default {
    components:{
        HeaderStart,
        Login,
        Signup,
        Evaluacija,
        Ucitaj
    },
    data(){
        return{
            eval:false,
            loaded:false
        }
    },
    created(){
        if(JSON.parse(localStorage.getItem('user'))!=null){
            this.$router.push('/home')
        }
    },
    mounted(){
        eventBus.$on('openEval',ele=>{
            this.eval=true;
        });
        eventBus.$on('closeEval',ele=>{
            this.eval=false;
        })
    }
}
</script>
<style scoped>
.ion-page{
    background-image: url('../assets/pozadina.jpg');
    width: 100%;
    height: 100%;

  /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 100px;
}
.polje{
    background-color: rgba(255, 255, 255, 0.564);
    color: black;
    border-radius: 10px;
    padding: 10px;
    margin-left: 20px;
    margin-right: 20px;
}
img{
    height: 65px;
    border-radius: 50%;
    padding: 5px;
    background-color: #233f43;
}
</style>