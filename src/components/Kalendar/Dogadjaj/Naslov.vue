<template>
    <ion-row>
        <ion-col size='8'>
            <h3>{{dogadjaj.tema}}</h3>
        </ion-col>
        <ion-col size='4' class="vreme">
            <h3>{{dogadjaj.vreme}}</h3>
        </ion-col>
    </ion-row>
    
</template>

<script>
export default {
    props:['dogadjaj'],
    methods:{
        close(){
            
        }
    }
}
</script>

<style>
.vreme{
    background-color: #e74c3c;
    color: white;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
</style>