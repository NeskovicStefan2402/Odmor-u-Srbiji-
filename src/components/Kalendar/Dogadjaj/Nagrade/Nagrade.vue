<template>
        <div>
            <ion-scroll scrollY="true">
                <ion-row v-for="i in nagrade">
                    <NagradaElement :nagrada='i'/>
                </ion-row>
            </ion-scroll>
        </div>
</template>

<script>
import NagradaElement from './NagradaElement'
export default {
    props:['nagrade'],
    components:{
        NagradaElement
    }          
}

</script>

<style scoped>
div{
    width: 100%;
    align-content: center;
    padding: 5px;
    overflow:scroll;
    margin-bottom: 10px;
}
</style>