<template>
    <ion-slides pager='true' v-if='lista.length!=0'>
        <ion-slide v-for="i in lista" >
            <Model :model='i'/>
        </ion-slide>
    </ion-slides>
    <ion-slides pager='true' v-else>
        <ion-slide>
            <NoData/>
        </ion-slide>
    </ion-slides>
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