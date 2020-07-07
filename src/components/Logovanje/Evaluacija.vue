<template>
    <div class="login">
        <ion-row>
            <ion-col size='2'>
                <ion-input :value="e1" @input="e1 = $event.target.value" class="polje"></ion-input>
            </ion-col>
            <ion-col size='2'>
                <ion-input :value="e2" @input="e2 = $event.target.value" class="polje"></ion-input>
            </ion-col>
            <ion-col size='2'>
                <ion-input :value="e3" @input="e3 = $event.target.value" class="polje"></ion-input>
            </ion-col>
            <ion-col size='2'>
                <ion-input :value="e4" @input="e4 = $event.target.value" class="polje"></ion-input>
            </ion-col>
            <ion-col size='2'>
                <ion-input :value="e5" @input="e5 = $event.target.value" class="polje"></ion-input>
            </ion-col>
            <ion-col size='2'>
                <ion-input :value="e6" @input="e6 = $event.target.value" class="polje"></ion-input>
            </ion-col>
        </ion-row>
        <br>
        <ion-row align='center'>
            <ion-col size='3'></ion-col>
            <ion-col size='6'>
                <ion-button color='success' @click="eval()"> Evaluate </ion-button>
            </ion-col>
            <ion-col size='3'></ion-col>
        </ion-row>
    </div>
</template>
<script>
import {eventBus} from '../../main'
export default {
    data(){
        return{
            e1:'',
            e2:'',
            e3:'',
            e4:'',
            e5:'',
            e6:''
        }
    },
    methods:{
        eval(){
            let number=this.e1+this.e2+this.e3+this.e4+this.e5+this.e6;
            var obj={
                'phone' : this.$store.state.eval['phone'],
                'security' : number
            }
            this.$store.dispatch('evaluate',obj)
        }
    }
}
</script>
<style scoped>
ion-content{
    background-color: #f2b620;
}
.polje{
    background-color: white;
    border: 0.5px solid black;
}
div{
    background-color: #f2b620;
}
</style>
