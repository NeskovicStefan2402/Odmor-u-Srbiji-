<template>
        <div class="odeljak">
            <h3>{{naslov}}</h3>
            <p>{{text}}</p>
        </div> 
</template>

<script>
export default {
    props:['text','naslov']
}
</script>

<style scoped>
.odeljak{
    width: 100%;
    /* align-content: center; */
    padding: 15px;
    font-size: 0.8rem;
    margin-bottom: 10px;
    background-color: white;
}
h3{
    text-align: left;
    font-size: 1rem;
}
p{
   text-align: justify; 
}
</style>