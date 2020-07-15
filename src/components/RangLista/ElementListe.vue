<template>
    <div :class="korisnik.phone==$store.state.user.phone ? 'me' : 'element' ">
        <ion-row>
            <ion-col size='2'>
                <img :src="profile">
            </ion-col>
            <ion-col size='1'>
                <h5>{{rank+1}}</h5>
            </ion-col>
            <ion-col size='5'>
                <p>{{korisnik.phone}}</p>
            </ion-col>
            <ion-col size='4'>
                <p>{{korisnik.score}}</p>
            </ion-col>
        </ion-row>
    </div>
</template>
<script>
export default {
    props:['korisnik','rank'],
    computed:{
        profile(){
            return 'http://127.0.0.1:5000/uploads/profile.png'
        }
    }
}
</script>

<style>
.element{
    background-color: #ececee00;
    color: #ececee;
    border-bottom: 0.5px solid yellow;
    margin: 10px;
}
.me{
    background-color: #ececee42;
    color: #ececee;
    border-bottom: 0.5px solid yellow;
    margin: 10px;
}
</style>