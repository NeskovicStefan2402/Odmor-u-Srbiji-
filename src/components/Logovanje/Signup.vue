<template>
    <div class='signup'>
        <div class='ion-item'>
            <ion-input placeholder="Phone*" :value="user.phone" @ionInput="user.phone = $event.target.value"></ion-input>
        </div>
        <div class='ion-item'>
            <ion-input type='password' placeholder="Password*" :value="user.password" @ionInput="user.password = $event.target.value"></ion-input>
        </div>
        <div class='ion-item'>
            <ion-input type='password' placeholder="Confirm password*" :value="user.confirm_password" @ionInput="user.confirm_password = $event.target.value"></ion-input>
        </div>
        <br>
        <div class='ion-item'>
            <ion-checkbox color="primary" @ionChange="selektuj"></ion-checkbox>
            <ion-label class="text">I'm not bot!</ion-label>
        </div>
        <br><br>
        <ion-row align='center'>
            <ion-col>
                <ion-button @click="cancel()" color='danger'> Reset </ion-button>
            </ion-col>
            <ion-col>
                <ion-button @click="send()" color='success'> Sign up</ion-button>
            </ion-col>
        </ion-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            ele:{
                checked:false
            },
            user:{
                phone:'',
                password:'',
                confirm_password:''
            }
        }
    },
    created(){
        this.cancel();
    },
    methods:{
        selektuj(){
            this.ele.checked=!this.ele.checked;
        },
        cancel(){
            this.user.phone=''
            this.user.password=''
            this.user.confirm_password=''
        },
        send(){
            if(this.user.phone!='' && this.user.password!='' && this.user.confirm_password!=''){
                if(this.ele.checked==true){    
                    if(this.user.password==this.user.confirm_password && this.user.password!=''){
                        console.log('User is : ');
                        console.log(this.user);
                        
                        this.$store.dispatch('signUp',this.user)
                        this.cancel()
                    }else{
                        alert('Input correct confirm password!')
                    }
                }else{
                    alert('First select bot box!')
                }
        }else{
            alert('Input required fields!')
        }
    }
    }
}
</script>
<style scoped>
.text{
    margin-left: 20px;
}
.linkovi{
    border-color: #f2b620;
	background-color: #f2b620;
	color: black; 
}
</style>