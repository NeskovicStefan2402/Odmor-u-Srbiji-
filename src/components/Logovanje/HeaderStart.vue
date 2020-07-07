<template>
    <ion-toolbar>
    <ion-segment>
      <ion-segment-button value="all" checked @click="login()">
        Login
      </ion-segment-button>
      <ion-segment-button value="favorites"  @click="signup()">
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