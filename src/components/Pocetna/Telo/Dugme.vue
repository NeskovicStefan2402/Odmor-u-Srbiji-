<template>
  <div>
      <img :src="slika" class='dugme' @click="openFrame">
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
    computed:{
        slika(){
            return 'http://127.0.0.1:5000/uploads/'+this.dugme.slika;
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

<style scoped>
.dugme{
    height: 70px;
    width: 70px;
}
</style>