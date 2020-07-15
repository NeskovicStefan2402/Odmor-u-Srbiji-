<template>
        <ion-row class="galerija">
                <ion-col size='6' v-for="i in slike">
                    <img :src="i">
                </ion-col>
        </ion-row>
</template>

<script>
export default {
    props:['slike']
}
</script>

<style scoped>
.galerija{
    background-color: white;
}
</style>