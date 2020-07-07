<template>
    <div class="login">
        <div class='ion-item'>
                <ion-input placeholder="Name" :value="user.phone" @input="user.phone = $event.target.value" class="polje"></ion-input>
        </div>
        <div class='ion-item'>
                <ion-input type='password' placeholder="Password" :value="user.password" @input="user.password = $event.target.value" class="polje"></ion-input>
            
        </div>
        <br>
        <ion-row align='center'>
            <ion-col>
                <ion-button color='danger' @click="reset()"> Reset</ion-button>
            </ion-col>
            <ion-col>
                <ion-button color='success' @click="login()"> Login</ion-button>
            </ion-col>
        </ion-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:{
                phone:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            console.log('User is : ');
            console.log(this.user);
            this.$store.dispatch('login',this.user)
            this.reset()
        },
        reset(){
            this.user.phone=''
            this.user.password=''
        }
    }
}
</script>
<style scoped>
ion-content{
    background-color: #f2b620;
}
.polje{
    background-color: #f2b620;
}
div{
    background-color: #f2b620;
}
</style>
