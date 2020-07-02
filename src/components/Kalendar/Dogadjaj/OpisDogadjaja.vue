<template>
    <div>
        <Naslov :dogadjaj='dogadjaj'/>
        <hr>
        <Opis :dogadjaj='dogadjaj'/>
        <hr>
        <Nagrade :nagrade='dogadjaj.nagrade'/>
    </div>
</template>

<script>
import Naslov from './Naslov.vue'
import Opis from './Opis.vue'
import Nagrade from './Nagrade/Nagrade.vue'
export default {
    props:['dogadjaj'],
    components:{
        Naslov,
        Opis,
        Nagrade
    }
}
</script>

<style>
hr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.313) !important;
  width: 100% !important;
}
</style>