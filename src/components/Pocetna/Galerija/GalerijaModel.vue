<template>
    <ion-card class='model'>
        <img :src="slika">
        <div>
            <p>{{model.naziv}}</p>
        </div>
    </ion-card>
</template>
<script>
export default {
    props:['model'],
    computed:{
        slika(){
            return 'http://127.0.0.1:5000/uploads/'+this.model.slika;
        }
    }
}
</script>

<style scoped>
img{
    width: 300px;
    height: 160px;
}
.model{
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.156);
    color:white;
    padding: 0px; 
    font-size: 12px; 
}
</style>