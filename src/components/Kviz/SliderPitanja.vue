<template>
    <ion-slides>
    <ion-slide v-for="i in $store.state.questions">
        <Pitanje :pitanje='i'/>
    </ion-slide>
    <ion-slide>
        <Poslednji/>
    </ion-slide>
    </ion-slides>
</template>
<script>
import Pitanje from './Pitanje'
import Poslednji from './PoslednjiSlide'
export default {
    components:{
        Pitanje,
        Poslednji
    }
}
</script>

<style scoped>
</style>