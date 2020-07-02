<template>
    <div>
    <ion-slides>
        <ion-slide  v-for="i in lista">
            <Model :model='i'/>
        </ion-slide>
    </ion-slides>
    </div>
</template>
<script>
import Model from './GalerijaModel'
export default {
    props:['lista'],
    components:{
        Model
    }
}
</script>

<style scoped>

</style>