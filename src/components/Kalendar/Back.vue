<template>
    <button class="back" @click="back"><b>{{nazad}}</b></button>
</template>

<script>
export default {
    data(){
        return{
            nazad:'<'
        }
    },
    methods:{
        back(){
            this.$router.push('/')
        }
    }
}
</script>

<style>
.back{
    background-color: white;
    border-radius: 50%;
    font-size: 25px;
    width: 50px;
    height: 50px;
    margin-top: 5px;
    margin-left: 5px;
    position:absolute;
    top:0;
    left:0;
    outline: none;
}
</style>