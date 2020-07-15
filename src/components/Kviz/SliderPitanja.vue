<template>
    <div>
        <ion-slides>
        <ion-slide v-for="i in $store.state.questions.pitanja">
            <Pitanje :pitanje='i'/>
        </ion-slide>
        <ion-slide>
            <Poslednji/>
        </ion-slide>
        </ion-slides>
    </div>
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
ion-slides{
    background-color: white;
}
</style>