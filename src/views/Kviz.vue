<template>
  <Slider v-if='$store.state.questions.length!=0'/>
  <Ucitavanje v-else/>
</template>
<script>
import Slider from '../components/Kviz/SliderPitanja'
import Ucitavanje from '../components/Kviz/Ucitavanje'
export default {
    components:{
        Slider,
        Ucitavanje
    }
}
</script>

<style scoped>

</style>