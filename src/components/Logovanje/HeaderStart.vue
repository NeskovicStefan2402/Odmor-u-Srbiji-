<template>
    <ion-toolbar class="dugme">
    <ion-segment class="dugme">
      <ion-segment-button value="all" checked @click="login()" class="dugme">
        Login
      </ion-segment-button>
      <ion-segment-button value="favorites"  @click="signup()" class="dugme">
        Sign up
      </ion-segment-button>
    </ion-segment>
  </ion-toolbar>
</template>
<script>
export default {
    methods:{
        login(){
            this.$store.state.type=true;
        },
        signup(){
            this.$store.state.type=false;
        }
    }
}
</script>
<style scoped>
.dugme{
  background-color: rgba(54, 12, 110, 0);
  color: black;
}
.ion-segment,.ion-segment-button,.ion-toolbar{
 background-color: rgba(54, 12, 110, 0.728);
}
</style>