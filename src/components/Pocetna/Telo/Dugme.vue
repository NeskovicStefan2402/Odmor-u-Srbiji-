<template>
  <div>
      <img :src="require('@/assets/' + dugme.slika + '')" class='dugme' @click="openFrame">
  </div>
</template>

<script>
export default {
    props:['dugme'],
    data(){
        return{
            current:null
        }
    },
    methods:{
        openFrame(){
            if(this.dugme.lokacija=='lokacija'){
                this.getCurrentLocation()
            }else{
                this.$router.push('/'+this.dugme.lokacija)
            }
        },
        getCurrentLocation(){
            if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this.showPosition);
                setTimeout(() => {
                    alert('Trenutna lokacija je : '+this.current)
                },20);
            }
        },
        showPosition(position){
                this.current=L.latLng(position.coords.latitude,position.coords.longitude);
        }
    }
}
</script>

<style>
.dugme{
    height: 70px;
    width: 70px;
}
</style>