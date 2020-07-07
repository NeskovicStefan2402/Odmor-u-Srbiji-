<template>
    <div v-if="$store.state.loading==false" class="ion-page">
            <div v-if="eval==false">
                <Login v-if="$store.state.type==true"/>
                <Signup v-else/>
            </div>
            <div v-else>
                <Evaluacija/>
            </div>
    </div>
    <!-- <ion-page v-else>
        <Loader/>
    </ion-page> -->
</template>
<script>
import {eventBus} from '../main'
import HeaderStart from '../components/Logovanje/HeaderStart'
import Login from '../components/Logovanje/Login'
import Signup from '../components/Logovanje/Signup'
import Evaluacija from '../components/Logovanje/Evaluacija'
export default {
    components:{
        HeaderStart,
        Login,
        Signup,
        Evaluacija
    },
    data(){
        return{
            eval:false
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
    background-color: #f2b620;
    width: 100%;
    height: 100vh;
    padding-top: 70px;
}
</style>