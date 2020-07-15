<template>
    <div>
        <div class="rangLista"  v-for="(i ,item) in lista">
            <Element :korisnik='i' :rank='item'/>
        </div>
    </div>
</template>
<script>
import Element from './ElementListe'
export default {
    props:['lista'],
    components:{
        Element
    },
    created(){
        console.log('Usao u Rang listu');
        // console.log(this.);
        
    }
}
</script>

<style>
.rangLista{
    width: 100%;
}
</style>