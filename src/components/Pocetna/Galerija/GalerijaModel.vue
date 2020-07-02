<template>
    <div class='model'>
        <img :src="require('@/assets/' + model.slika + '')">
        <div>
            <p>{{model.naziv}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:['model']
}
</script>

<style scoped>
img{
    width: 300px;
    height: 160px;
}
.model{
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.156);
    color:white;
    padding: 0px; 
    font-size: 12px; 
}

</style>