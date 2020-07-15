<template>
    <div class="login">
        <div class='ion-item'>
                <ion-input placeholder="Broj telefona" :value="user.phone" @input="user.phone = $event.target.value" class="polje"></ion-input>
        </div>
        <div class='ion-item'>
                <ion-input type='Password' placeholder="Sifra" :value="user.password" @input="user.password = $event.target.value" class="polje"></ion-input>
            
        </div>
        <br>
        <ion-row align='center'>
            <ion-col>
                <ion-button color='danger' @click="reset()"> Odustani</ion-button>
            </ion-col>
            <ion-col>
                <ion-button color='success' @click="login()"> Prijavi se</ion-button>
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
    background-color: rgba(255, 255, 255, 0);
}
.polje{
    background-color: rgba(255, 255, 255, 0);
}
.login{
    padding-top: 20px;
}
</style>
