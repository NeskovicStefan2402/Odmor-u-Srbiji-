<template>
    <div>
        <ion-row>
            <ion-col size='4'>
                <!-- <img :src="require('@/assets/' + dogadjaj.slika + '')"> -->
            </ion-col>
            <ion-col size='8'>
                <p>Datum kviza: {{dogadjaj.datum}}</p>
                <p>Broj pitanja: {{dogadjaj.brojPitanja}}</p>
            </ion-col>
        </ion-row>
    </div>
</template>
<script>
export default {
    props:['dogadjaj']
}
</script>

<style scoped>

</style>