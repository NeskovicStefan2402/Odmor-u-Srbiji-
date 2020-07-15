<template>
  <button></button>
</template>

<script>
import eventBus from '../../main'
export default {
    props:['position','text'],
    data(){
        return{
            selected:false
        }
    },
    methods:{
        select(){
            eventBus('select')
        }
    }
}
</script>

<style>

</style>