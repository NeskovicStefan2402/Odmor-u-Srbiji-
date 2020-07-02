<template>
    <ion-row class="nagrada">
            <ion-col size='2' class="simbol">
                <img src='../../../../assets/rank.png'/>
                <br>
                <h4>{{nagrada.rank}}</h4>
            </ion-col>
            <ion-col size='10'>
                <h5>{{nagrada.sponzor}}</h5>
                <p>{{nagrada.opis}}</p>
            </ion-col>
      </ion-row>
</template>

<script>
export default {
    props:['nagrada']
}
</script>

<style scoped>
.nagrada{
    background-color: #ecf0f1;
    border-radius: 10px;
    width:100%;
    margin-bottom: 10px;
}
h5{
    font-size: 16px;
}
p{
    font-size: 12px;
}
.simbol{
   background-color: #bdc3c7; 
   justify-content: center;
}

</style>