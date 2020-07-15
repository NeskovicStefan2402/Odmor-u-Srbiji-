<template>
    <div>
        <ion-slides v-if="$store.state.galerija.length!=0">
            <ion-slide v-for="i in $store.state.galerija">
                <Model :model='i'/>
            </ion-slide>
        </ion-slides>
        <ion-slides v-else>
            <ion-slide>
                <NoData/>
            </ion-slide>
        </ion-slides>
    </div>
</template>
<script>
import Model from './GalerijaModel'
import NoData from './NoData'
export default {
    props:['lista'],
    components:{
        Model,
        NoData
    }
}
</script>

<style scoped>

</style>